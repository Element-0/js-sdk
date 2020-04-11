import Client, { ServiceProxy } from "ws-gw";
import Proto from "./proto";
import { uuidToString, LongToBigInt, BigIntToLong } from "./utils";

export type CommandResponse = {
  message: string;
  extra: Record<string, any>;
};

export enum PlayerChangeType {
  Joined,
  Left,
}

export type PlayerEntity = {
  name: string;
  xuid: BigInt;
  uuid: string;
  address: string;
};

function convertEntity(re: Proto.Player.PlayerEntity): PlayerEntity {
  const uuid = re.uuid();
  return {
    name: re.name(),
    xuid: LongToBigInt(re.xuid()),
    uuid: uuidToString(uuid.bb.bytes().subarray(uuid.bb_pos, uuid.bb_pos + 16)),
    address: re.address(),
  };
}

export class Session {
  constructor(private proxy: ServiceProxy) {}

  init(fn: (sess: Session) => PromiseLike<void>) {
    this.proxy.init(() => fn(this));
  }

  async executeCommand(
    command: string,
    name: string = "script"
  ): Promise<CommandResponse> {
    const builder = new Proto.Builder();
    builder.finish(
      Proto.Command.CommandRequst.createCommandRequst(
        builder,
        builder.createString(name),
        builder.createString(command)
      )
    );
    const req = builder.asUint8Array();
    const ret = await this.proxy.call("execute_command", req);
    const resp = Proto.Command.CommandResponse.getRootAsCommandResponse(
      new Proto.ByteBuffer(ret)
    );
    return {
      message: resp.message(),
      extra: JSON.parse(resp.extra()),
    };
  }

  async onPlayerChange(
    cb: (type: PlayerChangeType, ent: PlayerEntity) => void
  ) {
    await this.proxy.on("player_change", async (data) => {
      const ev = Proto.Player.PlayerEventPacket.getRootAsPlayerEventPacket(
        new Proto.ByteBuffer(data)
      );
      const type =
        ev.eventType() === Proto.Player.PlayerEvent.joined
          ? PlayerChangeType.Joined
          : PlayerChangeType.Left;
      const ent = convertEntity(ev.event(new Proto.Player.PlayerEntity()));
      cb(type, ent);
    });
  }

  async getPlayerList() {
    const ret = await this.proxy.call("playerlist", new Uint8Array());
    const resp = Proto.Player.PlayerList.getRootAsPlayerList(
      new Proto.ByteBuffer(ret)
    );
    return Array.from({ length: resp.playersLength() }, (_, i) =>
      convertEntity(resp.players(i))
    );
  }

  async findPlayerByXUID(xuid: bigint): Promise<PlayerEntity | null> {
    const builder = new Proto.Builder();
    builder.finish(
      Proto.Player.FindPlayerPacket.createFindPlayerPacket(
        builder,
        Proto.Player.FindPlayer.FindXUID,
        Proto.Player.FindXUID.createFindXUID(builder, BigIntToLong(xuid))
      )
    );
    const ret = await this.proxy.call("findplayer", builder.asUint8Array());
    const result = Proto.Player.FindResult.getRootAsFindResult(
      new Proto.ByteBuffer(ret)
    );
    const ent = result.entity();
    if (ent) return convertEntity(ent);
    return null;
  }

  async findPlayerByNAME(name: string): Promise<PlayerEntity | null> {
    const builder = new Proto.Builder();
    builder.finish(
      Proto.Player.FindPlayerPacket.createFindPlayerPacket(
        builder,
        Proto.Player.FindPlayer.FindNAME,
        Proto.Player.FindNAME.createFindNAME(
          builder,
          builder.createString(name)
        )
      )
    );
    const ret = await this.proxy.call("findplayer", builder.asUint8Array());
    const result = Proto.Player.FindResult.getRootAsFindResult(
      new Proto.ByteBuffer(ret)
    );
    const ent = result.entity();
    if (ent) return convertEntity(ent);
    return null;
  }

  async blacklistAddXUID(
    xuid: bigint,
    name: string,
    reason: string,
    op: string
  ) {
    const builder = new Proto.Builder();
    builder.finish(
      Proto.Blacklist.BlacklistOp.createBlacklistOp(
        builder,
        Proto.Blacklist.Op.AddXUID,
        Proto.Blacklist.AddXUID.createAddXUID(
          builder,
          BigIntToLong(xuid),
          builder.createString(name),
          builder.createString(reason),
          builder.createString(op)
        )
      )
    );
    await this.proxy.call("blacklist", builder.asUint8Array());
  }

  async blacklistAddNAME(name: string, reason: string, op: string) {
    const builder = new Proto.Builder();
    builder.finish(
      Proto.Blacklist.BlacklistOp.createBlacklistOp(
        builder,
        Proto.Blacklist.Op.AddNAME,
        Proto.Blacklist.AddNAME.createAddNAME(
          builder,
          builder.createString(name),
          builder.createString(reason),
          builder.createString(op)
        )
      )
    );
    await this.proxy.call("blacklist", builder.asUint8Array());
  }

  async blacklistRemoveXUID(xuid: bigint) {
    const builder = new Proto.Builder();
    builder.finish(
      Proto.Blacklist.BlacklistOp.createBlacklistOp(
        builder,
        Proto.Blacklist.Op.RemoveXUID,
        Proto.Blacklist.RemoveXUID.createRemoveXUID(builder, BigIntToLong(xuid))
      )
    );
    await this.proxy.call("blacklist", builder.asUint8Array());
  }

  async blacklistRemoveNAME(name: string) {
    const builder = new Proto.Builder();
    builder.finish(
      Proto.Blacklist.BlacklistOp.createBlacklistOp(
        builder,
        Proto.Blacklist.Op.RemoveNAME,
        Proto.Blacklist.RemoveNAME.createRemoveNAME(
          builder,
          builder.createString(name)
        )
      )
    );
    await this.proxy.call("blacklist", builder.asUint8Array());
  }

  async onChat(cb: (sender: string, content: string) => void) {
    await this.proxy.on("chat", async (data) => {
      const resp = Proto.ChatEvent.ChatEvent.getRootAsChatEvent(
        new Proto.ByteBuffer(data)
      );
      cb(resp.displayName(), resp.content());
    });
  }

  async sendBroadcast(sender: string, content: string) {
    const builder = new Proto.Builder();
    builder.finish(
      Proto.Chat.Chat.createChat(
        builder,
        builder.createString(sender),
        builder.createString(content)
      )
    );
    await this.proxy.call("send_broadcast", builder.asUint8Array());
  }
}

export default class ElementZeroClient {
  client?: Client;

  async connect(endpoint: string) {
    const client = new Client();
    await client.connect(endpoint, console.error);
    this.client = client;
  }

  async session(name: string) {
    return new Session(await this.client.get(name));
  }
}

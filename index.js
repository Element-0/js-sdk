"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_gw_1 = require("ws-gw");
const proto_1 = require("./proto");
const utils_1 = require("./utils");
var PlayerChangeType;
(function (PlayerChangeType) {
    PlayerChangeType[PlayerChangeType["Joined"] = 0] = "Joined";
    PlayerChangeType[PlayerChangeType["Left"] = 1] = "Left";
})(PlayerChangeType = exports.PlayerChangeType || (exports.PlayerChangeType = {}));
function convertEntity(re) {
    const uuid = re.uuid();
    return {
        name: re.name(),
        xuid: utils_1.LongToBigInt(re.xuid()),
        uuid: utils_1.uuidToString(uuid.bb.bytes().subarray(uuid.bb_pos, uuid.bb_pos + 16)),
        address: re.address(),
    };
}
class Session {
    constructor(proxy) {
        this.proxy = proxy;
    }
    init(fn) {
        this.proxy.init(() => fn(this));
    }
    async executeCommand(command, name = "script") {
        const builder = new proto_1.default.Builder();
        builder.finish(proto_1.default.Command.CommandRequst.createCommandRequst(builder, builder.createString(name), builder.createString(command)));
        const req = builder.asUint8Array();
        const ret = await this.proxy.call("execute_command", req);
        const resp = proto_1.default.Command.CommandResponse.getRootAsCommandResponse(new proto_1.default.ByteBuffer(ret));
        return {
            message: resp.message(),
            extra: JSON.parse(resp.extra()),
        };
    }
    async onPlayerChange(cb) {
        await this.proxy.on("player_change", async (data) => {
            const ev = proto_1.default.Player.PlayerEventPacket.getRootAsPlayerEventPacket(new proto_1.default.ByteBuffer(data));
            const type = ev.eventType() === proto_1.default.Player.PlayerEvent.joined
                ? PlayerChangeType.Joined
                : PlayerChangeType.Left;
            const ent = convertEntity(ev.event(new proto_1.default.Player.PlayerEntity()));
            cb(type, ent);
        });
    }
    async getPlayerList() {
        const ret = await this.proxy.call("playerlist", new Uint8Array());
        const resp = proto_1.default.Player.PlayerList.getRootAsPlayerList(new proto_1.default.ByteBuffer(ret));
        return Array.from({ length: resp.playersLength() }, (_, i) => convertEntity(resp.players(i)));
    }
    async findPlayerByXUID(xuid) {
        const builder = new proto_1.default.Builder();
        builder.finish(proto_1.default.Player.FindPlayerPacket.createFindPlayerPacket(builder, proto_1.default.Player.FindPlayer.FindXUID, proto_1.default.Player.FindXUID.createFindXUID(builder, utils_1.BigIntToLong(xuid))));
        const ret = await this.proxy.call("findplayer", builder.asUint8Array());
        const result = proto_1.default.Player.FindResult.getRootAsFindResult(new proto_1.default.ByteBuffer(ret));
        const ent = result.entity();
        if (ent)
            return convertEntity(ent);
        return null;
    }
    async findPlayerByNAME(name) {
        const builder = new proto_1.default.Builder();
        builder.finish(proto_1.default.Player.FindPlayerPacket.createFindPlayerPacket(builder, proto_1.default.Player.FindPlayer.FindNAME, proto_1.default.Player.FindNAME.createFindNAME(builder, builder.createString(name))));
        const ret = await this.proxy.call("findplayer", builder.asUint8Array());
        const result = proto_1.default.Player.FindResult.getRootAsFindResult(new proto_1.default.ByteBuffer(ret));
        const ent = result.entity();
        if (ent)
            return convertEntity(ent);
        return null;
    }
    async blacklistAddXUID(xuid, name, reason, op) {
        const builder = new proto_1.default.Builder();
        builder.finish(proto_1.default.Blacklist.BlacklistOp.createBlacklistOp(builder, proto_1.default.Blacklist.Op.AddXUID, proto_1.default.Blacklist.AddXUID.createAddXUID(builder, utils_1.BigIntToLong(xuid), builder.createString(name), builder.createString(reason), builder.createString(op))));
        await this.proxy.call("blacklist", builder.asUint8Array());
    }
    async blacklistAddNAME(name, reason, op) {
        const builder = new proto_1.default.Builder();
        builder.finish(proto_1.default.Blacklist.BlacklistOp.createBlacklistOp(builder, proto_1.default.Blacklist.Op.AddNAME, proto_1.default.Blacklist.AddNAME.createAddNAME(builder, builder.createString(name), builder.createString(reason), builder.createString(op))));
        await this.proxy.call("blacklist", builder.asUint8Array());
    }
    async blacklistRemoveXUID(xuid) {
        const builder = new proto_1.default.Builder();
        builder.finish(proto_1.default.Blacklist.BlacklistOp.createBlacklistOp(builder, proto_1.default.Blacklist.Op.RemoveXUID, proto_1.default.Blacklist.RemoveXUID.createRemoveXUID(builder, utils_1.BigIntToLong(xuid))));
        await this.proxy.call("blacklist", builder.asUint8Array());
    }
    async blacklistRemoveNAME(name) {
        const builder = new proto_1.default.Builder();
        builder.finish(proto_1.default.Blacklist.BlacklistOp.createBlacklistOp(builder, proto_1.default.Blacklist.Op.RemoveNAME, proto_1.default.Blacklist.RemoveNAME.createRemoveNAME(builder, builder.createString(name))));
        await this.proxy.call("blacklist", builder.asUint8Array());
    }
    async onChat(cb) {
        await this.proxy.on("chat", async (data) => {
            const resp = proto_1.default.ChatEvent.ChatEvent.getRootAsChatEvent(new proto_1.default.ByteBuffer(data));
            cb(resp.displayName(), resp.content());
        });
    }
    async sendBroadcast(sender, content) {
        const builder = new proto_1.default.Builder();
        builder.finish(proto_1.default.Chat.Chat.createChat(builder, builder.createString(sender), builder.createString(content)));
        await this.proxy.call("send_broadcast", builder.asUint8Array());
    }
}
exports.Session = Session;
class ElementZeroClient {
    async connect(endpoint) {
        const client = new ws_gw_1.default();
        await client.connect(endpoint, console.error);
        this.client = client;
    }
    async session(name) {
        return new Session(await this.client.get(name));
    }
}
exports.default = ElementZeroClient;

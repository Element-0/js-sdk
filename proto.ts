import * as Flatbuffers from "./proto/flatbuffers";

import * as CommandT from "./proto/command_generated";
import * as ChatT from "./proto/chat_generated";
import * as ChatEventT from "./proto/chat_event_generated";
import * as BlacklistT from "./proto/blacklist_generated";
import * as UUIDT from "./proto/uuid_generated";
import * as PlayerT from "./proto/player_generated";

namespace Proto {
  export import ByteBuffer = Flatbuffers.ByteBuffer;
  export import Builder = Flatbuffers.Builder;
  export import Encoding = Flatbuffers.Encoding;
  export import Long = Flatbuffers.Long;

  export import UUID = UUIDT.Mod.proto.UUID;
  export import Player = PlayerT.Mod.proto;
  export import Blacklist = BlacklistT.Mod.proto.blacklist;
  export import Command = CommandT.Mod.proto;
  export import Chat = ChatT.Mod.proto;
  export import ChatEvent = ChatEventT.Mod.proto;
}

export default Proto;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Flatbuffers = require("./proto/flatbuffers");
const CommandT = require("./proto/command_generated");
const ChatT = require("./proto/chat_generated");
const ChatEventT = require("./proto/chat_event_generated");
const BlacklistT = require("./proto/blacklist_generated");
const UUIDT = require("./proto/uuid_generated");
const PlayerT = require("./proto/player_generated");
var Proto;
(function (Proto) {
    Proto.ByteBuffer = Flatbuffers.ByteBuffer;
    Proto.Builder = Flatbuffers.Builder;
    Proto.Encoding = Flatbuffers.Encoding;
    Proto.Long = Flatbuffers.Long;
    Proto.UUID = UUIDT.Mod.proto.UUID;
    Proto.Player = PlayerT.Mod.proto;
    Proto.Blacklist = BlacklistT.Mod.proto.blacklist;
    Proto.Command = CommandT.Mod.proto;
    Proto.Chat = ChatT.Mod.proto;
    Proto.ChatEvent = ChatEventT.Mod.proto;
})(Proto || (Proto = {}));
exports.default = Proto;

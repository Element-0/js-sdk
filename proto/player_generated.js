"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, "__esModule", { value: true });
const flatbuffers = require("./flatbuffers");
const NS11546202406788532957 = require("./uuid_generated");
/**
 * @enum {number}
 */
var Mod;
(function (Mod) {
    var proto;
    (function (proto) {
        let PlayerEvent;
        (function (PlayerEvent) {
            PlayerEvent[PlayerEvent["NONE"] = 0] = "NONE";
            PlayerEvent[PlayerEvent["joined"] = 1] = "joined";
            PlayerEvent[PlayerEvent["left"] = 2] = "left";
        })(PlayerEvent = proto.PlayerEvent || (proto.PlayerEvent = {}));
    })(proto = Mod.proto || (Mod.proto = {}));
})(Mod = exports.Mod || (exports.Mod = {}));
;
/**
 * @enum {number}
 */
(function (Mod) {
    var proto;
    (function (proto) {
        let FindPlayer;
        (function (FindPlayer) {
            FindPlayer[FindPlayer["NONE"] = 0] = "NONE";
            FindPlayer[FindPlayer["FindXUID"] = 1] = "FindXUID";
            FindPlayer[FindPlayer["FindUUID"] = 2] = "FindUUID";
            FindPlayer[FindPlayer["FindNAME"] = 3] = "FindNAME";
        })(FindPlayer = proto.FindPlayer || (proto.FindPlayer = {}));
    })(proto = Mod.proto || (Mod.proto = {}));
})(Mod = exports.Mod || (exports.Mod = {}));
;
/**
 * @constructor
 */
(function (Mod) {
    var proto;
    (function (proto) {
        class PlayerEntity {
            constructor() {
                this.bb = null;
                this.bb_pos = 0;
            }
            /**
             * @param number i
             * @param flatbuffers.ByteBuffer bb
             * @returns PlayerEntity
             */
            __init(i, bb) {
                this.bb_pos = i;
                this.bb = bb;
                return this;
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param PlayerEntity= obj
             * @returns PlayerEntity
             */
            static getRootAsPlayerEntity(bb, obj) {
                return (obj || new PlayerEntity()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param PlayerEntity= obj
             * @returns PlayerEntity
             */
            static getSizePrefixedRootAsPlayerEntity(bb, obj) {
                bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
                return (obj || new PlayerEntity()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            name(optionalEncoding) {
                var offset = this.bb.__offset(this.bb_pos, 4);
                return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
            }
            ;
            /**
             * @returns flatbuffers.Long
             */
            xuid() {
                var offset = this.bb.__offset(this.bb_pos, 6);
                return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
            }
            ;
            /**
             * @param Mod.proto.UUID= obj
             * @returns Mod.proto.UUID|null
             */
            uuid(obj) {
                var offset = this.bb.__offset(this.bb_pos, 8);
                return offset ? (obj || new NS11546202406788532957.Mod.proto.UUID()).__init(this.bb_pos + offset, this.bb) : null;
            }
            ;
            address(optionalEncoding) {
                var offset = this.bb.__offset(this.bb_pos, 10);
                return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             */
            static startPlayerEntity(builder) {
                builder.startObject(4);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Offset nameOffset
             */
            static addName(builder, nameOffset) {
                builder.addFieldOffset(0, nameOffset, 0);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Long xuid
             */
            static addXuid(builder, xuid) {
                builder.addFieldInt64(1, xuid, builder.createLong(0, 0));
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Offset uuidOffset
             */
            static addUuid(builder, uuidOffset) {
                builder.addFieldStruct(2, uuidOffset, 0);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Offset addressOffset
             */
            static addAddress(builder, addressOffset) {
                builder.addFieldOffset(3, addressOffset, 0);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @returns flatbuffers.Offset
             */
            static endPlayerEntity(builder) {
                var offset = builder.endObject();
                return offset;
            }
            ;
            static createPlayerEntity(builder, nameOffset, xuid, uuidOffset, addressOffset) {
                PlayerEntity.startPlayerEntity(builder);
                PlayerEntity.addName(builder, nameOffset);
                PlayerEntity.addXuid(builder, xuid);
                PlayerEntity.addUuid(builder, uuidOffset);
                PlayerEntity.addAddress(builder, addressOffset);
                return PlayerEntity.endPlayerEntity(builder);
            }
        }
        proto.PlayerEntity = PlayerEntity;
    })(proto = Mod.proto || (Mod.proto = {}));
})(Mod = exports.Mod || (exports.Mod = {}));
/**
 * @constructor
 */
(function (Mod) {
    var proto;
    (function (proto) {
        class PlayerEventPacket {
            constructor() {
                this.bb = null;
                this.bb_pos = 0;
            }
            /**
             * @param number i
             * @param flatbuffers.ByteBuffer bb
             * @returns PlayerEventPacket
             */
            __init(i, bb) {
                this.bb_pos = i;
                this.bb = bb;
                return this;
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param PlayerEventPacket= obj
             * @returns PlayerEventPacket
             */
            static getRootAsPlayerEventPacket(bb, obj) {
                return (obj || new PlayerEventPacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param PlayerEventPacket= obj
             * @returns PlayerEventPacket
             */
            static getSizePrefixedRootAsPlayerEventPacket(bb, obj) {
                bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
                return (obj || new PlayerEventPacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            /**
             * @returns Mod.proto.PlayerEvent
             */
            eventType() {
                var offset = this.bb.__offset(this.bb_pos, 4);
                return offset ? /**  */ (this.bb.readUint8(this.bb_pos + offset)) : Mod.proto.PlayerEvent.NONE;
            }
            ;
            /**
             * @param flatbuffers.Table obj
             * @returns ?flatbuffers.Table
             */
            event(obj) {
                var offset = this.bb.__offset(this.bb_pos, 6);
                return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             */
            static startPlayerEventPacket(builder) {
                builder.startObject(2);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param Mod.proto.PlayerEvent eventType
             */
            static addEventType(builder, eventType) {
                builder.addFieldInt8(0, eventType, Mod.proto.PlayerEvent.NONE);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Offset eventOffset
             */
            static addEvent(builder, eventOffset) {
                builder.addFieldOffset(1, eventOffset, 0);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @returns flatbuffers.Offset
             */
            static endPlayerEventPacket(builder) {
                var offset = builder.endObject();
                return offset;
            }
            ;
            static createPlayerEventPacket(builder, eventType, eventOffset) {
                PlayerEventPacket.startPlayerEventPacket(builder);
                PlayerEventPacket.addEventType(builder, eventType);
                PlayerEventPacket.addEvent(builder, eventOffset);
                return PlayerEventPacket.endPlayerEventPacket(builder);
            }
        }
        proto.PlayerEventPacket = PlayerEventPacket;
    })(proto = Mod.proto || (Mod.proto = {}));
})(Mod = exports.Mod || (exports.Mod = {}));
/**
 * @constructor
 */
(function (Mod) {
    var proto;
    (function (proto) {
        class PlayerList {
            constructor() {
                this.bb = null;
                this.bb_pos = 0;
            }
            /**
             * @param number i
             * @param flatbuffers.ByteBuffer bb
             * @returns PlayerList
             */
            __init(i, bb) {
                this.bb_pos = i;
                this.bb = bb;
                return this;
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param PlayerList= obj
             * @returns PlayerList
             */
            static getRootAsPlayerList(bb, obj) {
                return (obj || new PlayerList()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param PlayerList= obj
             * @returns PlayerList
             */
            static getSizePrefixedRootAsPlayerList(bb, obj) {
                bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
                return (obj || new PlayerList()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            /**
             * @param number index
             * @param Mod.proto.PlayerEntity= obj
             * @returns Mod.proto.PlayerEntity
             */
            players(index, obj) {
                var offset = this.bb.__offset(this.bb_pos, 4);
                return offset ? (obj || new Mod.proto.PlayerEntity()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
            }
            ;
            /**
             * @returns number
             */
            playersLength() {
                var offset = this.bb.__offset(this.bb_pos, 4);
                return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             */
            static startPlayerList(builder) {
                builder.startObject(1);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Offset playersOffset
             */
            static addPlayers(builder, playersOffset) {
                builder.addFieldOffset(0, playersOffset, 0);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param Array.<flatbuffers.Offset> data
             * @returns flatbuffers.Offset
             */
            static createPlayersVector(builder, data) {
                builder.startVector(4, data.length, 4);
                for (var i = data.length - 1; i >= 0; i--) {
                    builder.addOffset(data[i]);
                }
                return builder.endVector();
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param number numElems
             */
            static startPlayersVector(builder, numElems) {
                builder.startVector(4, numElems, 4);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @returns flatbuffers.Offset
             */
            static endPlayerList(builder) {
                var offset = builder.endObject();
                return offset;
            }
            ;
            static createPlayerList(builder, playersOffset) {
                PlayerList.startPlayerList(builder);
                PlayerList.addPlayers(builder, playersOffset);
                return PlayerList.endPlayerList(builder);
            }
        }
        proto.PlayerList = PlayerList;
    })(proto = Mod.proto || (Mod.proto = {}));
})(Mod = exports.Mod || (exports.Mod = {}));
/**
 * @constructor
 */
(function (Mod) {
    var proto;
    (function (proto) {
        class FindXUID {
            constructor() {
                this.bb = null;
                this.bb_pos = 0;
            }
            /**
             * @param number i
             * @param flatbuffers.ByteBuffer bb
             * @returns FindXUID
             */
            __init(i, bb) {
                this.bb_pos = i;
                this.bb = bb;
                return this;
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param FindXUID= obj
             * @returns FindXUID
             */
            static getRootAsFindXUID(bb, obj) {
                return (obj || new FindXUID()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param FindXUID= obj
             * @returns FindXUID
             */
            static getSizePrefixedRootAsFindXUID(bb, obj) {
                bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
                return (obj || new FindXUID()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            /**
             * @returns flatbuffers.Long
             */
            xuid() {
                var offset = this.bb.__offset(this.bb_pos, 4);
                return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             */
            static startFindXUID(builder) {
                builder.startObject(1);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Long xuid
             */
            static addXuid(builder, xuid) {
                builder.addFieldInt64(0, xuid, builder.createLong(0, 0));
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @returns flatbuffers.Offset
             */
            static endFindXUID(builder) {
                var offset = builder.endObject();
                return offset;
            }
            ;
            static createFindXUID(builder, xuid) {
                FindXUID.startFindXUID(builder);
                FindXUID.addXuid(builder, xuid);
                return FindXUID.endFindXUID(builder);
            }
        }
        proto.FindXUID = FindXUID;
    })(proto = Mod.proto || (Mod.proto = {}));
})(Mod = exports.Mod || (exports.Mod = {}));
/**
 * @constructor
 */
(function (Mod) {
    var proto;
    (function (proto) {
        class FindUUID {
            constructor() {
                this.bb = null;
                this.bb_pos = 0;
            }
            /**
             * @param number i
             * @param flatbuffers.ByteBuffer bb
             * @returns FindUUID
             */
            __init(i, bb) {
                this.bb_pos = i;
                this.bb = bb;
                return this;
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param FindUUID= obj
             * @returns FindUUID
             */
            static getRootAsFindUUID(bb, obj) {
                return (obj || new FindUUID()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param FindUUID= obj
             * @returns FindUUID
             */
            static getSizePrefixedRootAsFindUUID(bb, obj) {
                bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
                return (obj || new FindUUID()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            /**
             * @param Mod.proto.UUID= obj
             * @returns Mod.proto.UUID|null
             */
            uuid(obj) {
                var offset = this.bb.__offset(this.bb_pos, 4);
                return offset ? (obj || new NS11546202406788532957.Mod.proto.UUID()).__init(this.bb_pos + offset, this.bb) : null;
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             */
            static startFindUUID(builder) {
                builder.startObject(1);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Offset uuidOffset
             */
            static addUuid(builder, uuidOffset) {
                builder.addFieldStruct(0, uuidOffset, 0);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @returns flatbuffers.Offset
             */
            static endFindUUID(builder) {
                var offset = builder.endObject();
                return offset;
            }
            ;
            static createFindUUID(builder, uuidOffset) {
                FindUUID.startFindUUID(builder);
                FindUUID.addUuid(builder, uuidOffset);
                return FindUUID.endFindUUID(builder);
            }
        }
        proto.FindUUID = FindUUID;
    })(proto = Mod.proto || (Mod.proto = {}));
})(Mod = exports.Mod || (exports.Mod = {}));
/**
 * @constructor
 */
(function (Mod) {
    var proto;
    (function (proto) {
        class FindNAME {
            constructor() {
                this.bb = null;
                this.bb_pos = 0;
            }
            /**
             * @param number i
             * @param flatbuffers.ByteBuffer bb
             * @returns FindNAME
             */
            __init(i, bb) {
                this.bb_pos = i;
                this.bb = bb;
                return this;
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param FindNAME= obj
             * @returns FindNAME
             */
            static getRootAsFindNAME(bb, obj) {
                return (obj || new FindNAME()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param FindNAME= obj
             * @returns FindNAME
             */
            static getSizePrefixedRootAsFindNAME(bb, obj) {
                bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
                return (obj || new FindNAME()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            name(optionalEncoding) {
                var offset = this.bb.__offset(this.bb_pos, 4);
                return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             */
            static startFindNAME(builder) {
                builder.startObject(1);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Offset nameOffset
             */
            static addName(builder, nameOffset) {
                builder.addFieldOffset(0, nameOffset, 0);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @returns flatbuffers.Offset
             */
            static endFindNAME(builder) {
                var offset = builder.endObject();
                builder.requiredField(offset, 4); // name
                return offset;
            }
            ;
            static createFindNAME(builder, nameOffset) {
                FindNAME.startFindNAME(builder);
                FindNAME.addName(builder, nameOffset);
                return FindNAME.endFindNAME(builder);
            }
        }
        proto.FindNAME = FindNAME;
    })(proto = Mod.proto || (Mod.proto = {}));
})(Mod = exports.Mod || (exports.Mod = {}));
/**
 * @constructor
 */
(function (Mod) {
    var proto;
    (function (proto) {
        class FindPlayerPacket {
            constructor() {
                this.bb = null;
                this.bb_pos = 0;
            }
            /**
             * @param number i
             * @param flatbuffers.ByteBuffer bb
             * @returns FindPlayerPacket
             */
            __init(i, bb) {
                this.bb_pos = i;
                this.bb = bb;
                return this;
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param FindPlayerPacket= obj
             * @returns FindPlayerPacket
             */
            static getRootAsFindPlayerPacket(bb, obj) {
                return (obj || new FindPlayerPacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param FindPlayerPacket= obj
             * @returns FindPlayerPacket
             */
            static getSizePrefixedRootAsFindPlayerPacket(bb, obj) {
                bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
                return (obj || new FindPlayerPacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            /**
             * @returns Mod.proto.FindPlayer
             */
            findType() {
                var offset = this.bb.__offset(this.bb_pos, 4);
                return offset ? /**  */ (this.bb.readUint8(this.bb_pos + offset)) : Mod.proto.FindPlayer.NONE;
            }
            ;
            /**
             * @param flatbuffers.Table obj
             * @returns ?flatbuffers.Table
             */
            find(obj) {
                var offset = this.bb.__offset(this.bb_pos, 6);
                return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             */
            static startFindPlayerPacket(builder) {
                builder.startObject(2);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param Mod.proto.FindPlayer findType
             */
            static addFindType(builder, findType) {
                builder.addFieldInt8(0, findType, Mod.proto.FindPlayer.NONE);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Offset findOffset
             */
            static addFind(builder, findOffset) {
                builder.addFieldOffset(1, findOffset, 0);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @returns flatbuffers.Offset
             */
            static endFindPlayerPacket(builder) {
                var offset = builder.endObject();
                return offset;
            }
            ;
            static createFindPlayerPacket(builder, findType, findOffset) {
                FindPlayerPacket.startFindPlayerPacket(builder);
                FindPlayerPacket.addFindType(builder, findType);
                FindPlayerPacket.addFind(builder, findOffset);
                return FindPlayerPacket.endFindPlayerPacket(builder);
            }
        }
        proto.FindPlayerPacket = FindPlayerPacket;
    })(proto = Mod.proto || (Mod.proto = {}));
})(Mod = exports.Mod || (exports.Mod = {}));
/**
 * @constructor
 */
(function (Mod) {
    var proto;
    (function (proto) {
        class FindResult {
            constructor() {
                this.bb = null;
                this.bb_pos = 0;
            }
            /**
             * @param number i
             * @param flatbuffers.ByteBuffer bb
             * @returns FindResult
             */
            __init(i, bb) {
                this.bb_pos = i;
                this.bb = bb;
                return this;
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param FindResult= obj
             * @returns FindResult
             */
            static getRootAsFindResult(bb, obj) {
                return (obj || new FindResult()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param FindResult= obj
             * @returns FindResult
             */
            static getSizePrefixedRootAsFindResult(bb, obj) {
                bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
                return (obj || new FindResult()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            /**
             * @param Mod.proto.PlayerEntity= obj
             * @returns Mod.proto.PlayerEntity|null
             */
            entity(obj) {
                var offset = this.bb.__offset(this.bb_pos, 4);
                return offset ? (obj || new Mod.proto.PlayerEntity()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             */
            static startFindResult(builder) {
                builder.startObject(1);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Offset entityOffset
             */
            static addEntity(builder, entityOffset) {
                builder.addFieldOffset(0, entityOffset, 0);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @returns flatbuffers.Offset
             */
            static endFindResult(builder) {
                var offset = builder.endObject();
                return offset;
            }
            ;
            static createFindResult(builder, entityOffset) {
                FindResult.startFindResult(builder);
                FindResult.addEntity(builder, entityOffset);
                return FindResult.endFindResult(builder);
            }
        }
        proto.FindResult = FindResult;
    })(proto = Mod.proto || (Mod.proto = {}));
})(Mod = exports.Mod || (exports.Mod = {}));
"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, "__esModule", { value: true });
const flatbuffers = require("./flatbuffers");
/**
 * @constructor
 */
var Mod;
(function (Mod) {
    var proto;
    (function (proto) {
        class CommandRequst {
            constructor() {
                this.bb = null;
                this.bb_pos = 0;
            }
            /**
             * @param number i
             * @param flatbuffers.ByteBuffer bb
             * @returns CommandRequst
             */
            __init(i, bb) {
                this.bb_pos = i;
                this.bb = bb;
                return this;
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param CommandRequst= obj
             * @returns CommandRequst
             */
            static getRootAsCommandRequst(bb, obj) {
                return (obj || new CommandRequst()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param CommandRequst= obj
             * @returns CommandRequst
             */
            static getSizePrefixedRootAsCommandRequst(bb, obj) {
                bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
                return (obj || new CommandRequst()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            name(optionalEncoding) {
                var offset = this.bb.__offset(this.bb_pos, 4);
                return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
            }
            ;
            command(optionalEncoding) {
                var offset = this.bb.__offset(this.bb_pos, 6);
                return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             */
            static startCommandRequst(builder) {
                builder.startObject(2);
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
             * @param flatbuffers.Offset commandOffset
             */
            static addCommand(builder, commandOffset) {
                builder.addFieldOffset(1, commandOffset, 0);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @returns flatbuffers.Offset
             */
            static endCommandRequst(builder) {
                var offset = builder.endObject();
                return offset;
            }
            ;
            static createCommandRequst(builder, nameOffset, commandOffset) {
                CommandRequst.startCommandRequst(builder);
                CommandRequst.addName(builder, nameOffset);
                CommandRequst.addCommand(builder, commandOffset);
                return CommandRequst.endCommandRequst(builder);
            }
        }
        proto.CommandRequst = CommandRequst;
    })(proto = Mod.proto || (Mod.proto = {}));
})(Mod = exports.Mod || (exports.Mod = {}));
/**
 * @constructor
 */
(function (Mod) {
    var proto;
    (function (proto) {
        class CommandResponse {
            constructor() {
                this.bb = null;
                this.bb_pos = 0;
            }
            /**
             * @param number i
             * @param flatbuffers.ByteBuffer bb
             * @returns CommandResponse
             */
            __init(i, bb) {
                this.bb_pos = i;
                this.bb = bb;
                return this;
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param CommandResponse= obj
             * @returns CommandResponse
             */
            static getRootAsCommandResponse(bb, obj) {
                return (obj || new CommandResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            /**
             * @param flatbuffers.ByteBuffer bb
             * @param CommandResponse= obj
             * @returns CommandResponse
             */
            static getSizePrefixedRootAsCommandResponse(bb, obj) {
                bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
                return (obj || new CommandResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
            }
            ;
            message(optionalEncoding) {
                var offset = this.bb.__offset(this.bb_pos, 4);
                return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
            }
            ;
            extra(optionalEncoding) {
                var offset = this.bb.__offset(this.bb_pos, 6);
                return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             */
            static startCommandResponse(builder) {
                builder.startObject(2);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Offset messageOffset
             */
            static addMessage(builder, messageOffset) {
                builder.addFieldOffset(0, messageOffset, 0);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @param flatbuffers.Offset extraOffset
             */
            static addExtra(builder, extraOffset) {
                builder.addFieldOffset(1, extraOffset, 0);
            }
            ;
            /**
             * @param flatbuffers.Builder builder
             * @returns flatbuffers.Offset
             */
            static endCommandResponse(builder) {
                var offset = builder.endObject();
                return offset;
            }
            ;
            static createCommandResponse(builder, messageOffset, extraOffset) {
                CommandResponse.startCommandResponse(builder);
                CommandResponse.addMessage(builder, messageOffset);
                CommandResponse.addExtra(builder, extraOffset);
                return CommandResponse.endCommandResponse(builder);
            }
        }
        proto.CommandResponse = CommandResponse;
    })(proto = Mod.proto || (Mod.proto = {}));
})(Mod = exports.Mod || (exports.Mod = {}));
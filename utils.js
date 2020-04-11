"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const proto_1 = require("./proto");
const byteToHex = Array.from({ length: 256 }, (x, i) => (i + 0x100).toString(16).substr(1));
function uuidToString(buffer) {
    let i = 0;
    console.log(buffer.length);
    return (byteToHex[buffer[i++]] +
        byteToHex[buffer[i++]] +
        byteToHex[buffer[i++]] +
        byteToHex[buffer[i++]] +
        "-" +
        byteToHex[buffer[i++]] +
        byteToHex[buffer[i++]] +
        "-" +
        byteToHex[buffer[i++]] +
        byteToHex[buffer[i++]] +
        "-" +
        byteToHex[buffer[i++]] +
        byteToHex[buffer[i++]] +
        "-" +
        byteToHex[buffer[i++]] +
        byteToHex[buffer[i++]] +
        byteToHex[buffer[i++]] +
        byteToHex[buffer[i++]] +
        byteToHex[buffer[i++]] +
        byteToHex[buffer[i++]]);
}
exports.uuidToString = uuidToString;
function BigIntToLong(num) {
    const low = Number(BigInt.asUintN(32, num % 0x100000000n));
    const high = Number(BigInt.asUintN(32, num >> 32n));
    return new proto_1.default.Long(low, high);
}
exports.BigIntToLong = BigIntToLong;
function LongToBigInt(long) {
    return BigInt(long.low) + (BigInt(long.high) << 32n);
}
exports.LongToBigInt = LongToBigInt;

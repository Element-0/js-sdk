"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const proto_1 = require("./proto");
const byteToHex = Array.from({ length: 256 }, (x, i) => (i + 0x100).toString(16).substr(1));
function uuidToString(buffer) {
    let i = 0;
    console.log(buffer.length);
    return (byteToHex[buffer[7]] +
        byteToHex[buffer[6]] +
        byteToHex[buffer[5]] +
        byteToHex[buffer[4]] +
        "-" +
        byteToHex[buffer[3]] +
        byteToHex[buffer[2]] +
        "-" +
        byteToHex[buffer[1]] +
        byteToHex[buffer[0]] +
        "-" +
        byteToHex[buffer[15]] +
        byteToHex[buffer[14]] +
        "-" +
        byteToHex[buffer[13]] +
        byteToHex[buffer[12]] +
        byteToHex[buffer[11]] +
        byteToHex[buffer[10]] +
        byteToHex[buffer[9]] +
        byteToHex[buffer[8]]);
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

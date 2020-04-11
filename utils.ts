import Proto from "./proto";

const byteToHex = Array.from({ length: 256 }, (x, i) =>
  (i + 0x100).toString(16).substr(1)
);

export function uuidToString(buffer: Uint8Array): string {
  let i = 0;
  console.log(buffer.length);
  return (
    byteToHex[buffer[i++]] +
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
    byteToHex[buffer[i++]]
  );
}

export function BigIntToLong(num: bigint) {
  const low = Number(BigInt.asUintN(32, num % 0x100000000n));
  const high = Number(BigInt.asUintN(32, num >> 32n));
  return new Proto.Long(low, high);
}

export function LongToBigInt(long: Proto.Long) {
  return BigInt(long.low) + (BigInt(long.high) << 32n);
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
async function main() {
    const client = new index_1.default();
    await client.connect("ws://127.0.0.1:8808/");
    console.log("fetch seesion");
    const sess = await client.session("element-zero");
    sess.init(async (sess) => {
        console.log("got seesion, execute command");
        const resp = await sess.executeCommand("help");
        console.log(resp);
        sess.onPlayerChange(console.log);
        sess.onChat(console.log);
    });
}
main().catch(console.error);

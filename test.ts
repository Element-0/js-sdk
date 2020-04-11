import Client, { Session } from "./index";

async function main() {
  const client = new Client();
  await client.connect("ws://127.0.0.1:8808/");
  console.log("fetch seesion");
  const sess = await client.session("element-zero");
  sess.init(async (sess: Session) => {
    console.log("got seesion, execute command");
    const resp = await sess.executeCommand("help");
    console.log(resp);
    sess.onPlayerChange(console.log);
  });
}

main().catch(console.error);

const { Client } = require("@xhayper/discord-rpc");
const Config = require("./Data/Config.json");

const client = new Client({
    clientId: Config.ClientID
});

client.on("ready", () => {
    client.user?.setActivity({
        state: Config.State,
        details: Config.details,
        startTimestamp: Date.now(),
        largeImageKey: Config.LargeImageKey,
        largeImageText: Config.LargeImageText,
        smallImageKey: Config.SmallImageKey,
        smallImageText: Config.SmallImageText,
    });
});

client.login();
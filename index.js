// Import the "Client" class from the revolt.js package
const { Client } = require("revolt.js");
// Import the values of "token" and "prefix" declared in your config.json file
const { token, prefix } = require('./config.json');

// Create a new client instance
let client = new Client();

// Once your client is ready, this code will be executed (only once)
client.on("ready", async () => {
    console.info(`Logged in as ${client.user.username}!`); // This returns "Logged in as *Your bot's name*!" in the console
});

// Make the client (bot) send the "Pong!" message after you send a message with the content "!ping" into chat.
client.on("message", async (message) => {
    if (message.content === prefix + "ping") {
        message.channel.sendMessage("Pong!");
    }
});

// Log in to Revolt with your client's token
client.loginBot(token);

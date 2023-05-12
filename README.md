# Discord Role Temporarily Adder Bot

[![Author](https://img.shields.io/badge/Author-Michael%20John%20Pieruszka-blue)](https://github.com/MJPieruszka)

This Discord bot temporarily adds a specified role to a user when they click a button and automatically removes the role after one minute. The bot also logs the role addition and removal actions in a specified channel.

## Setup

1. Install [Node.js](https://nodejs.org/en/) (version 16.6.0 or higher is required).
2. Run `npm install discord.js` to install the required `discord.js` library.
3. Replace the following placeholders in the code with your respective values:
   - `'YOUR TOKEN HERE'`: Replace with your Discord bot token.
   - `'GUILD ID HERE'`: Replace with your server/guild ID.
   - `'ROLE ID HERE'`: Replace with the role ID that will be added to the user.
   - `'CHANNEL ID HERE'`: Replace with the ID of the channel where the bot will log role additions and removals.
   - `'BUTTON NAME HERE'`: Replace with the name/label you want for the button.
   - `'ENBED MESSAGE HERE'`: Replace with the message you want to be displayed along with the button.

## Usage

1. Start the bot by running `node <your-script-name>.js` (replace `<your-script-name>` with the name of your JavaScript file).
2. In your Discord server, type `!start` in a text channel where the bot has permission to read and send messages.
3. The bot will send a message containing a button.
4. Users can click the button to have the specified role temporarily added to their account.
5. The bot will automatically remove the role after one minute and log the actions in the specified channel.

## Notes

- Make sure the bot has the appropriate permissions in your server, including "Manage Roles" and "Send Messages".
- The role to be added must be lower in hierarchy than the bot's highest role to avoid permission issues.

## License
This project is licensed under the [MIT License](LICENSE).
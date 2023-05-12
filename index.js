// Import required libraries
const { Client, Intents, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.MESSAGE_CONTENT, Intents.FLAGS.GUILD_MEMBERS] });

// Set your Discord bot token
const TOKEN = 'YOUR TOKEN HERE';
const GUILD_ID = 'GUILD ID HERE';
const ROLE_ID = 'ROLE ID HERE';
const LOG_CHANNEL_ID = 'CHANNEL ID HERE';

// When the bot is ready
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Listen for interactions (button clicks)
client.on('interactionCreate', async interaction => {
  try {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'roster_button') {
      const guild = client.guilds.cache.get(GUILD_ID);
      const member = await guild.members.fetch(interaction.user.id);
      const role = guild.roles.cache.get(ROLE_ID);

      // Add the role to the user
      await member.roles.add(role);

      // Log the action in the specified channel
      const logChannel = guild.channels.cache.get(LOG_CHANNEL_ID);
      const logEmbed = new MessageEmbed()
        .setTitle('Role Added')
        .setDescription(`Role temporarily added to ${member.user.tag}`)
        .setColor('GREEN')
        .setTimestamp();

      logChannel.send({ embeds: [logEmbed] });

      // Remove the role after one minute (60000ms)
      setTimeout(async () => {
        await member.roles.remove(role);

        // Log the removal in the specified channel
        const removalEmbed = new MessageEmbed()
          .setTitle('Role Removed')
          .setDescription(`Role removed from ${member.user.tag}`)
          .setColor('RED')
          .setTimestamp();

        logChannel.send({ embeds: [removalEmbed] });
      }, 60000);

      await interaction.reply({ content: 'https://discord.com/channels/815945556836089896/821684272909123594', ephemeral: true });
    }
  } catch (error) {
    console.error(`Error while handling interaction: ${error.message}`);
    console.error(`Interaction data: ${JSON.stringify(interaction)}`);
  }
});

// When a message is received, check if it contains the command !start
client.on('messageCreate', async message => {
  if (message.content.toLowerCase() === '!start') {
    // Create the button
    const rosterButton = new MessageButton()
      .setStyle('SUCCESS')
      .setLabel('BUTTON NAME HERE')
      .setCustomId('roster_button');

    // Create the action row
    const row = new MessageActionRow()
      .addComponents(rosterButton);

    // Send the button
    await message.channel.send({ content: 'ENBED MESSAGE HERE', components: [row] });
  }
});

// Login with your bot token
client.login(TOKEN);

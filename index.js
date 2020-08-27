const Discord = require("discord.js");
const client = new Discord.Client();
const proton = require("proton-io")
const db = require("wio.db")





let komutDosya = "./komutlar"
let event = "./eventlar"
let gelistiricler = ["464381601871167499"]
let owner = true;
let defaultCommands = ["ping"]; 

const komutYukle = new proton(client,komutDosya,event,gelistiricler,{owner,defaultCommands})

let botlaraCevapVer = false;
let etiketlePrefixOgren = true; 
let etiketiPrefixOlarakKullan = true;

client.on('message', async(msg) => {

    if(!await db.has("prefix_" + msg.guild.id)) {
       var prefix = "?"
    } else {
       var prefix = await db.fetch("prefix_" + msg.guild.id)
    }

    komutYukle.message(msg,prefix,{botlaraCevapVer,etiketiPrefixOlarakKullan,etiketlePrefixOgren})
})

client.on("message", (message) => {
   if(message.content.toLowerCase() === "selam") {
       message.channel.send("Aleyküm selam.")
   }
   if(message.content.toLowerCase() === "?ban @Nova eSports Avalonia") {
    message.channel.send("Kime şekil yapıyorsun oç")

    
}
})

client.on("message", (message) => {
  if(message.content.toLowerCase() === "Hedef ne ") {
      message.reply.send("4000H")
  }
  if(message.content.toLowerCase() === "Biz kimiz") {
   message.channel.send("BiZ tÜrkLer aM siQerİz")

   
}
})

client.on('message', message => {
   
    if (message.content === 'profil fotografımı göster') {

      message.reply(message.author.displayAvatarURL());
    }
  });
  client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'gelen-giden');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Suncuya hoşgeldin, ${member}`);
  });
  

  client.on('message', message => {
    
    if (!message.guild) return;
  
    if (message.content.startsWith('?kick')) {
     
      const user = message.mentions.users.first();
   
      if (user) {
      
        const member = message.guild.member(user);
        
        if (member) {
        
          member
            .kick('Log belirt')
            .then(() => {
            
              message.reply(` ${user.tag} yaptıgı hatadan dolayı lider tarafından atıldı. :gun:`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to kick the member,
              // either due to missing permissions or role hierarchy
              message.reply('Bu üyeyi atmak için yetkim yok');
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("Üye bu sunucuda degil ya da yetkisi senden fazla");
        }
        // Otherwise, if no user was mentioned
      } else {
        message.reply("Lütfen bir üye belirt");
      }
    }
  });
  




  client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // if the message content starts with "!ban"
    if (message.content.startsWith('?ban')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
           */
          member
            .ban({
              reason: 'Bir hata yaptı',
            })
            .then(() => {
              // We let the message author know we were able to ban the person
              message.reply(` ${user.tag} adli kişi basarıyla banlandı :gun:`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to ban the member,
              // either due to missing permissions or role hierarchy
              message.reply('Bu üyeyi atmak için yetkim yok');
              // Log the errosr
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("Üye bu sunucuda degil ya da yetkisi senden fazla");
        }
      } else {
        // Otherwise, if no user was mentioned
        message.reply("Lütfen bir üye belirt!");
      }
    }
  });
  
  
client.login("NzQyNzI3MDg3ODA2MjE4Mjkw.XzKUgA.CzeUdeClO2ZuQ2GzErgPvn57_KY") 
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs")
const config = require("./config.json")

var a=0
client.on("ready", () => {
  console.log("I am ready!");

});

client.on("message", (message) => {

	if(!message.content.startsWith(config.prefix)) return;
	
  	if (message.content.startsWith(config.prefix + "ping")) {
    	message.channel.send("pong!");
  	}
  	if(message.content.startsWith(config.prefix + "prefix")){
  		if (message.author.id !== config.ownerID) {
  			message.channel.send("You don't have the correct permissions");
  			return;
  		}
  		else {
  		let newPrefix = message.content.split(" ").slice(1,2)[0];

  		message.channel.send("prefix changed to "+ newPrefix);

  		config.prefix = newPrefix;
  		fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  	}
  	}
  	if(message.content.startsWith(config.prefix + "clear")) {
  		var a=0
  		global DELAY := -1 ;ms
 
    		While (a<100){
        		Send,{UP} {control down}a{control up} {Backspace} {Enter 2}
        		Sleep, DELAY
        		a++;
    	}
    	return
  	}	
});

client.login(config.token);

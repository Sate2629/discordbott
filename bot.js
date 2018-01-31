const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs")
const config = require("./config.json")

client.on("ready", () => {
  console.log("I am ready!");

});

var dc = Math.floor(Math.random() *20);
dc++;
var on = 0;
console.log(dc);

client.on("message", (message) => {

   if(message.content.startsWith("?help")) {
	    message.channel.send("The prefix is " + config.prefix);
	}

	if(!message.content.startsWith(config.prefix)) return;
	
	if(message.content.startsWith(config.prefix + "roll d")) {
	   var num = message.content.slice(7,message.content.length);
	   var dc = Math.floor(Math.random() * num)
	   dc++;
	   message.channel.send(dc);
	   }
	
	if(message.content.startsWith(config.prefix + "clear")) {
		var del = 0;
		var mdel = 10;
		while (del < mdel) {
			message.delete(3000);
			del++;
		}
		
	}
	
	if(message.content.startsWith(config.prefix + "say")) {
		message.delete();
		message.channel.send(message.content.slice(4,message.content.length));
	}
	
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
	if (message.content.startsWith(config.prefix + "aaa@aaa")) {
	        if (on === 0) {
		    var on = 1;
	            message.channel.send("on");
		}
		if (on === 1) {
		    var on = 0;
		    message.channel.send("off");
		}
	}
	if (message.author.id !== config.ownerID && on === 1) {
		message.delete();
		message.channel.send("F A T");
	}
});

client.login(config.token);

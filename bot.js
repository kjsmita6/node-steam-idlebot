var ChildBot = require('./idle.js'); //change to steam-idlebot if not running from same directory

var Bot = new ChildBot('username', 'password', { //add username and password
	guardCode: '', //put steamguard code here
	gamesPlayed: [440, 730], //put appids here, separated by a comma
	personaState: 1 //personaState (online, away, etc)(number 0-5)
});

Bot.connect();
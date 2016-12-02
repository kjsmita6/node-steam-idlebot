var ParentBot = require('steam-parentbot').ParentBot;
var _ = require('lodash');
var util = require('util');

var ChildBot = function() {
	ChildBot.super_.apply(this, arguments);
}

util.inherits(ChildBot, ParentBot);

ChildBot.prototype._onFriendMsg = function(steamID, message, type, chatter) {}
ChildBot.prototype._onFriend = function(steamID, relationship) {}
ChildBot.prototype._onLogOnResponse = function(res) {
	if(res.eresult === 1) {
		this.logger.info('Logged in!');
		var _games = this.options.gamesPlayed;
		var cloned = [];
		for(var i = 0; i < _games.length; i++) {
			cloned.push(_.clone({ game_id: parseInt(_games[i]) }));
		}
		this.steamUser.gamesPlayed({
			games_played: cloned
		});
		this.steamFriends.setPersonaState(parseInt(this.options.personaState));
	}
	else {
		this.logger.warn('EResult for logon: ' + res.eresult);
		if(res.eresult === 63) {
			this.logger.warn('Please provide the steamguard code as config option "guardCode" sent to your email at ' + res.email_domain);
			process.exit(63);
		}
		else if(res.eresult === 65) {
			this.logger.warn('Please remove your guardCode option (wrong code)');
			process.exit(65);
		}
	}
}

module.exports = ChildBot;
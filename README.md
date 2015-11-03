# node-steam-idlebot
A bot that idles games in Steam

# Installation
`npm install steam-idlebot`

# Setup
Assuming that you have Node.js version greater than 4.0.0, run install.bat to install the dependencies. Then, edit `bot.js` and add the information. The information can be as follows:

- guardCode - your steamguard code that was received in your email (the console will tell you when this is required)
- gamesPlayed - an ARRAY of appID INTEGERS that you wish to idle in, separated by commas (you must own these games to be able to play them)
- personaState - status of steam:
  - 0: Offline
  - 1: Online
  - 2: Busy
  - 3: Away
  - 4: Looking to Play
  - 5: Looking to Trade

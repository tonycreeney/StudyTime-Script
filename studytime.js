//This script will do three things--1) get the names of the programs that are open that could distract me--battle.net, chrome, spotify, teams, etc. 2)close them all down. 3) Start up nvim, and 3 tabs in chrome--chester portal, 
//chatgpt and google search engine.

function closePrograms() {
	const { exec } = require('child_process');
	const programNames = ['chrome.exe', 'Spotify.exe', 'Discord.exe', 'Teams.exe', 'Battle.net.exe'];

	programNames.forEach((program) => {
		exec(`taskkill /F /IM ${program}`);
		console.log(`${program} HAS BEEN CLOSED`);
	});	
};

closePrograms();

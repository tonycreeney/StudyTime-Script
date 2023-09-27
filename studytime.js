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

const puppeteer = require('puppeteer');

async function openStudyPrograms() {
	const webpageAddress = new Map ([
		['ChatGPT', 'https://www.chat.openai.com'],
		['Google', 'https://www.google.com'],
		['Chester Portal', 'https://portal1.chester.ac.uk/Pages/default.aspx']
	]);

	 const browser = await puppeteer.launch({
		 headless: false,
		 executablePath: 'C:\\Users\\tosh-\\AppData\\Local\\Chromium\\Application\\chrome.exe'
	});

	 try {
		 for (const [webpage, url] of webpageAddress) {
		 const page = await browser.newPage();
		 await page.goto(url);
		 console.log(`Success! '${webpage}' Opened!`);
		 }
	 } catch (error) {
		 console.log(`ERROR with ${webpage}`, error);
		 };
};
closePrograms();

(async () => {
console.log(`TEST TEST TEST ! - BEFORE`);
await openStudyPrograms();
console.log(`TEST TEST TEST ! - BEFORE`);
})();

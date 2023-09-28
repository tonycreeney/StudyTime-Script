//This script will do three things--1) get the names of the programs that are open that could distract me--battle.net, chrome, spotify, teams, etc. 2)close them all down. 3) Start up nvim, and 3 tabs in chrome--chester portal, 
//chatgpt and google search engine.
const { exec } = require('child_process');
const puppeteer = require('puppeteer');

async function closePrograms() {
	return new Promise((resolve, reject) => {
	const programNames = ['chrome.exe', 'Spotify.exe', 'Discord.exe', 'Teams.exe', 'Battle.net.exe'];
	let count = 0;
		
	programNames.forEach((program) => {
		exec(`taskkill /F /IM ${program}`, (error) => {
			if (error) {
				console.log(`Error Closing ${program}: `, error); 
			} else {
			console.log(`${program} HAS BEEN CLOSED`);
			count++;
			};
		});
		});
			if (count === programNames.length) {
				resolve();};
	});
}


async function openStudyPrograms() {
	const webpageAddress = new Map ([
		['ChatGPT', 'http://www.openai.com'],
		['Google', 'http://www.google.com'],
		['Chester Portal', 'https://portal1.chester.ac.uk/Pages/default.aspx']
	]);

	const browser = await puppeteer.launch({ headless: false });
	try {
		for (const [webpage, url] of webpageAddress) {
			const page = await browser.newPage();
			await page.goto(url);
			console.log(`Success!`);
		}
	} catch (error) {
		console.log(`Error: `, error);
	};
};

async function main() {
	try {
		await closePrograms();
		await openStudyPrograms();
	} catch (error) {
		console.log(`Main Error`, error)};
};

main();

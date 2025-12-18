// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

interface ForceCookie {
	content: string;
	episode: number;
	episode_name: string;
	id: number;
	season: number;
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "force-cookies" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const getWisdom = vscode.commands.registerCommand('force-cookies.helloWorld', async () => {
		// Fetch wisdom from the Force Cookies API
		try {
			const response = await fetch('https://force-cookiesv2.vercel.app/api/v1/resources/cookies/one');
			const data = await response.json() as ForceCookie[];
			
			if (data && data.length > 0) {
				const cookie = data[0];
				await vscode.env.clipboard.writeText(cookie.content);
				vscode.window.showInformationMessage(`${cookie.content} (copied to clipboard)`);
			} else {
				vscode.window.showWarningMessage('No wisdom found from the Force.');
			}
		} catch (error) {
			vscode.window.showErrorMessage(`Failed to fetch Force wisdom: ${error}`);
		}
	});

	const showWisdom = vscode.commands.registerCommand('force-cookies.showWisdom', () => {
		// Open the Force Cookies website in VS Code's Simple Browser
		vscode.commands.executeCommand('simpleBrowser.show', 'https://force-cookiesv2.vercel.app');
	});

	context.subscriptions.push(getWisdom, showWisdom);
}

// This method is called when your extension is deactivated
export function deactivate() {}

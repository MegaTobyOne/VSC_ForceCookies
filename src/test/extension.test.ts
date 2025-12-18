import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Registers Get Wisdom command', async () => {
		const extension = vscode.extensions.getExtension('TobyHarvey.force-cookies');
		assert.ok(extension, 'Extension not found (publisher/name mismatch?)');

		await extension.activate();

		const commands = await vscode.commands.getCommands(true);
		assert.ok(
			commands.includes('force-cookies.helloWorld'),
			'Expected command force-cookies.helloWorld to be registered'
		);
	});
});

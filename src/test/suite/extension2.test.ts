import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	const str = 'Hello world'

	test('Contains \'world\'', () => {
		const idx = str.indexOf('world');
		assert.notStrictEqual(-1, idx);
	});
	
	test('Length of 11', () => {
		assert.strictEqual(11, str.length);
	});
});

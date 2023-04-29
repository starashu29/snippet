// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {

	// This line creates a new command called myExtension.sendToLeft and registers a function to be called when the command is executed. 
	//The function gets the active text editor, gets the selected text, and creates a new webview panel to display the selected text.
	let disposable = vscode.commands.registerCommand('myExtension.sendToLeft', () => {
		//This line gets the active text editor, which is the editor that has focus.
		const editor = vscode.window.activeTextEditor;

	//	If there is no active text editor, the function returns early.
	  if (!editor) {
		return;
	  }
  //This line gets the selected text in the editor by getting the text of the current document in the editor and using the selection property of the editor to get the range of the selected text.
	  const selectedText = editor.document.getText(editor.selection);
  //This line creates a new webview panel with the ID myExtension.panel, the title Left Panel, and the position vscode.ViewColumn.Two, which is the rightmost column in the editor. 
  //The last argument is an options object that is currently empty.
	  const panel = vscode.window.createWebviewPanel(
		'myExtension.panel',
		'Left Panel',
		vscode.ViewColumn.Two,
		{}
	  );
	 //This line sets the HTML content of the webview panel to a text area that contains the selected text.
        panel.webview.html = `<textarea>${selectedText}</textarea>`;
	});
  
	context.subscriptions.push(disposable);
  }
  
 // This is the deactivation function for the extension, which is called when the extension is deactivated.
  function deactivate() {}
  
  //This exports the activate and deactivate functions from the module, which allows VS Code to call them when the extension is activated
  module.exports = {
	activate,
	deactivate
  };
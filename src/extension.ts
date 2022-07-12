// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// TODO: Add Functionality to add python shell as terminal profile
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	////console.log('Congratulations, your extension "python-shell" is now active!');
	
	////vscode.window.createTerminal(name as string, path as string);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('python-shell.open', () => {
		let path = vscode.workspace.getConfiguration('pythonshell').get("path");
		////console.log(path);
		let name = vscode.workspace.getConfiguration('pythonshell').get("name");
		////console.log(name);
		let icon = vscode.workspace.getConfiguration('pythonshell').get("icon");
		////console.log("--- before create terminal ---");
		let color = "terminal.ansi" + vscode.workspace.getConfiguration('pythonshell').get("color");
		////console.log(color);
		let notificate = vscode.workspace.getConfiguration('pythonshell').get("showNotification");
		console.log(notificate);
		let themeicon = new vscode.ThemeIcon(icon as string);
		let iconcolor = new vscode.ThemeColor(color as string);
		console.log(iconcolor);
		const terminalOptions: vscode.TerminalOptions = {
			name: name as string,
			shellPath: path as string,
			iconPath: themeicon,
			color: iconcolor
		};
		const terminal = vscode.window.createTerminal(terminalOptions);
		terminal.show();
		////let terminal = new vscode.TerminalProfile(terminalOptions);
		////console.log(terminal);
		////vscode.window.createTerminal(options: {name as string, path as string});
		////console.log("--- after create terminal ---");
		
		////vscode.window.createTerminal(name as string, path as string);
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		////const path = vscode.workspace.getConfiguration('pythonshell.path');
		////console.log(path);
		////vscode.window.createTerminal("Python Shell", );
		if (notificate){
			vscode.window.showInformationMessage(name + ' ('+ path +') opened in Terminal.');
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

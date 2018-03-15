'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.jumpToColumn', () => {
        // The code you place here will be executed every time your command is executed
        vscode.window.showInputBox({
            prompt: "Enter the column number to navigate to:",
            placeHolder: "Column Number"
        })
            .then((value) => {
            if (value !== undefined) {
                const editor = vscode.window.activeTextEditor;
                if (editor !== undefined) {
                    const position = editor.selection.active;
                    var newPosition = position.with(position.line, parseInt(value) - 1);
                    var newSelection = new vscode.Selection(newPosition, newPosition);
                    editor.selection = newSelection;
                }
            }
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
import * as vscode from 'vscode';
import createCodeSnippet, { FC_A, FC_L, FC_AL, FC_H, FC_HA, FC_HL, FC_HAL } from './snippets';

interface Configuration extends vscode.WorkspaceConfiguration {
	useLetInsteadOfConst: boolean
	additionalCodeAfterImports: string
}

// this method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
	console.log('"remix-code-snippets" is now active');

	vscode.languages.registerCompletionItemProvider(
		{
			language: 'typescriptreact',
		},
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
				const configuration = vscode.workspace.getConfiguration("remix-code-snippets") as Configuration;
				const statement = configuration.useLetInsteadOfConst ? "let" : "const";
				const codeAfterImports = configuration.additionalCodeAfterImports
					? `${configuration.additionalCodeAfterImports}\n`
					: "";

				return [
					createCodeSnippet(
						"rmx_fc_a",
						"Functional component with action",
						FC_A({ statement, codeAfterImports }),
						{
							"${1:ComponentName}": "ComponentName",
							"$2": "",
							"$3": ""
						}
					),
					createCodeSnippet(
						"rmx_fc_l",
						"Functional component with loader",
						FC_L({ statement, codeAfterImports }),
						{
							"${1:ComponentName}": "ComponentName",
							"$2": "",
							"$3": ""
						}
					),
					createCodeSnippet(
						"rmx_fc_al",
						"Functional component with action and loader",
						FC_AL({ statement, codeAfterImports }),
						{
							"${1:ComponentName}": "ComponentName",
							"$2": "",
							"$3": "",
							"$4": "",
						}
					),
					createCodeSnippet(
						"rmx_fc_h",
						"Functional component with handle",
						FC_H({ statement, codeAfterImports }),
						{
							"${1:ComponentName}": "ComponentName",
							"$2": "",
							"$3": "",
						}
					),
					createCodeSnippet(
						"rmx_fc_ha",
						"Functional component with handle and action",
						FC_HA({ statement, codeAfterImports }),
						{
							"${1:ComponentName}": "ComponentName",
							"$2": "",
							"$3": "",
							"$4": "",
						}
					),
					createCodeSnippet(
						"rmx_fc_hl",
						"Functional component with handle and loader",
						FC_HL({ statement, codeAfterImports }),
						{
							"${1:ComponentName}": "ComponentName",
							"$2": "",
							"$3": "",
							"$4": "",
						}
					),
					createCodeSnippet(
						"rmx_fc_hal",
						"Functional component with handle, action and loader",
						FC_HAL({ statement, codeAfterImports }),
						{
							"${1:ComponentName}": "ComponentName",
							"$2": "",
							"$3": "",
							"$4": "",
							"$5": "",
						}
					),
				];
			}
		},
	);
}

// this method is called when your extension is deactivated
export function deactivate() { }

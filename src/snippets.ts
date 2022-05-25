import * as vscode from "vscode";

interface SnippetOptions {
  statement: "const" | "let"
  codeAfterImports: string
}

export const FC_A = ({ statement, codeAfterImports }: SnippetOptions) =>
  `import type { ActionFunction } from "@remix-run/node"
${codeAfterImports}
export ${statement} action: ActionFunction = () => {
  $3
}

export default function \${1:ComponentName}() {
  return (
    <div>$2</div>
  )
}`;

export const FC_L = ({ statement, codeAfterImports }: SnippetOptions) =>
  `import type { LoaderFunction } from "@remix-run/node"
${codeAfterImports}
export ${statement} loader: LoaderFunction = () => {
  $3
}

export default function \${1:ComponentName}() {
  return (
    <div>$2</div>
  )
}`;

export const FC_AL = ({ statement, codeAfterImports }: SnippetOptions) =>
  `import type { ActionFunction, LoaderFunction } from "@remix-run/node"
${codeAfterImports}
export ${statement} action: ActionFunction = () => {
  $3
}

export ${statement} loader: LoaderFunction = () => {
  $4
}

export default function \${1:ComponentName}() {
  return (
    <div>$2</div>
  )
}`;

export const FC_H = ({ statement, codeAfterImports }: SnippetOptions) =>
  `export ${statement} handle = {
  $3
}

export default function \${1:ComponentName}() {
  return (
    <div>$2</div>
  )
}`;

export const FC_HL = ({ statement, codeAfterImports }: SnippetOptions) =>
  `import type { LoaderFunction } from "@remix-run/node"
${codeAfterImports}
export ${statement} handle = {
  $3
}

export ${statement} loader: LoaderFunction = () => {
  $4
}

export default function \${1:ComponentName}() {
  return (
    <div>$2</div>
  )
}`;

export const FC_HA = ({ statement, codeAfterImports }: SnippetOptions) =>
  `import type { ActionFunction } from "@remix-run/node"
${codeAfterImports}
export ${statement} handle = {
  $3
}

export ${statement} action: ActionFunction = () => {
  $4
}

export default function \${1:ComponentName}() {
  return (
    <div>$2</div>
  )
}`;

export const FC_HAL = ({ statement, codeAfterImports }: SnippetOptions) =>
  `import type { ActionFunction, LoaderFunction } from "@remix-run/node"
${codeAfterImports}
export ${statement} handle = {
  $3
}

export ${statement} action: ActionFunction = () => {
  $4
}

export ${statement} loader: LoaderFunction = () => {
  $5
}

export default function \${1:ComponentName}() {
  return (
    <div>$2</div>
  )
}`;

export default function createCodeSnippet(
  trigger: string,
  label: string,
  snippetString: string,
  variables: {
    [key: string]: string
  }
): vscode.CompletionItem {
  const completionItem = new vscode.CompletionItem(trigger, vscode.CompletionItemKind.Snippet);
  completionItem.insertText = new vscode.SnippetString(snippetString);
  completionItem.detail = label;

  let filledSnippetString = snippetString;
  for (const [key, value] of Object.entries(variables)) {
    filledSnippetString = filledSnippetString.replace(key, value);
  }
  const markdown = new vscode.MarkdownString();
  markdown.appendCodeblock(filledSnippetString, "typescriptreact");
  completionItem.documentation = markdown;

  return completionItem;
}
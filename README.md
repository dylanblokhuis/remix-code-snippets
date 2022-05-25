# remix-code-snippets

Speed up your Remix development with dynamic code snippets. Quickly create remix components using code snippets like `rmx_fc_l` with the following output:

```typescriptreact
import type { LoaderFunction } from "@remix-run/node"

export const loader: LoaderFunction = () => {

}

export default function ComponentName() {
  return (
    <div></div>
  )
}
```

### Want to use `let` instead?

Enable `remix-code-snippets.useLetInsteadOfConst` and you get the following output:

```typescriptreact
import type { LoaderFunction } from "@remix-run/node"

export let loader: LoaderFunction = () => {

}

export default function ComponentName() {
  return (
    <div></div>
  )
}
```

### Add additional code after imports

Fill in `remix-code-snippets.additionalCodeAfterImports` with e.g. `import db from "~/services/db.server"` and you get the following output:

```typescriptreact
import type { LoaderFunction } from "@remix-run/node"
import db from "~/services/db.server"

export const loader: LoaderFunction = () => {

}

export default function ComponentName() {
  return (
    <div></div>
  )
}
```

## Preview

<img src="https://i.imgur.com/ClXV6qU.gif" />

## Code snippets

| Trigger      | Description                                         |
| ------------ | --------------------------------------------------- |
| `rmx_fc_a`   | Functional component with action                    |
| `rmx_fc_l`   | Functional component with loader                    |
| `rmx_fc_al`  | Functional component with action and loader         |
| `rmx_fc_h`   | Functional component with handle                    |
| `rmx_fc_ha`  | Functional component with handle and action         |
| `rmx_fc_hl`  | Functional component with handle and loader         |
| `rmx_fc_hal` | Functional component with handle, action and loader |

## Extension Settings

This extension contributes the following settings:

- `remix-code-snippets.useLetInsteadOfConst`: Handle, action and loader will be declared using `let` instead of `const`
- `remix-code-snippets.additionalCodeAfterImports`: Add additional code after the import statement.

## Release Notes

### 1.0.0

Initial release

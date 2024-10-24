## AST explorer

You can use [Stillat/blade-parser-typescript](https://github.com/Stillat/blade-parser-typescript).

- blade nodes
- blade fragment nodes


#### How to add a new parser

1. Go to `website/`.
2. Install the new parser as dependency: `yarn add theParser`
3. Copy one of the existing examples in `src/parsers/{language}`.
4. Adjust the code as necessary:

- Update metadata.
- Load the right parser (`loadParser`).
- Call the right parsing method with the right/necessary options in `parse`.
- Implement the `nodeToRange` method (this is for highlighting).
- Implement the `getNodeName` method (this is for quick look through the tree).
- Implement `opensByDefault` method for auto-expansion of specific properties.
- Define `_ignoredProperties` set or implement `forEachProperty` generator method for filtering.
- Provide a `renderSettings` method if applicable.

#### How to add a new transformer

0. Go to `website/`.
1. Install the new transformer as dependency.
1. Copy one of the existing examples in `src/parsers/{language}/transformers`.
1. Adjust the code as necessary:

- Update metadata and `defaultParserID`.
- Load the right transformer (`loadTransformer`).
- Call the transformation method in `transform`.
- Change sample transformation code in `codeExample.txt`.

#### Build your own version for development

**IMPORTANT:** For various reasons the project still requires Node.js version
16 (see `.tools-versions`). If you use a tool like
[`asdf`](https://asdf-vm.com/) switching versions will happen automatically.

1. Clone the repository.
2. Go to `website/`.
3. Install all dependencies with `yarn install`

Run `yarn run build` for the final minimized version.
Run `yarn run watch` for incremental builds.

Run `yarn start` to start a simple static webserver.

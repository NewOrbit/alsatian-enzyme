# neworbit-package-template

- source code is stored under `./src`
- test files should be stored next to source files and suffixed with `.test.ts`
- package should be built by ADO
  - A sample azure-pipelines.yml is included
- package should be published to myget through the `@neworbit` scope if private

## Using this template

- Click the `Use this template` button at the top of this repo
- Enter the name for your repository
- Clone your new repository
- Open the folder in vs code and do a global find/replace for `package-template` with your new package name
- Remove `@neworbit` scope if you're open sourcing the package
- Delete this section of the readme and you're done

> Readme template follows:
-----------------

## Installation

```cmd
npm i @neworbit/package-template
```

## Usage

*Example usage and code snippets here.*

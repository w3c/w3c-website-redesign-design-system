# Pattern library documentation

A starting point for building pattern library documentation as a static site, using [Metalsmith](https://metalsmith.io/) and selected plugins.

## How do I get set up?

### Installation

From within the project root

```bash
# Switch your version of Node to the correct version for this project (see .nvmrc)
nvm use

# Install dependencies
npm install
```

### Configuration

#### NPM config file

If needed, update `package.json` to manage the packages required.

### Build

To build the site, [serve it locally](http://localhost:8081) and watch for changes:

```bash
node build
```

## Dependencies

- [NPM](https://www.npmjs.com/) - Package manager for Javascript
- [NVM](https://github.com/creationix/nvm) - Manage multiple active versions of node.js
- [Metalsmith](https://github.com/segmentio/metalsmith)
- [jstransformer-marked](https://github.com/jstransformers/jstransformer-marked)
- [jstransformer-nunjucks](https://github.com/jstransformers/jstransformer-nunjucks)
- [metalsmith-code-highlight](https://github.com/fortes/metalsmith-code-highlight)
- [metalsmith-in-place](https://github.com/metalsmith/metalsmith-in-place)
- [metalsmith-layouts](https://github.com/metalsmith/metalsmith-layouts)
- [metalsmith-serve](https://github.com/mayo/metalsmith-serve)
- [metalsmith-watch](https://github.com/FWeinb/metalsmith-watch)

## Deployment instructions

TBC
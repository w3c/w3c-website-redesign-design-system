# W3C design system

A static site documenting the styles, components and templates forming the basis of the W3C website.

## How do I get set up?

You'll need [Git](https://help.github.com/articles/set-up-git/) and [Node.js](https://nodejs.org/en/) installed to get this project running.

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

There are two steps to building the static site.

#### Building Apollo

The design system includes a copy of Apollo, customised for the W3C website. Should there be any additions or amendments to the CSS or JavaScript, those changes need to be made to Apollo. Then run the following command:

```bash
# Build Apollo
npm run build-apollo
```

#### Building the design system

To build the site and [serve it locally](http://localhost:3000/):

```bash
# Build the design system
npm run build-site
```

## Dependencies

- [NPM](https://www.npmjs.com/) - Package manager for Javascript
- [NVM](https://github.com/creationix/nvm) - Manage multiple active versions of node.js
- [Metalsmith](https://github.com/segmentio/metalsmith)
- [jstransformer-marked](https://github.com/jstransformers/jstransformer-marked)
- [jstransformer-nunjucks](https://github.com/jstransformers/jstransformer-nunjucks)
- [metalsmith-in-place](https://github.com/metalsmith/metalsmith-in-place)
- [metalsmith-code-highlight](https://github.com/fortes/metalsmith-code-highlight)
- [metalsmith-collections](https://github.com/segmentio/metalsmith-collections)
- [metalsmith-static](https://github.com/TheHydroImpulse/metalsmith-static)
- [metalsmith-layouts](https://github.com/metalsmith/metalsmith-layouts)
- [metalsmith-browser-sync](https://github.com/mdvorscak/metalsmith-browser-sync)

## Deployment instructions

TBC
# W3C design system

A static site documenting the styles, components and templates forming the basis of the W3C website.

## URLS
- Live: https://design-system.w3.org/
- Local development: http://local.design-system.w3.org

## How do I get set up?

You'll need [Git](https://help.github.com/articles/set-up-git/) and [Node.js](https://nodejs.org/en/) installed to get this project running.

### Installation

`nvm use` picks up the version automatically from the `.nvmrc` project root file, which just contains the version number:

```bash
# Run from within the project root: 
nvm use

# Install dependencies:
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
# Build Apollo:
npm run build-apollo
```

#### Building the design system

To build the static website

```bash
# Build static site: 
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

## Deployment instructions

We use [Deployer](https://deployer.org) for deployment.

The deployment clones the relevant branch to your local machine within the path

`/.deployer`  

It then runs the required build commands and then deploys the built site to the server

Deploy to development

```
dep deploy development
```


Deploy a custom branch to development:

```
dep deploy development --branch=branch-name-to-deploy
```

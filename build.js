/*
 * Metalsmith build file
 * Build site with `node build`
 */

// Get our requirements, installed by npm
const metalsmith = require('metalsmith'); // Static site generator
const collections = require('metalsmith-collections'); // Group content into collections
const inPlace = require('metalsmith-in-place'); // Render templating syntax in source files
const codeHighlight = require('metalsmith-code-highlight'); // Syntax highlighter
const layouts = require('metalsmith-layouts'); // Apply layouts to source files
const assets = require('metalsmith-static'); // Copy assets into build directory without manipulating

const templateConfig = {
	directory: 'views',
	engineOptions: {
		noCache: true, // never use a cache and recompile templates each time
	}
}

// Run Metalsmith in the current directory
metalsmith(__dirname)
	.clean(true) // Clean the destination directory before build
	.source('./src') // Set page source directory
	.destination('./html-build') // Set destination directory

	// Render templating syntax in source files
	.use(inPlace(templateConfig))

	// Syntax highlighter
	.use(codeHighlight({
		languages: [],
		selector: 'pre > code'
	}))

	// Group content into collections
	.use(collections({
		components: {
			pattern: ['components/**/*', '!components/index.html']
		},
		styles: {
			pattern: ['styles/**/*', '!styles/index.html']
		},
		templates: {
			pattern: ['templates/**/*', '!templates/index.html']
		}
	}))

	// Copy assets into build directory
	.use(assets({
		src: './assets',
		dest: './assets'
	}))

	// Apply layouts to source files
	.use(layouts(templateConfig))

	// Tell Metalsmith to build the site
	.build(function(error) {
		if (error) {
			throw error;
		}
		console.log('Build finished');
	});

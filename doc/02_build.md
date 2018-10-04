[back](../README.md)

# Build Tools

## Node.js

* Use [nvm](https://github.com/creationix/nvm) to manage node versions.
* Add `./node_modules/.bin` to your `PATH` to use project-local CLI tools.


## Task runner

We recommend to use [NPM scripts](https://docs.npmjs.com/misc/scripts) (see [Why I Left Gulp and Grunt for npm Scripts](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8)) to run scripts and tasks.

The following tasks are considered best practice:

* `npm start` – Start development web server
* `npm test` – Run tests once (headless)
* `npm run test:watch` – Run tests continously (headless), watching for file changes
* `npm run test:e2e` – Run end-to-end tests
* `npm run build` – Create a distribution of your project (mostly for production), preferably to `./dist`
* `npm run lint` – Run linter


## Package Management

* Avoid installing modules globally
* Use [npx](https://github.com/zkat/npx#readme) to execute otherwise globally installed modules (e.g. CLI tools to set up projects)
* Use [Yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/) >= 5 that a lock file for deterministic and faster installations.

### Yarn

Don't install Yarn using NPM, see [Installation](https://yarnpkg.com/en/docs/install).

To use Yarn on Jenkins, read [these instructions](https://twiki.puzzle.ch/bin/view/Puzzle/Buildserver#Node_js_NPM_auf_Jenkins).


## Bundling

If you need a module bundler use [Webpack](https://webpack.js.org/).

# Puzzle Frontend Code Guidelines

This repository provides code conventions for JavaScript, TypeScript, CSS and HTML, when used in software projects at Puzzle ITC. According to the Puzzle [QM Guide](https://twiki.puzzle.ch/bin/view/Puzzle/CodeConventions), the goal is to use coding conventions and automatically verify them.

Please contact the [frontend workgroup](https://twiki.puzzle.ch/bin/view/Puzzle/Frontend) for questions or create pull requests for improvements.


## JavaScript

Consider the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

### Yarn

Always use the [Yarn](https://yarnpkg.com/) package manager instead of NPM. It uses a lock file for deterministic and faster installations.

Don't install Yarn using NPM, see [Installation](https://yarnpkg.com/en/docs/install).

To use Yarn on Jenkins, read [these instructions](https://twiki.puzzle.ch/bin/view/Puzzle/Buildserver#Node_js_NPM_auf_Jenkins).

### AngularJS

In addition to the Airbnb Guide, consider John Papa's [Angular 1 Style Guide](https://github.com/johnpapa/angular-styleguide/tree/master/a1) for code conventions and application structure. Use [eslint-plugin-angular](https://github.com/Gillespie59/eslint-plugin-angular) to enforce these rules.


## TypeScript

* Use strict type checking (``"strict": true`` under ``compilerOptions`` in ``tsconfig.json``)

### Angular

* Use TypeScript
* Use Webpack or Angular CLI

In addition to the Airbnb Guide, consider the official [Angular Style Guide](https://angular.io/guide/styleguide) for code conventions and application structure. Use [codelyzer](https://github.com/mgechev/codelyzer) to enforce these rules.


## Cascading Style Sheets

Consider Github's [Primer Code Guidelines](http://primercss.io/guidelines/).

TODO:

* SASS usage
* postCSS/autoprefixer/cssnano
* SMACSS


## Hypertext Markup Language

Consider Github's [Primer Code Guidelines](http://primercss.io/guidelines/).

# Puzzle Frontend Code Guidelines

This repository provides code conventions for JavaScript, TypeScript, CSS and HTML, when used in software projects at Puzzle ITC. According to the Puzzle [QM Guide](https://twiki.puzzle.ch/bin/view/Puzzle/CodeConventions), the goal is to use coding conventions and automatically verify them.

Please contact the [frontend workgroup](https://twiki.puzzle.ch/bin/view/Puzzle/Frontend) for questions or create pull requests for improvements.


## General

### EditorConfig

[EditorConfig](http://editorconfig.org/) helps define and maintain consistent coding styles between different editors and IDEs ([supporting editors/IDEs](http://editorconfig.org/#download)).

Put the following ``.editorconfig`` file in your frontend application's root:

    # http://editorconfig.org

    root = true

    [*]
    charset = utf-8
    indent_style = space
    indent_size = 2
    end_of_line = lf
    insert_final_newline = true
    trim_trailing_whitespace = true

    [*.{diff,md}]
    insert_final_newline = false
    trim_trailing_whitespace = false

### Yarn

Always use the [Yarn](https://yarnpkg.com/) package manager instead of NPM. It uses a lock file for deterministic and faster installations.

Don't install Yarn using NPM, see [Installation](https://yarnpkg.com/en/docs/install).

To use Yarn on Jenkins, read [these instructions](https://twiki.puzzle.ch/bin/view/Puzzle/Buildserver#Node_js_NPM_auf_Jenkins).


## JavaScript

* Lean towards [NPM scripts](https://docs.npmjs.com/misc/scripts) (see [Why I Left Gulp and Grunt for npm Scripts](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8)), otherwise use [Gulp](http://gulpjs.com/)
* If you need a module bundler: use Webpack

Consider the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

> Add the Puzzle linting rules to your project:
> ```
> yarn add --dev @puzzleitc/frontend-guides
> ```
>
> Add `.eslintrc.js`:
> ```js
> module.exports = require('@puzzleitc/frontend-guides/eslint/config');
> ```

### AngularJS

* For testing, use Karma/Jasmine

In addition to the Airbnb Guide, consider John Papa's [Angular 1 Style Guide](https://github.com/johnpapa/angular-styleguide/tree/master/a1) for code conventions and application structure. Use [eslint-plugin-angular](https://github.com/Gillespie59/eslint-plugin-angular) to enforce these rules.

> Add the Puzzle linting rules to your project:
> ```
> yarn add --dev @puzzleitc/frontend-guides
> ```
>
> Add `.eslintrc.js`:
> ```js
> module.exports = require('@puzzleitc/frontend-guides/eslint/config/ng');
> ```


## TypeScript

* Use strict type checking (`"strict": true` under `compilerOptions` in `tsconfig.json`)

> Add the Puzzle linting rules to your project:
> ```
> yarn add --dev @puzzleitc/frontend-guides
> ```
>
> Add `tslint.json`:
> ```json
> {
>   "extends": ["@puzzleitc/frontend-guides/tslint/config"]
> }
> ```

### Angular

* Use TypeScript
* Use Webpack or Angular CLI
* For testing, use Karma/Jasmine

In addition to the Airbnb Guide, consider the official [Angular Style Guide](https://angular.io/guide/styleguide) for code conventions and application structure. Use [codelyzer](https://github.com/mgechev/codelyzer) to enforce these rules.


> Add the Puzzle linting rules to your project:
> ```
> yarn add --dev @puzzleitc/frontend-guides
> ```
>
> Add `tslint.json`:
> ```json
> {
>   "extends": ["@puzzleitc/frontend-guides/tslint/config/ngx"]
> }
> ```


## Cascading Style Sheets

Consider Github's [Primer Code Guidelines](http://primercss.io/guidelines/).

TODO:

* SASS usage
* postCSS/autoprefixer/cssnano
* SMACSS?


## Hypertext Markup Language

Consider Github's [Primer Code Guidelines](http://primercss.io/guidelines/).


## Preferred Packages & Widgets

TODO

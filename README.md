# Puzzle Frontend Coding Guidelines

This repository provides guidelines, recommendations and code conventions for JavaScript, TypeScript, CSS and HTML to be used in software projects at Puzzle ITC. According to the Puzzle [QM Guide](https://twiki.puzzle.ch/bin/view/Puzzle/CodeConventions), code conventions must be used and automatically verified in software projects.

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

To setup Yarn on Jenkins, read [these instructions](https://twiki.puzzle.ch/bin/view/Puzzle/Buildserver#Node_js_NPM_auf_Jenkins).

### Linting & Fixing

Use either `eslint` (JavaScript) or `tslint` (TypeScript) to enforce code conventions. Add the package `@puzzleitc/frontend-guides` to your project and provide the appropriate linter configuration as described below.

You may use `eslint --fix '**/*.js'` or `tslint --fix '**/*.ts'` to automatically fix linting issues where possible.


## JavaScript

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

Recommendations:

* Lean towards [NPM scripts](https://docs.npmjs.com/misc/scripts) (see [Why I Left Gulp and Grunt for npm Scripts](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8)), otherwise use [Gulp](http://gulpjs.com/)
* If you need a module bundler: use [Webpack](http://webpack.github.io/)
* TODO: transpiling

### AngularJS

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

Consider the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

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

Recommendations:

* Use strict type checking (`"strict": true` under `compilerOptions` in `tsconfig.json`)


### Angular

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

Recommendations:

* Use TypeScript
* Use [Webpack](http://webpack.github.io/) or the [Angular CLI](https://github.com/angular/angular-cli)


## Cascading Style Sheets

Consider Github's [Primer Code Guidelines](http://primercss.io/guidelines/).

TODO:

* SASS usage
* postCSS/autoprefixer/cssnano
* SMACSS?


## Hypertext Markup Language

Consider Github's [Primer Code Guidelines](http://primercss.io/guidelines/).


## Images & Icons

TODO:

* inline SVG
* optimization?


## Preferred Packages & Widgets

TODO:

* Selectize
* Testing (AngularJS & Angular): Karma/Jasmine
* ...

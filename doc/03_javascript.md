[back](../README.md)

# JavaScript

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

## Linting

Use `tslint` to enforce code conventions and best practices. Add the package `@puzzleitc/frontend-guides` to your project and provide the appropriate linter configuration as described below.

You may use `eslint --fix '**/*.js'` to automatically fix linting issues where possible.


## AngularJS

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

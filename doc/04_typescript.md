[back](../README.md)

# TypeScript

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


## Linting

Use `tslint` to enforce code conventions and best practices. Add the package `@puzzleitc/frontend-guides` to your project and provide the appropriate linter configuration as described below.

You may use `tslint --fix '**/*.ts'` to automatically fix linting issues where possible.


## Angular

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

* Use [Webpack](http://webpack.github.io/) or the [Angular CLI](https://github.com/angular/angular-cli)

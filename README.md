# @atxm/identify

[![npm](https://flat.badgen.net/npm/license/@atxm/identify)](https://www.npmjs.org/package/@atxm/identify)
[![npm](https://flat.badgen.net/npm/v/@atxm/identify)](https://www.npmjs.org/package/@atxm/identify)
[![CircleCI](https://flat.badgen.net/circleci/github/a-t-x-m/identify)](https://circleci.com/gh/a-t-x-m/identify)
[![David](https://flat.badgen.net/david/dep/a-t-x-m/identify)](https://david-dm.org/a-t-x-m/identify)

Adds data attributes for editor and pane IDs to the respective HTML element

## Installation

`npm install @atxm/identify -S`

## Usage

Import the module into your Atom package, then invoke it in your `activate` method

**Examples**:

```js
// JavaScript
import identify from '@atxm/identify';

export async function activate() {
    identify();
};
```

```coffee
# CoffeeScript
const identify = require "@atxm/identify"

module.exports =
  activate: () ->
    identify()
```

## License

This work is dual-licensed under [The MIT License](https://opensource.org/licenses/MIT) and the [GNU General Public License, version 2.0](https://opensource.org/licenses/GPL-2.0)

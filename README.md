# @atxmtx/identify

[![npm](https://flat.badgen.net/npm/license/@atxmtx/identify)](https://www.npmjs.org/package/@atxmtx/identify)
[![npm](https://flat.badgen.net/npm/v/@atxmtx/identify)](https://www.npmjs.org/package/@atxmtx/identify)
[![CircleCI](https://flat.badgen.net/circleci/github/atxmtx/identify)](https://circleci.com/gh/atxmtx/identify)
[![David](https://flat.badgen.net/david/dep/atxmtx/identify)](https://david-dm.org/atxmtx/identify)

Adds data attributes for editor and pane IDs to the respective HTML element

## Installation

`npm install @atxmtx/identify -S`

## Usage

Import the module into your Atom package, then invoke it in your `activate` method

**Examples**:

```js
// JavaScript
import identify from '@atxmtx/identify';

export async function activate() {
    identify();
};
```

```coffee
# CoffeeScript
const identify = require "@atxmtx/identify"

module.exports =
  activate: () ->
    identify()
```

## License

This work is dual-licensed under [The MIT License](https://opensource.org/licenses/MIT) and the [GNU General Public License, version 2.0](https://opensource.org/licenses/GPL-2.0)

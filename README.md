[![NPM Version](http://img.shields.io/npm/v/dtektor.svg?style=flat)](https://npmjs.org/package/dtektor)
[![Build Status](http://img.shields.io/travis/royriojas/dtektor.svg?style=flat)](https://travis-ci.org/royriojas/dtektor)

# dtektor

A module to detect client side browser capabilities, heavily inspired in modernizr but with tests written as commonJS modules.

**Important**:

This is intended to be use with browserify, since it uses browserify transforms:

- shimixify
- require-globify
- babelify

## Install

```bash
npm i --save dtektor
```

## Usage

```javascript
// hard way to use it
var dtektor = require('dtektor')({
  touch: require('dtektor/f/touch'),
  fullscreen: require('dtektor/f/fullscreen'),
  // this is a custom test implemented in your app
  // dash separated keys will be transformed to
  // camelCase ones on the returned object
  'another-test': require('./lib/custom-tests')
});

// the keys that contain dashes
// are converted to camelCase ones
dtektor.anotherTest

// also the html element will have the classes:
// - touch, if touch is supported or no-touch if not supported
// - fullscreen, if fullscreen is supported or no-fullscreen if not supported
// - another-test, if the custom test exports a boolean === true or
//   no-another-test if the exported value is false
```

**Load all the tests included in this module**

```javascript
// for now only tests for fullscreen, hover-enabled and touch
// ideally all the tests in the modernizr repo could be moved to commonjs
// modules and can be imported here but this should be only done for dev purposes
// TODO: Add more modernizr tests to the p/ folder (f stands for features)
var dtektor = require('dtektor/all');
```

**Customize the tests**

```javascript
// In a real life app you should only load the tests you use
// this can be achieved by doing:
//
var dtektor = require('dtektor')(
  // this uses the transform require-globify
  // this will load only touch and fullscreen
  // other tests can be added as well when they
  // become available
  require('./node_modules/dtektor/p/{touch,fullscreen}.js', { mode: 'hash'})
);

// or you can load your own tests
var dtektor = require('dtektor')(
  require('./custom-tests/**/*.js', { mode: 'hash'}) // this will expand your tests
)
```

## License

[MIT](./LICENSE)

## Changelog

[Changelog](./changelog.md)

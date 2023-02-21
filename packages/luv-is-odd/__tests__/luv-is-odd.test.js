'use strict';

// const luvIsOdd = require('..');
// const assert = require('assert').strict;

// assert.strictEqual(luvIsOdd(), 'Hello from luvIsOdd');
// console.info('luvIsOdd tests passed');
const {isOdd} = require('../dist/luv-is-odd.js');

test("isOdd", () => {
  expect(isOdd(1)).toBe(true);
  expect(isOdd(2)).toBe(false);
})

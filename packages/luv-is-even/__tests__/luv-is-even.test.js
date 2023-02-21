// 'use strict';

// const luvIsEven = require('..');
// const assert = require('assert').strict;

// assert.strictEqual(luvIsEven(), 'Hello from luvIsEven');
// console.info('luvIsEven tests passed');

const { isEven } = require('../dist/luv-is-even.js');

test("isEven", () => {
  expect(isEven(1)).toBe(false);
  expect(isEven(2)).toBe(true);
})

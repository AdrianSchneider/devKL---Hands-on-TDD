var assert = require('assert');
var FizzBuzz = require('../fizzbuzz');
var fizzbuzz = new FizzBuzz();

describe('Test suite', function() {
    it('Does something', function() {
        assert.equal(1, fizzbuzz.render());
    });
});

var assert = require('assert');
var formatter = require('./formatter');

describe('formatter', function() {
    describe('formatString function', function() {
        it('return "toto est content"', function() {
            assert.equal("toto est content", formatter.formatString("toto est content",[]));
        });
        it('return "toto a 26 ans et a 3 chats !"', function() {
            assert.equal("toto a 26 ans et a 3 chats !", formatter.formatString("toto a {0} ans et a {1} chats !",[26,3]));
        });
        it('return null', function() {
            assert.equal(null, formatter.formatString("toto a {0b} ans et a {1} chats !",[26,3]));
        });
        it('return null', function() {
            assert.equal(null, formatter.formatString("toto a {0",[26,3]));
        });
        it('return null', function() {
            assert.equal(null, formatter.formatString("toto a {2} ans et a {1} chats !",[26,3]));
        });
    });
});

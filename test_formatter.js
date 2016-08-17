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
        it('return "toto a 26 ans"', function() {
            assert.equal("toto a 26 ans", formatter.formatString("toto a {12} ans",[1,1,1,1,1,1,1,1,1,1,1,1,26,1,1]));
        });
        
        it('bad number', function() {
            assert.equal("toto a {0b} ans et a {1} chats !", formatter.formatString("toto a {0b} ans et a {1} chats !",[26,3]));
        });
        it('bad syntax', function() {
            assert.equal("toto a {0", formatter.formatString("toto a {0",[26,3]));
        });
        it('bad index', function() {
            assert.equal("toto a {2} ans et a {1} chats !", formatter.formatString("toto a {2} ans et a {1} chats !",[26,3]));
        });
        
        it('return "toto a {0} ans et a {1} chats !"', function() {
            assert.equal("toto a {0} ans et a {1} chats !", formatter.formatString("toto a '{0} ans et a {1} chats !",[26,3]));
        });
        
        it('return "toto a {0} ans et a 3 chats !"', function() {
            assert.equal("toto a {0} ans et a 3 chats !", formatter.formatString("toto a '{0} ans et' a {1} chats !",[26,3]));
        });
        
        it('return "Voici l\'age de toto: 26 ans"', function() {
            assert.equal("Voici l'age de toto: 26 ans", formatter.formatString("Voici l''age de toto: {0} ans",[26,3]));
        });
    });
});

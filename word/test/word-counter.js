const assert =  require('chai').assert;
const App = require('../src/wordcounting.js');

describe('Word counting',()=>{
    describe('handles valid input',()=>{
      it('it should return a json with {alli:1, is:1, a:1, good:1,  boy:1}',()=>{
        assert.deepEqual(App.word("Alli is a good boy"),{Alli:1, is:1, a:1, good:1, boy:1});
     
        
    }) ; 

      it('it should return a json with { This:1, is:1, andela:1}', () => {
          assert.deepEqual(App.word("This is andela"), { This:1, is:1, andela:1});
       
      }); 

      it('it should return a json with { my: 2, name:1 }', () => {
          assert.deepEqual(App.word("my my name"), { my: 2, name:1 });
      }); 

      it('it should return a json with { olly: 2, in: 1, come:1, free:1 }', () => {
          assert.deepEqual(App.word("olly olly in come free"), { olly: 2, in: 1, come:1, free:1 });
      }); 

      it('it should return a json with { This: 1, is: 1, my: 1, last: 1, test:1 }', () => {
          assert.deepEqual(App.word("This is my last test"), { This: 1, is: 1, my: 1, last: 1, test:1 });
      }); 

    })


    describe('handles non-valid input', () => {
        it('it should return a string with Please supply a string', () => {
            assert.equal(App.word(""),"Please supply a non-empty String");
            // console.log(App.word(""));
        });

        it('it should return a string with Please supply a string', () => {
            assert.equal(App.word([]), "Please supply a String");
        });

        it('it should return a string with Please supply a string', () => {
            assert.equal(App.word({}), "Please supply a String");
        });

        it('it should return a string with Please supply a string', () => {
            assert.equal(App.word(), "Please supply a String");
        });

        it('it should return a string with Please supply a string', () => {
            assert.equal(App.word(1), "Please supply a String");
        });
    })



})
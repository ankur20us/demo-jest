let add = require('./../../src/add')
let expect = require('chai').expect;

describe("testing the add", ()=>{

    test("Add  test", ()=>{
        expect(add(1,2)).to.equals(3);
    })
})
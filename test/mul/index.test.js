let mul = require('./../../src/mul')
let expect = require('chai').expect;

describe("testing the mul", ()=>{

    test("Add test", ()=>{
        expect(mul(2,1)).to.equals(2);
    })
})
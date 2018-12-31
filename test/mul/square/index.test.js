let sq = require('./../../../src/mul/square');

let expect = require('chai').expect;

describe("testing the mul->sq", ()=>{

    test("mul test", ()=>{
        expect(sq(2)).to.equals(4);
    })
})
////// FIRST WAY

var Expect = function(assertion) {
 this.assertion = assertion;
};

Expect.prototype.toEqual = function(expectation) {
return this.assertion === expectation;
};

Expect.prototype.toInclude = function(expectation) {
  if (this.assertion.includes(expectation)) {
    return true
  } else {
    return false
  }
};

Expect.prototype.toBeTrue = function() {
  if (this.assertion === true ) {
    return true
  } else {
    return false
  }
}

var expect = new Expect(1+2);
var expect2 = new Expect(["cat"])
var expect3 = new Expect(1+2 === 3)

expect.toEqual(4)
expect2.toInclude("cat")
expect3.toBeTrue()

////// SECOND WAY

var expect = { 
  toEqual: function(assertion, expectation) {
    if (assertion === expectation) {
      console.log "cool"
    } else {
      throw new Error("Equality assertion failed");
    }
  },
  toInclude: function(assertion, expectation) {
    return assertion.includes(expectation);
  },
  toBeTrue: function(assertion) {
    return assertion === true;
  }
}

expect.toEqual(1,1)
expect.toEqual([],"cat")
expect.toEqual(1+1 === 2)

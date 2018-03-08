var beforeEachCallback;
var resultDiv = document.getElementById('results');

const beforeEach = function(callback) {
  beforeEachCallback = callback;
};

(function(exports) {
  function describe(string, callback) {
    var paragraph = document.createElement('p');
    var br = document.createElement('br');
    paragraph.appendChild(document.createTextNode(string));
    resultDiv.appendChild(paragraph);
    paragraph.appendChild(br);
    // console.log('%c' + string, 'color: darkblue');
    callback();
  }

  function it(string, callback) {
    var paragraph = document.createElement('p');
    var br = document.createElement('br');
    paragraph.appendChild(document.createTextNode(string));
    resultDiv.appendChild(paragraph);
    paragraph.appendChild(br);
    if (beforeEachCallback !== undefined) {
      beforeEachCallback();
    }
    callback();
  }

  exports.describe = describe; // exports it to global scope
  exports.it = it; // exports it to global scope
})(this);

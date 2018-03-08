var resultDiv = document.getElementById('results');

const expect = {
  //vars are accessible everywhere, even when module.
  toEqual: function(assert, expect) {
    var paragraph = document.createElement('p');
    var br = document.createElement('br');
    assert === expect
      ? paragraph.appendChild(document.createTextNode('Equality test passed.'))
      : paragraph.appendChild(
          document.createTextNode(
            'The test failed as the assertion does not equal the expectation'
          )
        );
    resultDiv.appendChild(paragraph);
    paragraph.appendChild(br);
    cssify();
  },
  toInclude: function(assert, expect) {
    var paragraph = document.createElement('p');
    var br = document.createElement('br');
    assert.includes(expect)
      ? paragraph.appendChild(
          document.createTextNode('Inclusion test passed', 'color: green')
        )
      : paragraph.appendChild(
          document.createTextNode(
            'The test failed as the tested object does not include the expected content'
          )
        );
    resultDiv.appendChild(paragraph);
    paragraph.appendChild(br);
    cssify();
  },
  toBeTrue: function(assert) {
    var paragraph = document.createElement('p');
    var br = document.createElement('br');
    assert === true
      ? paragraph.appendChild(document.createTextNode('Truth test passed'))
      : paragraph.appendChild(
          document.createTextNode(
            'The statement is not truthy. The test failed.'
          )
        );
    resultDiv.appendChild(paragraph);
    paragraph.appendChild(br);
    cssify();
  },
  toBeEmpty: function(assert) {
    var paragraph = document.createElement('p');
    var br = document.createElement('br');
    assert.length === 0
      ? paragraph.appendChild(
          document.createTextNode(
            'The assertion is empty, test passed.',
            'color: green'
          )
        )
      : paragraph.appendChild(
          document.createTextNode('The assertion is not empty, test failed.')
        );
    resultDiv.appendChild(paragraph);
    paragraph.appendChild(br);
    cssify();
  }
};

function cssify() {
  var para = resultDiv.children;
  var spongebobDry = document.getElementById('spongebob-dry');
  var moistImg = document.getElementById('moist-tests');
  var notMoistText = document.getElementById('not-moist-text');
  for (var i = 0; i < para.length; i++) {
    if (para[i].innerHTML.includes('passed')) {
      para[i].className = 'passed';
    } else if (para[i].innerHTML.includes('failed')) {
      para[i].className = 'failed';
      spongebobDry.className = 'not-moist-img-display';
      moistImg.className = 'moist-img-hide';
      notMoistText.className = 'not-moist-img-display';
    }
  }
}

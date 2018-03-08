An npm package to test your application using pure vanilla JavaScript.

Quick Example Usage of Basic Matchers
--------

If this is your model:
```
function Notepad(name) {
  this.content = []
  this.name = name
  this.colors = []
}
```

This could be your test file:
```
(function notepadIsEmpty() {
  var notepad = new Notepad();
  expect.toBeEmpty(notepad.content);
})();

(function notepadNameIsDefined() {
  var notepad = new Notepad('My notepad');
  expect.toBeTrue(notepad.name != undefined);
})();

(function notepadNameCanBeSet() {
  var notepad = new Notepad('Moisty Notepad');
  expect.toEqual(notepad.name, 'Moisty Notepad');
})();

(function notepadCanIncludeColors() {
  var notepad = new Notepad();
  notepad.colors.push('blue');
  expect.toInclude(notepad.colors, 'blue');
})();
```

Example Usage of beforeEach and It blocks
--------

```
describe('Notepad', function() {
  var notepad;

  beforeEach(function() {
    // We create a new instance of Notepad before running every it block
    notepad = new Notepad();
  });

  it('----> it is empty*', function() {
    expect.toBeEmpty(notepad.content);
  });

  it('----> it includes Hello Moon', function() {
    notepad.content.push('Hello Moon!');
    expect.toInclude(notepad.content, 'Hello Moon!'); => True
  });

  it('----> it includes Hello Moon', function() {
    notepad.content.push('Hello World');
    expect.toInclude(notepad.content, 'Hello Moon'); => False
  });
});
```

HTML Runner
------
![HTML Moist Runner](/public/moisty-screenshot.png?raw=true)
describe('Notepad', function() {
  var notepad;

  beforeEach(function() {
    notepad = new Notepad();
    console.log('calling before each...');
  });

  it('is equal', function(){
    expect.toEqual(1,1);
  });

  it('----> it is empty*', function() {
    expect.toBeEmpty(notepad.content);
  });

  it('----> it is empty**', function() {
    notepad.content.push('ehehhehhe');
    expect.toBeEmpty(notepad.content);
  });

  it('----> it is empty***', function() {
    expect.toBeEmpty(notepad.content);
  });

  it('----> it includes hehehe', function() {
    notepad.content.push('hehehe');
    expect.toInclude(notepad.content, 'hehehe');
  });

  it('----> it includes hihihi', function() {
    notepad.content.push('hehehe');
    expect.toInclude(notepad.content, 'hihihi');
  });
});

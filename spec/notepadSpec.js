describe('Notepad', function() {
  var notepad;
  var note;

  it('shows a list of notes', function() {
    notepad = new Notepad();
    note = new Note(1, 'string');
    notepad.content.push(note);
    expect.toInclude(notepad.content, note);
  });
});

function Notepad(name) {
  this.content = []
  this.name = name
  this.colors = []
}

function Note(string) {
  this.content = string
}

var notepad = new Notepad();

window.addEventListener("load", function (event) {

  function sendData(note) {
      notepad.content.push(new Note(note));
      displayNotes();
  }

  var form = document.getElementById("form");

  form.addEventListener("submit", function (event) {

    var note = document.getElementById('note').value

    event.preventDefault();

    sendData(note);
  });

});

function displayNotes() {
    document.getElementById('notes').innerHTML = "";
    notepad.content.forEach(function (note) {
    var notes = document.getElementById('notes'),
    noteschild = document.createElement('div');
    noteschild.innerHTML = note.content;
    notes.appendChild(noteschild)
  })
}

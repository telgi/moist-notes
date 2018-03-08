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
      var noteObject = new Note(note);
      notepad.content.push(noteObject);
      addNote(noteObject);
  }

  var form = document.getElementById("form");

  form.addEventListener("submit", function (event) {

    var note = document.getElementById('note').value

    event.preventDefault();

    sendData(note);
  });

});

function addNote(noteObject) {
    let notes = document.getElementById('notes');
    let noteschild = document.createElement('div');
    let note = document.createTextNode(noteObject.content);
    notes.appendChild(noteschild)
    noteschild.appendChild(note);
}

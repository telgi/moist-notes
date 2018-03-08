function Notepad(name) {
  this.content = []
  this.name = name
  this.colors = []
}

function Note(string) {
  this.content = string
}

var counter = 1;

var notepad = new Notepad();

window.addEventListener("load", function (event) {
  function sendData(note) {
      var noteObject = new Note(note);
      notepad.content.push(noteObject);
      displayNote(noteObject);
  }

  var form = document.getElementById("form");

  form.addEventListener("submit", function (event) {

    var note = document.getElementById('note').value

    event.preventDefault();

    sendData(note);
  });

});

function displayNote(noteObject) {
  let notes = document.getElementById('notes');
  let noteschild = document.createElement('div');
  noteschild.setAttribute("id", counter);
  if (noteObject.content.length > 20 ) {
    let trimmedNote = noteObject.content.substring(0, 20);
    let note = document.createTextNode(trimmedNote + " ...");
    notes.appendChild(noteschild)
    noteschild.appendChild(note);
  } else {
    let note = document.createTextNode(noteObject.content);
    notes.appendChild(noteschild)
    noteschild.appendChild(note);
  } // prepend instead of append
  counter += 1
}

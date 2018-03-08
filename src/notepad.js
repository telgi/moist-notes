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
    let notes = document.getElementById('notes'); // targets a notes div of html
    let noteschild = document.createElement('div'); // creates a noteschild div - for future use :)
    notes.appendChild(noteschild) // put the newly created noteschild div inside of notes div
    let note = document.createTextNode(noteObject.content); // appendChild - function below - accepts only data of Node type.
    // Thanks to this operation, we set our string from node.content to be of a Node type.
    noteschild.appendChild(note); // takes note.content and puts it to noteschild.
}

// to do - add id or class attribute to the noteschild div.

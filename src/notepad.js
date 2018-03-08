
function Notepad(name) {
  this.content = [];
  this.name = name;
  this.colors = []
}

function Note(string, id) {
  this.content = string;
  this.id = id
}

var counter = 1;

var notepad = new Notepad();

window.addEventListener("load", function (event) {

  var form = document.getElementById("form");

  form.addEventListener("submit", function (event) {

    var note = document.getElementById('note').value;

    event.preventDefault();

    sendData(note);
  });

});

function sendData(note) {
    var noteObject = new Note(note, counter);
    notepad.content.push(noteObject);
    displayNote(noteObject);
    counter += 1
}

function displayNote(noteObject) {
  let notes = document.getElementById('notes');
  let noteschild = document.createElement('div');
  noteschild.setAttribute("id", noteObject.id);
  var id = noteObject.id;
  noteschild.onclick = function() {_onClick(id)};
  if (noteObject.content.length > 20 ) {
    _longNote(notes, noteschild, noteObject);
  } else {
    _shortNote(notes, noteschild, noteObject);
  }
}

// function _badassifyNoteschild(noteschild, noteObject) {
//   noteschild.setAttribute("id", noteObject.id);
//   noteschild.onclick = function() { alert('blah'); };
// }

function _longNote(notes, noteschild, noteObject) {
  let trimmedNote = noteObject.content.substring(0, 20);
  let note = document.createTextNode(trimmedNote + " ...");
  _appendChild(noteschild, note)
}

function _shortNote(notes, noteschild, noteObject) {
  let note = document.createTextNode(noteObject.content);
  _appendChild(noteschild, note)
}

function _appendChild(noteschild, note) {
  notes.appendChild(noteschild);
  noteschild.appendChild(note);
}
// prepend instead of append

function _onClick(id) {
  alert(id);
    console.log(alert);
}

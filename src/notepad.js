function Notepad(name) {
  this.content = []
  this.name = name
  this.colors = []
}

function Note(string) {
  this.content = string
}

window.addEventListener("load", function (event) {

  function sendData() {

  }

  var form = document.getElementById("form");

  form.addEventListener("submit", function (event) {

    var note = document.getElementById('note').value
    console.log(note);

    event.preventDefault();

    sendData();
  });


});

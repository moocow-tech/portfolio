const openNav = () => {
let media = window.matchMedia("(max-width: 700px)")
document.getElementById("myNav").style.width = (media.matches) ? "100%" : "60%";
document.getElementById("res-w").style.marginLeft = (media.matches) ? "40px" : "150px" ;
}

const closeNav = () => {
  document.getElementById("myNav").style.width = "0%";
}

const openContact = () => {
  document.getElementById("Contact").style.width = "40%";
}

const closeContact = () => {
  document.getElementById("Contact").style.width = "0%";
}

const dispNotes = () => {
  let note = document.getElementById("notes");
  note.style.visibility = (note.style.visibility ==="visible") ? "hidden" : "visible";
}


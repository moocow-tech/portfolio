const media_xs = window.matchMedia("(max-width: 768px)");
const media_sm = window.matchMedia("(max-width: 991px)");
const media_md = window.matchMedia("(max-width: 1199px)");

const openNav = () => {
document.getElementById("myNav").style.width = (media_xs.matches) ? "100%" : (media_sm.matches) ? "75%" : "60%" ;
document.getElementById("res-w").style.marginLeft = (media_xs.matches) ? "60px" : (media_sm.matches) ? "120px" : "100px" ;
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


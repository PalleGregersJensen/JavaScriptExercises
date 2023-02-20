window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#blue_container").addEventListener("click", fallover);
  document.querySelector("#blue_container").classList.add("move");
}

function fallover() {
  document.querySelector("#blue_container").classList.remove("move");
  document.querySelector("#blue_container").classList.add("fallover");
}

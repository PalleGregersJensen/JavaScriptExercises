window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#orange_sprite").addEventListener("click", jump-once);
  document.querySelector("#orange_container").classList.reset("jump-once");
}

function jump1() {
  document.querySelector("#orange_container").classList.remove("move");
  document.querySelector("#orange_sprite").classList.add("jump1");
}

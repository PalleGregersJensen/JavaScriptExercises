window.addEventListener("load", start);

function start() {
  console.log("start");
   document.querySelector("#orange_container").addEventListener("click", jump);
   document.querySelector("#orange_container").classList.add("move");
}


function jump() {
  document.querySelector("#orange_container").classList.remove("move");
  document.querySelector("#orange_container").classList.add("jump");
}


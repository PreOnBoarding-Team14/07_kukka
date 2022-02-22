<<<<<<< HEAD
const count = document.querySelector(".count");
const onlyPc = document.querySelector(".onlyPc");
=======
var count = document.querySelector(".count");
var onlyPc = document.querySelector(".onlyPc");
>>>>>>> f777c2a0775178d57f48e79d6886a299b2eed764

function countCheck() {
  if (count.textContent === "0") {
    count.style.display = "none";
  }
}

countCheck();

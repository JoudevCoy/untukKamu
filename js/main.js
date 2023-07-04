window.addEventListener("load", function(){
  var preloading = document.querySelector(".loading-wrap");
  var loadingText = document.querySelector(".loading-text");
  preloading.classList.add("loading-out");
  preloading.style.transition = "all .5s linear";
  loadingText.innerHTML = "Selesai!";
});
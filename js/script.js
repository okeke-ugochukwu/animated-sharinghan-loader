var sharinghan = document.getElementById("main_radius");
var themeSong = document.getElementById("theme-song");
themeSong.play();

themeSong.addEventListener("play", (event) => {
       sharinghan.removeAttribute("style");
})



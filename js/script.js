var sharinghan = document.getElementById("main_radius");
var themeSong = document.getElementById("theme-song");
themeSong.play();

themeSong.addEventListener("loadedmetadata", (event) => {
       sharinghan.removeAttribute("style");
})



//remember to do the thing 

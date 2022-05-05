let btnVideo = document.querySelector("#btnVideo");
let btnPlay = document.querySelector("#btnPlay");
let caption = document.querySelector(".caption");

let img = document.querySelector("#imgVideo");

$("#btnPlay").click(function () {
  let video = '<iframe src="' + $(img).attr("data-video") + '"></iframe>';
  btnVideo.style.display = "none";
  btnPlay.style.display = "none";
  caption.style.display = "none";
  $(img).replaceWith(video);
});

window.onload = function () {};

let btnVideo = document.querySelector("#btnPlay");
let img = document.querySelector("#imgVideo");

$("#btnPlay").click(function () {
  let video = '<iframe src="' + $(img).attr("data-video") + '"></iframe>';

  $(img).replaceWith(video);
});

window.onload = function () {};
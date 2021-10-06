console.log("page loaded...");

function playVideo(video) {
	video.play();
}

function pauseVideo(vid) {
	video.pause();
	video.currentTime = 0;
}
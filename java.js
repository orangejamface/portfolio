


  const sound = document.getElementById("soundDesign");
  const video = document.getElementById("video");
  const music = document.getElementById("music");

function toggleSound() {
  if (sound.style.display !== "block") {
      sound.style.display = "block";
      video.style.display = "none";
      music.style.display = "none";
  } else {
    sound.style.display = "none";
      }
}


function toggleVideo() {
  if (video.style.display !== "block") {
      video.style.display = "block";
      sound.style.display = "none";
      music.style.display = "none";
  } else {
      video.style.display = "none";
      }
}

function toggleMusic() {
  if (music.style.display !== "block") {
      music.style.display = "block";
      video.style.display = "none";
      sound.style.display = "none";
  } else {
      music.style.display = "none";
      }
}


// BELOW APPLIES TO VIDEO LOADING AND PLAYING

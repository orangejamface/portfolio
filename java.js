
// three variable below correspond to large sections, each with the same styling.

  const sound = document.getElementById("soundDesign");
  const video = document.getElementById("video");
  const music = document.getElementById("music");

  // Three functions below in order to toggle between showing and hiding those three different sections.
  // Each section has the same structure and is reached by clicking its corresponding button
  // currently Sound Dsign / Composition is the default upon load and you can click Videogrpahy or music to
  // show that section and hide the others.
  // one issue however is if oyu clikc the button of the section you are currently on it will hide it, meaning
  // all sections will be hidden and the website will be essentially blank except fo the header and footer.
  // I could not figure out how to stop this, it might mean ap[proaching the problem differntly, this is 
  // and improvment I would like to work on at some point in the future.

function toggleSound() {
  if (sound.style.display !== "flex") {
      sound.style.display = "flex";
      video.style.display = "none";
      music.style.display = "none";
  } else {
    sound.style.display = "none";
      }
}


function toggleVideo() {
  if (video.style.display !== "flex") {
      video.style.display = "flex";
      sound.style.display = "none";
      music.style.display = "none";
  } else {
      video.style.display = "none";
      }
}

function toggleMusic() {
  if (music.style.display !== "flex") {
      music.style.display = "flex";
      video.style.display = "none";
      sound.style.display = "none";
  } else {
      music.style.display = "none";
      }
}
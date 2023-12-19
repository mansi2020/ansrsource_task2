const videoPlayer = document.getElementById("videoPlayer");
const speedSelect = document.getElementById("speed");

// Update playback speed when the select option is changed
speedSelect.addEventListener("change", function () {
  const speed = this.value;
  videoPlayer.playbackRate = speed;
});

// click on get started button and show player container
let getStartBtn = document.querySelector("#getStartedBtn");
let homePage = document.querySelector(".homepage");
let playerContainer = document.querySelector(".player-container");

getStartBtn.addEventListener("click",(e)=>{
    homePage.style.display = "none";
    playerContainer.style.display = "flex";
})

// click on back button go to home page
let backButton = document.querySelector("#backButton");
backButton.addEventListener("click",()=>{
   homePage.style.display = "flex";
    playerContainer.style.display = "none";
})
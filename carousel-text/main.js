const imageEl = document.getElementById("image-el"),
  imageCrop = document.getElementById("image-crop"),
  leftControl = document.getElementById("left-control"),
  rightControl = document.getElementById("right-control"),
  jimis = ["images/jimi0.jpg", "images/jimi1.jpg", "images/jimi2.jpg"],
  indicator1 = document.getElementById("indicator1"),
  indicator2 = document.getElementById("indicator2"),
  indicator3 = document.getElementById("indicator3"),
  indicators = [indicator1, indicator2, indicator3],
  interval = 4000,
  captionText = document.getElementById("caption-text"),
  caption1 = "This is Jimi Hendrix.",
  caption2 = "This is also Jimi Hendrix.",
  caption3 = "This is still Jimi Hendrix.",
  captions = [caption1, caption2, caption3];

  
let imageCounter = 0,
  myTimer = setInterval(slideSwitch, interval);


for (let i in indicators) {
  indicators[i].addEventListener("click", () => {
    indicators[imageCounter].classList.remove("active-indicator");
    imageCounter = i;
    imageCrop.classList.toggle("animate");
    imageCrop.offsetWidth;
    imageEl.src = jimis[imageCounter];
    captionText.innerText = captions[imageCounter];
    imageCrop.classList.toggle("animate");
    indicators[imageCounter].classList.add("active-indicator");
    clearInterval(myTimer);
    myTimer = setInterval(slideSwitch, interval);
  })
}

captionText.innerText = captions[imageCounter];

leftControl.addEventListener("click", () => {
  indicators[imageCounter].classList.remove("active-indicator");
  if(imageCounter-- <= 0) {
    imageCounter = 2;
  }
  imageCrop.classList.toggle("animate");
  imageCrop.offsetWidth;
  imageEl.src = jimis[imageCounter];
  captionText.innerText = captions[imageCounter];
  imageCrop.classList.toggle("animate");
  indicators[imageCounter].classList.add("active-indicator");
  clearInterval(myTimer);
  myTimer = setInterval(slideSwitch, interval);
});

rightControl.addEventListener("click", () => {
  indicators[imageCounter].classList.remove("active-indicator");
  if(imageCounter++ >= 2) {
    imageCounter = 0;
  }
  imageCrop.classList.toggle("animate");
  imageCrop.offsetWidth;
  imageEl.src = jimis[imageCounter];
  captionText.innerText = captions[imageCounter];
  imageCrop.classList.toggle("animate");
  indicators[imageCounter].classList.add("active-indicator");
  clearInterval(myTimer);
  myTimer = setInterval(slideSwitch, interval);
});

function slideSwitch() {
  indicators[imageCounter].classList.remove("active-indicator");
  if(imageCounter++ >= 2) {
    imageCounter = 0;
  }
  imageCrop.classList.toggle("animate");
  imageCrop.offsetWidth;
  imageEl.src = jimis[imageCounter];
  captionText.innerText = captions[imageCounter];
  imageCrop.classList.toggle("animate");
  indicators[imageCounter].classList.add("active-indicator");
}
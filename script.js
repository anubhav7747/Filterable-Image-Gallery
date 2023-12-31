// when button is clicked
const buttons = document.querySelectorAll(".btn");
const image = document.querySelectorAll(".image");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;

    image.forEach((item) => {
      if (filter === "all") {
        item.style.display = "block";
      } else {
        if (item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
});


// video play on hover
let video = document.getElementById("video");

video.addEventListener("mouseover", (e) => {
    video.play();
});

video.addEventListener("mouseout", (e) => {
    video.pause();
});
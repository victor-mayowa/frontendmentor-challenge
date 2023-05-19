const form = document.querySelector("form");
let circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
  circle.addEventListener("click", function () {
    circles.forEach((circle) => circle.classList.remove("active"));
    this.classList.add("active");
  });
});

// for (const circle of circles) {
//     console.log(circle)
//   circle.addEventListener("click", () => {
//     if (circle.className == "circle active") {
//       circle.classList.remove("active");
//     } else {
//       circle.classList.add("active");
//     }
//   });
// }

let rating = ""


form.addEventListener("submit", (e) => {
  e.preventDefault();
  for (const circle of circles) {
    if (circle.className == "circle active") {
      rating = circle.textContent;
    }
  }
  console.log(rating);
  window.location.assign("../Pages/Page2.html");
  localStorage.setItem("rating", rating)
});





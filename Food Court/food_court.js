const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".slider i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

// let isDragging = false, startX, startScrollLeft;

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? - firstCardWidth : firstCardWidth;
  })
})

// const dragStart = (e) => {
//   isDragging = true;
//   carousel.classList.add("dragging");
//   startX = e.pageX;
//   startScrollLeft = carousel.scrollLeft;
// }
// const dragging = (e) => {
//   if(!isDragging) return; // if isDragling is false return from here
//   // updates the scroll position of the carousel based on the cursor movement
//   carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// }
// const dragStop = () => {
//   isDragging = false;
//   carousel.classList.remove("dragging");
// }

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);

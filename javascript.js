window.onload = createDefaultDivGrid();

/* Creates 16x16 divs */
function createDefaultDivGrid() {
  // Creates 16 divs sharing same class name and unique iterable class name
  for (let i = 1; i <= 256; i++) {
    const gridContainer = document.querySelector(".gridContainer");
    const div = document.createElement("div");
    const createDiv = gridContainer.appendChild(div);
    let addDefaultClassToDiv = createDiv.classList.add("divSquare");
    let addClassToDiv = createDiv.classList.add(`div${i}`);
    gridContainer.addClassToDiv;
    gridContainer.addDefaultClassToDiv;
  }
  // Insert css rule to stylesheet
  const stylesheet = window.document.styleSheets[0];
  stylesheet.insertRule(
    `.divSquare {
      background-color: rgba(255, 255, 255, 0.8);}`,
    stylesheet.cssRules.length
  );
  changeDivColorOnHover();
  createNewGridFromUser();
}

/* Returns: random color RGB */
function randomColor() {
  let color = [];

  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
}

/* Change color of div on hover */
function changeDivColorOnHover() {
  const divSquare = document.querySelectorAll(".divSquare");

  divSquare.forEach(function (element) {
    element.addEventListener(`mouseover`, function () {
      element.style.background = randomColor();
    });
  });
}
/* Returns: Grid Size H & W from user prompt*/
function promptUserGridSize() {
  const button = document.querySelector(".newGridBtn");

  button.addEventListener("click", function () {
    let userGridSize = [];
    userGridSize[0] = +prompt("Enter height of grid");
    userGridSize[1] = +prompt("Enter width of grid");

    if (userGridSize[0] === 0 && userGridSize[1] === 0) {
      // Return nothing
    } else if (isNaN(userGridSize[0] || userGridSize[1])) {
      alert("Please enter numbers only");
      promptUserGridSize();
    } else {
      removeCurrentGrid();
      return userGridSize;
    }
  });
}
/* Reset grid to default color */
function removeCurrentGrid() {
  const divSquare = document.querySelectorAll(".divSquare");

  divSquare.forEach(function (element) {
    element.style.background = "";
  });
}
/* Create new grid from user prompt */
function createNewGrid() {}

/* Calls everything to create new grid from user */
function createNewGridFromUser() {
  promptUserGridSize();
  removeCurrentGrid();
  createNewGrid();
}

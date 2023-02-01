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
  promptUserGridSize(); // Add Event listener
  resetGridBtn(); // Add Event Listener
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

/* Returns: Grid Size user*/
function promptUserGridSize() {
  const button = document.querySelector(".newGridBtn");

  button.addEventListener("click", function () {
    let userGridSize = 0;
    userGridSize = +prompt("Enter size of grid 1-100");

    if (userGridSize === 0) {
      // Return nothing
    } else if (isNaN(userGridSize)) {
      alert("Please enter numbers only");
    } else if (userGridSize < 0 || userGridSize > 100) {
      alert("Please enter in number between 1 and 100 only");
    } else {
      return createNewGridFromUser(userGridSize);
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

/* Resets Grid from reset button */
function resetGridBtn() {
  const button = document.querySelector(".btnReset");

  button.addEventListener("click", removeCurrentGrid);
}

/* Returns: New grid layout
 * args: array [height, width] */
function createNewGrid(userGridSize) {
  removeCurrentDivs();

  let totalGridDivs = userGridSize ** 2;

  // Creates 16 divs sharing same class name and unique iterable class name
  for (let i = 1; i <= totalGridDivs; i++) {
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

  let gridTemplateColumns = document.querySelector(".gridContainer");

  gridTemplateColumns.style.gridTemplateColumns = `repeat(${userGridSize}, [col-start] 1fr)`;

  changeDivColorOnHover();
}

/* Removes all divSquare divs */
function removeCurrentDivs() {
  const currentDiv = document.querySelectorAll(".divSquare");

  currentDiv.forEach((element) => {
    element.remove();
  });
}
/* Calls everything to create new grid from user */
function createNewGridFromUser(userGridSize) {
  removeCurrentGrid();
  createNewGrid(userGridSize);
}

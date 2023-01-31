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
}

/* Change div color to black on hover */
function changeDivColorOnHover() {
  const divSquare = document.querySelectorAll(".divSquare");

  divSquare.forEach(function (element) {
    element.addEventListener(`mouseover`, function () {
      element.style.background = "black";
    });
  });
}

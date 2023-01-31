window.onload = createDefaultDivGrid();

/* Creates 16x16 divs */
function createDefaultDivGrid() {
  // Creates 16 divs sharing same class name and unique iterable class name
  for (let i = 1; i <= 16; i++) {
    const container = document.querySelector(".container");
    const div = document.createElement("div");
    const createDiv = container.appendChild(div);
    let addDefaultClassToDiv = createDiv.classList.add(`divSquare`);
    let addClassToDiv = createDiv.classList.add(`div${i}`);
    container.addClassToDiv;
    container.addDefaultClassToDiv;
  }
  // Insert css rule to stylesheet
  const stylesheet = window.document.styleSheets[0];
  stylesheet.insertRule(
    `.divSquare { 
        border: solid black 3px; 
        width: 20vw;
        flex-grow: 1;}`,
    stylesheet.cssRules.length
  );
}

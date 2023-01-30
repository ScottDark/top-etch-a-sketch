window.onload = createDefaultDivGrid();

/* Creates 16x16 divs */
function createDefaultDivGrid() {
  //   let numberOfChildDivs = container.children.length + 1;

  for (let i = 1; i <= 16; i++) {
    const container = document.querySelector(".container");
    const div = document.createElement("div");
    const createDiv = container.appendChild(div);
    let addDefaultClassToDiv = createDiv.classList.add(`divSquare`);
    let addClassToDiv = createDiv.classList.add(`div${i}`);
    container.addClassToDiv;
    container.addDefaultClassToDiv;
  }
}

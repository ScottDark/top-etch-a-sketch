/* Returns: Divs */
function createDefaultDivGrid() {
  const container = document.querySelector(".container");
  const div = document.createElement("div");

  container.appendChild(div);
}

window.onload = createDefaultDivGrid();

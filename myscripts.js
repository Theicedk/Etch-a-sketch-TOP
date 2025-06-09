function createGrid(){
    const gridPart = document.createElement('div');
    gridPart.style.backgroundColor = "black";
    gridPart.style.height = "100px";
    gridPart.style.width = "100px";
    gridPart.style.border = "solid blue 6px";
    return gridPart;
}


for (let i = 0; i < 5; i++) {
  const newBox = createGrid();
  document.body.appendChild(newBox);
}
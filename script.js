let isMouseDown = false;
let currentColor = document.getElementById("colorPicker").value;

const container = document.getElementById("container");
const generateBtn = document.getElementById("generate");
const colorPicker = document.getElementById("colorPicker");


colorPicker.addEventListener("input", () => {
    currentColor = colorPicker.value;
});

document.body.addEventListener("mousedown", () => {
    isMouseDown = true;
});
document.body.addEventListener("mouseup", () => {
    isMouseDown = false;
});

generateBtn.addEventListener("click", () => {
    var n = prompt("Define the new number of squares for the grid, between 16 and 100:");
    while(n>100 || n<=16){
        n = prompt("Value should be between 16 and 100:");
    }
    generateGrid(n);
});

function generateGrid(n) {
    container.innerHTML = ""; // Limpiar grid anterior
    const blockSize = 550 / n;

    for (let i = 0; i < n * n; i++) {
        const block = document.createElement("div");
        block.className = "block";

        // TODO 1: asignar tamaño cuadrado calculado
        block.style.width = `${blockSize}px`;
        block.style.height = `${blockSize}px`;

        // TODO 2: pintar bloque al hacer clic
        block.addEventListener("mousedown", () => {
            block.style.backgroundColor = currentColor;
        });

        // TODO 3: permitir pintar al arrastrar
        block.addEventListener("mouseover", () => {
            if (isMouseDown) {
                block.style.backgroundColor = currentColor;
            }
        });

        container.appendChild(block);
    }
}
generateGrid(16);
console.log("Developed by Mirko Pino Sandoval")

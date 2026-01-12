const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = container.offsetWidth / 16 + "px";
    square.style.height = container.offsetHeight / 16 + "px";
    container.appendChild(square);
}

let squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "grey";
    });
});

const newGrid = document.querySelector("#new");
newGrid.addEventListener("click", () => {
    const input = parseInt(prompt("How many squares per side?", "16"));

    if (isNaN(input) || input > 100 || input < 2) {
        alert("Please enter a number from 2 to 100!");
    } else {
        while (container.firstChild) {
            container.firstChild.remove();
        }

        for (let i = 0; i < input * input; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = container.offsetWidth / input + "px";
            square.style.height = container.offsetHeight / input + "px";
            container.appendChild(square);
        }

        squares = document.querySelectorAll(".square");
            squares.forEach((square) => {
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "grey";
            });
        });
    }
})

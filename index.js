const container = document.querySelector("#container");

function newGrid(sideLength) {
    container.innerHTML = "";

    for (let i = 0; i < sideLength * sideLength; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = container.offsetWidth / sideLength + "px";
        square.style.height = container.offsetHeight / sideLength + "px";
        container.appendChild(square);
    }

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        })
    });
}

const newButton = document.querySelector("#new");
newButton.addEventListener("click", () => {
    const input = parseInt(prompt("How many squares per side?", "16"));

    if (isNaN(input) || input > 100 || input < 2) {
        alert("Please enter a number from 2 to 100!");
    } else {
        newGrid(input);
    }
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    })
})

newGrid(16);

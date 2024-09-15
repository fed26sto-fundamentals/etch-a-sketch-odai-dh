const grid = document.querySelector(".grid")

let gridWidth = 600
grid.style.width = `${gridWidth}px`



function generateGrid(x){
    grid.innerHTML = "";

    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= x; j++) {
            const box = document.createElement("div")
            box.classList.add("box")

            let boxSize = gridWidth / x

            box.style.width = `${boxSize}px`
            box.style.height = `${boxSize}px`

            box.addEventListener("mouseover", () => {
                let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                box.style.backgroundColor = `#${randomColor}`
            })

            grid.appendChild(box)
        }
    }
}

document.querySelector(".btnNewGrid").addEventListener("click", () => {
    const size = parseInt(prompt("Number of squares per side for the new grid: "));
    if (!isNaN(size) && size > 0 && size <= 100) {
        generateGrid(size);
    } else {
        alert("Please use a valid number.");
    }
})

document.querySelector(".btnClearGrid").addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.backgroundColor = "";
    });
});

generateGrid(16)
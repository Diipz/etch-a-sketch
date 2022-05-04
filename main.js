window.onload = () => generate(75)

let mouseDown = false

//draw properties function
function draw() {
    let row = document.querySelectorAll(".row");

    for (let i = 0; i < row.length; i++) {
        row[i].setAttribute("draggable", "false");
        row[i].addEventListener('mousedown', (e) => { mouseDown = true });
        row[i].addEventListener('mouseup', (e) => { mouseDown = false });;
        row[i].addEventListener('mousemove', colorChange);
    };
}
//color change function
function colorChange(e) {
    if (mouseDown) {
        e.target.style.background = "grey";
    }
}

//clear function
function clear() {
    let row = document.querySelectorAll(".row");
    let clear = document.querySelector("#clear");

    clear.addEventListener("click", (e) => {
        row.forEach((item) => {
            item.style.background = "";
        })
    });
}

//generate new grid
let remake = document.querySelector("#remake");

remake.addEventListener("click", function make_grid(e) {

    let value = window.prompt("Enter a value between 1-100: ");

    if (value < 1 || value > 100 || value == NaN || value == null) {
        make_grid(e)
    }
    else {
        generate(value);
    }
});

function generate(grid_size) {
    let container = document.querySelector(".container");
    container.replaceChildren();

    for (let i = 0; i < grid_size; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        column.setAttribute("draggable", "false");
        container.appendChild(column);

        for (let j = 0; j < grid_size; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            column.appendChild(row);
        }
    }
    draw();
    clear();
};






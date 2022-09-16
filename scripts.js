// Adds a specified number of divs with the class of box inside 
// the container class.
function createBox(num) {
    for (i = 0; i < num; i++) {
        const box = document.createElement('div');
        box.className = "box";

        document.querySelector(".container").appendChild(box);
    }
}

// modifies the .container class by changing the grid-template-rows
// and columns by changing the amount of repeats
function numOfRowsColumns(num) {
    const container = document.querySelector(".container");
    container.style.gridTemplateRows = `repeat(${num}, auto)`;
    container.style.gridTemplateColumns = `repeat(${num}, auto)`;
}

// This function exists to create a default set up,
// so the content is not blank
createBox(16 * 16);

const button = document.querySelectorAll("button");
button.forEach(button => {
    button.addEventListener('click', function (e) {
        document.querySelector(".container").innerHTML = '';
        const num = e.target.id * e.target.id;
        createBox(num);
        numOfRowsColumns(e.target.id);
    })
});

const container = document.querySelector(".container");
container.addEventListener('pointerover', function (e) {
    e.target.style.backgroundColor = 'red';
});

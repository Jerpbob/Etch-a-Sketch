// Adds a specified number of divs with the class of box inside 
// the container class.
function createBox(num) {
    for (i = 0; i < num; i++) {
        const box = document.createElement('div');
        box.className = "box";

        document.querySelector(".container").appendChild(box);
    }
}

// This function exists to create a default set up,
// so the content is not blank
createBox(16 * 16);

const button = document.querySelector(".buttons");
button.addEventListener('click', function (e) {
    document.querySelector(".container").innerHTML = ''
    const num = e.target.id * e.target.id
    createBox(num);
});




function createBox(num) {
    for (i = 0; i < num; i++) {
        const box = document.createElement('div');
        box.className = "box";

        document.querySelector(".container").appendChild(box);
    }
}

const button = document.querySelector("buttons");
button.addEventListener('click', function (e) {
    console.log(e.target.id);
});

createBox((16 * 16));

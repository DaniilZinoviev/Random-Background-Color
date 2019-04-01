let button = document.getElementsByClassName("my-button")[0];
let p = document.getElementsByClassName("current-color")[0];

button.addEventListener("click", function() {
    // Create random color
    let randomColor = createRandomColor();

    // Assign random color to body`s background color
    document.body.style.backgroundColor = randomColor;

    // Write this color-code to the paragraph
    p.textContent = randomColor;
})

function createRandomColor() {
    // Rundom numbers
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));

    // Converting each random to string in hex notation
    let red = r.toString(16).length <= 1 ? "0" + r.toString(16) : r.toString(16);
    let green = g.toString(16).length <= 1 ? "0" + g.toString(16) : g.toString(16);
    let blue = b.toString(16).length <= 1 ? "0" + b.toString(16) : b.toString(16);

    let randomColor = "#" + red + green + blue;

    return randomColor;
}

let initialColor = createRandomColor();
document.body.style.backgroundColor = initialColor;
p.textContent = initialColor;
let button = document.getElementsByClassName("myButton")[0];

button.addEventListener("click", function() {
    // Create random color
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    let red = r.toString(16).length <= 1 ? "0" + r.toString(16) : r.toString(16);
    let green = g.toString(16).length <= 1 ? "0" + g.toString(16) : g.toString(16);
    let blue = b.toString(16).length <= 1 ? "0" + b.toString(16) : b.toString(16);
    let randomColor = "#" + red + green + blue;
    console.log(randomColor);

    // Assign this to body`s background color
    document.body.style.backgroundColor = randomColor;

})
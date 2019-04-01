let button = document.getElementsByClassName("myButton")[0];

button.addEventListener("click", function() {
    // Create random color
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    let randomColor = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    console.log(randomColor);

    // Assign this to body`s background color
    document.body.style.backgroundColor = randomColor;

})
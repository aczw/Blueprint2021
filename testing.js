function askForColor() {
    let promptColor1 = prompt("enter first color")
    let promptColor2 = prompt("enter second color")
    changeBackgroundColor(promptColor1, promptColor2)
}

let time = new Date();

function changeBackgroundColor(color1, color2) {
    document.body.style.backgroundImage = `linear-gradient(180deg, ${color1}, ${color2})`
}

// background-image: linear-gradient(180deg, #e66465, #9198e5);

// background-image: linear-gradient(180deg, #16296b, #021033);
// background-image: linear-gradient(180deg, #021033, #113245);
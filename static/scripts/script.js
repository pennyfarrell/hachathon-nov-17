// get all keys
const keys = document.getElementById("set").children;

// Add sound to each key
for (let i=0; i<keys.length; i++) {
    console.log(keys[i]);
    keys[i].addEventListener('click', () => addSound())
}

function addSound() {
    let source = "media/sounds/A.mp3"
    console.log(source)  // for testing
    new Audio(source).play()
}

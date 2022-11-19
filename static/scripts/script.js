// get all keys
const keys = document.getElementById("set").children;

// Add sound to each key
for (let i=0; i<keys.length; i++) {
    // console.log(keys[i]);  // for testing
    let keyId = keys[i].getAttribute("id");
    console.log(keyId);
    keys[i].addEventListener('click', () => addSound(keyId))
}

function addSound(s) {
    let source = soundSource(s);
    console.log(source)  // for testing
    new Audio(source).play()
}

function soundSource(src) {
    let path = "media/sounds/";
    switch (src){
        case "a":
            return path += "a.mp3";
            break;
        case "as":
            return path += "as.mp3";
            break;
        case "b":
            return path += "b.mp3";
            break;
        case "c":
            return path += "c.mp3";
            break;
        case "cs":
            return path += "cs.mp3";
            break;
        case "d":
            return path += "d.mp3";
            break;
        case "ds":
            return path += "ds.mp3";
            break;
        case "e":
            return path += "e.mp3";
            break;
        case "f":
            return path += "f.mp3";
            break;
        case "fs":
            return path += "fs.mp3";
            break;
        case "g":
            return path += "g.mp3";
            break;
        case "gs":
            return path += "gs.mp3";
            break;
    }
}

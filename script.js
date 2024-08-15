let isMouseDown = false;

const container = document.querySelector("#container");
container.addEventListener("mousedown", handleMouseDown);
container.addEventListener("mouseup", handleMouseUp);

// play again button
const playAgainButton = document.querySelector("#play-again");
playAgainButton.addEventListener("click", handlePlayAgain);

const width = 90;
const height = 50;
let flexPercentage = (1 / width) * 100;
let count = 0;

for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
        let child = document.createElement("div");
        child.id = count;
        container.appendChild(child);
        count++;
    }
}

const divs = document.querySelectorAll("#container > div");
divs.forEach(div => {
    div.style.boxSizing = "border-box";
    div.style.flex = `0 0 ${flexPercentage}%`;
    
    div.addEventListener("mouseover", handleMouseOver);
})

// handle hover function
function handleMouseOver(event) {
    if (isMouseDown) {
        event.target.style.backgroundColor = "black";
    }
}

// handle mouse down
function handleMouseDown(event) {
    isMouseDown = true;
}

// handle mouse up
function handleMouseUp(event) {
    isMouseDown = false;
}

// handle playAgain
function handlePlayAgain(event) {
    location.reload();
}




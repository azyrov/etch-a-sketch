let div = document.querySelector("#container");

const fragment = document.createDocumentFragment();
let num = +prompt("How many squares per side do you want?", 0)
// const num = 16;
const numSquared = num ** 2;

for (let i = 0; i < numSquared; ++i) {
    const newDiv = document.createElement("div");

    fragment.append(newDiv);
}
div.append(fragment);

const newDiv = div.childNodes; 
newDiv.forEach((div) => {
    div.classList.add("box")
})

function setFlexItemsPerLine(itemsPerLine){
    const percentage = (100 / itemsPerLine).toFixed(4);
    console.log(percentage)

    newDiv.forEach((div) => {
        div.style.flexBasis = `${percentage}%`;
        // the boxes will grow if they need to 
        div.style.flexGrow = "0";
        // the boxes will shrink if they need to
        div.style.flexShrink = "0"


    })
}
setFlexItemsPerLine(num)

function normalBGColor(btn) {
    btn.style.backgroundColor = "red";
}

function randomiseBGColor(div) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

newDiv.forEach((btn) => {
    btn.addEventListener("mouseenter", function (e) {j
        randomiseBGColor(btn)
    })

    btn.addEventListener("mouseleave", function (e) {
        normalBGColor(btn);
    })
})
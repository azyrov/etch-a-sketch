let div = document.querySelector("#container");


// store value used for both width and height
// square that value to get the total number of boxes 
// use document fragment to create a number of boxesbased on the squared num
// append created divs to fragment
// append document fragment to live dom

const fragment = document.createDocumentFragment();

const num = 16;
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
        div.style.flexGrow = "0";
        div.style.flexShrink = "0"
    })
}
setFlexItemsPerLine(num)

newDiv.forEach((btn) => {
    btn.addEventListener("mouseenter", function (e) {
        this.classList.add("hover");
    })

    btn.addEventListener("mouseleave", function (e) {
        this.classList.remove("hover");
    })
})
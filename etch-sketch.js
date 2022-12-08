//Create grid
const masterContainer = document.getElementsByClassName("master-container")[0];

let count = 0;
while (count < 16*16){
    let grid = document.createElement("div");
    masterContainer.appendChild(grid);
    count ++;
}

//Change color of squares
const nestedDivs = document.querySelectorAll(".master-container div");

nestedDivs.forEach((div) => {
    div.addEventListener("mouseover", ()=>{div.style.backgroundColor = "black"})
});

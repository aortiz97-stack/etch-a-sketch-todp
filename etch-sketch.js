const masterContainer = document.getElementsByClassName("master-container")[0];

let count = 0;
while (count < 16*16){
    let grid = document.createElement("div");
    grid.textContent = "--Filler Words--"
    masterContainer.appendChild(grid);
    count ++;
}

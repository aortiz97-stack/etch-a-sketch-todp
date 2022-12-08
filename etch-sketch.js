//Create grid
const masterContainer = document.getElementsByClassName("master-container")[0];

let count = 0;
while (count < 16*16){
    let grid = document.createElement("div");
    masterContainer.appendChild(grid);
    count ++;
}

const nestedDivs = document.querySelectorAll(".master-container div");
nestedDivs.forEach((div) => {
    div.addEventListener("mouseover", ()=>{div.style.backgroundColor = "black"})
});


//Create event for button pressing
const button = document.querySelector("button");

function getDimension(e){
    if (e!==undefined){
        let answer = prompt("Please input number n to get a new nxn grid. Number must be less than 100.")

        if (typeof parseInt(answer) !== "number"){
            throw "Invalid input. You must provide a number."
        }
        else if (typeof parseInt(answer) > 100){
            throw "Invalid input. Input must be less than or equal to 100."
        }
        else{
            return parseInt(answer);
        }
    }
} 

function createNewGrid(e){
    if (e!==undefined){
        const gridsToDelete = document.querySelectorAll(".master-container div");
        const dimension = getDimension(e);

        gridsToDelete.forEach((grid) => {
            masterContainer.removeChild(grid);
        });

        let count = 0;
        while (count < dimension*dimension){
            let grid = document.createElement("div");
            masterContainer.appendChild(grid);
            count ++;
        }

        //Change color of squares
        const nestedDivs = document.querySelectorAll(".master-container div");

        nestedDivs.forEach((div) => {
            div.addEventListener("mouseover", ()=>{div.style.backgroundColor = "black"})
        });
    }
}

button.addEventListener("click", createNewGrid)


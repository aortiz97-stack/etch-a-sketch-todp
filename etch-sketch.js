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
        console.log(parseInt(answer));
        if (typeof parseInt(answer) !== "number" || isNaN(answer)){
            console.log("enterred")
            throw "Invalid input. You must provide a number."
        }
        else if (parseInt(answer) > 100){
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
        //Set padding of grid squares
        let gridPadding = getPadding(dimension).toString() +"px";
        const nestedDivs = document.querySelectorAll(".master-container div");
        nestedDivs.forEach((div)=>{div.style.padding = gridPadding; console.log(div.style.padding)});


        //Change color of squares

        nestedDivs.forEach((div) => {
            div.addEventListener("mouseover", ()=>{div.style.backgroundColor = "black"})
        });
    }
}

button.addEventListener("click", createNewGrid)

//Calculate padding
function getPadding(n){
    let deviceWidth = Math.max(document.documentElement.clientWidth||0, window.innerWidth||0);
    let sidePadding = 0.6 * deviceWidth;
    let borderWidth = n;
    let availableWidth = deviceWidth - sidePadding - borderWidth;
    console.log(`deviceWidth: ${deviceWidth}`);
    console.log(`sidePadding: ${sidePadding}`);
    console.log(`availableWidth: ${availableWidth}`);
    console.log(`______`);

    let deviceHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    let buttonDivHeight = document.querySelector("button").clientHeight;
    let bottomPadding = 0.3 * deviceWidth;
    let availableHeight = deviceHeight - buttonDivHeight - bottomPadding- borderWidth

    console.log(`deviceHEIGHT: ${deviceHeight}`);
    console.log(`buttonDivHEIGHT: ${buttonDivHeight}`);
    console.log(`bottomPadding: ${bottomPadding}`);
    console.log(`availableHeight: ${availableHeight}`);
    console.log(`______`);

    const deviceDimension = Math.max(availableHeight, availableWidth);
    console.log(`deviceDimension: ${deviceDimension}`);
   
    return deviceDimension/(n*2);
}


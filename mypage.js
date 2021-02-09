var gridSize = 256;
const gridBoxClass = document.getElementsByClassName("gridbox");
function createGridSize(gridSize) {
    for (let i = 1; i <= gridSize; i++) {
        const createGrids = document.createElement('div');
        createGrids.className = "gridbox";
        // createGrids.style.flex = "0 1 auto";
        // createGrids.style.border = "0.5px dotted";


        document.getElementById('theGrid').appendChild(createGrids);
    }
}
createGridSize(gridSize);
 
function addListenerGrid() {
    for (let i = 0; i <= gridBoxClass.length; i++) {
        gridBoxClass[i].addEventListener("mouseenter", function () { gridBoxClass[i].style.background = "yellow"});
    }
}
addListenerGrid();
function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}


function resizeSketch() {
    let thegridID = document.getElementById("theGrid");
    let newNum = document.getElementById("boxSizes").value;
    if (newNum <= 1) {
        console.log('Enter An Appropriate Number Larger than 0.')
        return false;
    }
    else {
        thegridID.style.gridTemplateColumns = 'repeat(' + newNum + ', 1fr )';
        thegridID.style.gridTemplateRows =  'repeat(' + newNum + ', 1fr )';//why does these two lines skip in the debugger as not read? due to columns need to be set as var()?
        
        var gridSize = newNum * newNum;
        resetGridSize(gridSize);
        addListenerGrid();

    }
}

function resetGridSize(number) {
    //need to remove each of the grid items otherwise this won't work. 
    while(gridBoxClass.length > 0) {
        gridBoxClass[0].parentNode.removeChild(gridBoxClass[0]);
    }
    for (let i = 1; i <= number; i++) {
        const createGrids = document.createElement('div');
        createGrids.className = "gridbox";
        // createGrids.style.flex = "0 1 auto";
        // createGrids.style.border = "0.5px dotted";
        document.getElementById('theGrid').appendChild(createGrids);
    }
}


function clearButton() {
    for (let n = 0; n <= gridBoxClass.length; n++) {
        gridBoxClass[n].style.backgroundColor = 'rgb(' + 176 + ', ' + 198 + ', ' + 247 + ')';
    }
}


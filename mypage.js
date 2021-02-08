

for (let i = 1; i <= 256; i++) {
    const createGrids = document.createElement('div');
    createGrids.className = "gridbox";
    // createGrids.style.flex = "0 1 auto";
    // createGrids.style.border = "0.5px dotted";

     
    document.getElementById('theGrid').appendChild(createGrids);
}

const gridBoxClass = document.getElementsByClassName("gridbox");


for (let i = 1; i <= 256; i++) {
    gridBoxClass[i].addEventListener("mouseenter", function(){gridBoxClass[i].style.background = "yellow"});
}
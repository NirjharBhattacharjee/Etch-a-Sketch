const container = document.querySelector(".container");
const colorSelector = document.querySelector('#color-selector');
const resetButton = document.querySelector('.btn');

let newColor = colorSelector.value;
    
let selectColor = colorSelector.addEventListener("input", (e)=>{
        newColor = e.target.value;
    });

let resetBtn = resetButton.addEventListener("click", () =>{
        
        const cells = document.querySelectorAll('.cell');
        cells.forEach( cell => {
        cell.style.backgroundColor ="white";
    });
    });

function createGrid(height =16, width =16) {
    container.innerHTML = '';
    
    for(let i = 0; i < height; i++){

        for (let j = 0; j < width ; j++) {
            const cell = document.createElement("div");

            cell.classList="cell";

            let cellHeight = cell.style.height =`${512/height}px`;
            let cellWidth = cell.style.width = `${512/width}px`;
            console.log(`Cell Height : ${cellHeight}`);
            console.log(`Cell Width : ${cellWidth}`);
            
            cell.addEventListener("mouseenter", (e)=>{
                e.target.style.backgroundColor = newColor;
            });

            container.appendChild(cell);
        }

};   
};

function updateGrid(){
    const height = document.querySelector('#height');
    const width = document.querySelector('#width');
    const heightOutput = document.querySelector('#height-value');
    const widthOutput = document.querySelector('#width-value');

    let currentHeight = 16;
    let currentWidth = 16;
    
    height.addEventListener("input", e => {
        heightOutput.textContent = e.target.value;
        currentHeight = e.target.value;
        createGrid(currentHeight,currentWidth);
    });

    width.addEventListener("input",e =>{
        widthOutput.textContent = e.target.value;
        currentWidth = e.target.value;
        createGrid(currentHeight,currentWidth);  
    })
    console.log(`this is current height ${currentHeight}`);
    console.log(`this is current Width ${currentWidth}`);
    
}
   


createGrid();
updateGrid();



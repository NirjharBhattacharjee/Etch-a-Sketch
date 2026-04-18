const container = document.querySelector(".container");

function createGrid(height =16, width =16) {
 
    for(let i = 0; i < height; i++){
        for (let j = 0; j < width ; j++) {
            const cell = document.createElement("div");
            cell.classList="cell";
            let cellHeight = cell.style.height =`${512/height}px`;
            let cellWidth = cell.style.width = `${512/width}px`;
            console.log(`Cell Height : ${cellHeight}`);
            console.log(`Cell Width : ${cellWidth}`);
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
        currentHeight = e.target.value;
        heightOutput.textContent = e.target.value;
        // console.log(`this is current height ${currentHeight}`);
    });

    width.addEventListener("input",e =>{
        currentWidth = e.target.value;
        widthOutput.textContent = e.target.value;
        // console.log(`this is current Width ${currentWidth}`);
    })
    console.log(`this is current height ${currentHeight}`);
    console.log(`this is current Width ${currentWidth}`);
}
// const height = document.querySelector('#height');
// const heightOutput = document.querySelector('#height-value');

// let currentHeight = 16;

// let newHeight =  height.addEventListener("input", e => {
//         currentHeight = e.target.value;
//         heightOutput.textContent = e.target.value;
//         console.log(`this is current height ${currentHeight}`);
//         });
//         console.log(`this is current height ${newHeight}`);

updateGrid();
createGrid();


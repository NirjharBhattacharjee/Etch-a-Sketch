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
createGrid();


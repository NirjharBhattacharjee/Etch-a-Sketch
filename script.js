const container = document.querySelector(".container");

function createGrid(cells) {
    if(cells > 1){
        for(let i = 0; i < cells; i++){
            const column = document.createElement("div");
            for (let j = 0; j <= cells ; j++) {
                const row = document.createElement("div");
                row.classList="row-cell";
                column.appendChild(row);
            }
            column.classList ="column-cell";
            container.appendChild(column);
    }
   
} 
}

createGrid(16);

const container = document.getElementById('container');

//This function makes a grid by taking in how many rows and how many columns.
function makeGrid(row, column){
    container.style.setProperty('--grid-row', row);
    container.style.setProperty('--grid-column', column);
    for (let i = 0; i < (row * column); i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item";
    }
}

makeGrid(16, 16);
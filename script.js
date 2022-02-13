const container = document.getElementById('container');
const reload = document.getElementById('reload');

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

//gets all the divs called grid item and puts them into a node list then cycle through each node to add an eventlistener to check if the mouse is hovering over the div
//and if it is the add a the class 'blue' which changes the color of the div.
const cell = document.querySelectorAll('.grid-item')
cell.forEach(function colorChange(item){
    item.addEventListener('mouseover', () => {
        item.classList.add('blue');
    })
})


//pressing this button will cause it to get a reference to all the grid items and remove the class 'blue' from it
reload.addEventListener('click', ()=> {
    document.querySelectorAll('.grid-item').forEach(function (item) {
        item.classList.remove('blue');
    })
})

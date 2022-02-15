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
let mouseIsDown = false;

//gets all the divs called grid item and puts them into a node list then cycle through each node to add an eventlistener to check if the mouse is hovering over the div
//and if it is the add a the class 'blue' which changes the color of the div.
function colorChange(){
    // const cell = document.querySelectorAll('.grid-item')
    // cell.forEach(function color(item){
    //     item.addEventListener('mouseover', () => {
    //         item.classList.add('color');
    //     })
    // })
    
    const container = document.getElementById("container");
    container.addEventListener("mousemove", (event) => {
        if (mouseIsDown && event.target.className == "grid-item") {
            event.target.classList.add('color');
        }
        
    })
    container.addEventListener("mousedown", (event) => {
        mouseIsDown = true;
    })
    container.addEventListener("mouseup", (event) => {
        mouseIsDown = false;
    })
}

let num = 16;
makeGrid(num, num);
colorChange();

//pressing this button will cause it to get a reference to all the grid items and remove the class 'blue' from
reload.addEventListener('click', ()=> {
    document.querySelectorAll('.grid-item').forEach(function (item) {
        item.classList.remove('color');
        item.parentNode.removeChild(item);
    })
    let size = prompt("How big should the grid be?");
    if (size > 100){
        console.log("error");
        } else{
        makeGrid(size, size);
        colorChange();
    }
})




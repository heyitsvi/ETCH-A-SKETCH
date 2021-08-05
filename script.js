
function createDivs(){
    let div = document.createElement('div');
    return div;
}

function appendDivs(parent,children){
    children.forEach(function(children){
        parent.appendChild(children);
    });
}
const container = document.querySelector("#container");

function createSquares(size){
    for(let i = 1; i<= size*size; i++){
        div_list.push(createDivs());
    }

}

let div_list=[];

function widthCalc(size_grid,total_area){
    let width = (total_area/size_grid);
    return (width)+'px';
}
// console.log(widthCalc(size_grid,500));

function createGrid(size_grid){
    createSquares(size_grid);
    appendDivs(container,div_list);
    container.style["grid-template-rows"] = `repeat(${size_grid},${widthCalc(size_grid,600)})`;
    container.style["grid-template-columns"] = `repeat(${size_grid},${widthCalc(size_grid,600)})`;
    // container.style["grid-auto-rows"] = "minmax(100px, auto);";
    // container.style["grid-auto-columns"] = "minmax(100px, auto);";
}

createGrid(size_grid);

// let square = document.getElementById("container");
let squares = document.querySelectorAll("#container > div");

squares.forEach(item => {
    item.addEventListener('mouseover', event =>{
        item.style.backgroundColor = `${randomColor()}`;
        // setTimeout(function(squares){item.style.backgroundColor = "";},1.0*1000);
    })
})

function randomColor(){
    let red = Math.floor(Math.random()*255);   
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return `rgb(${red},${green},${blue})`;    
}

let button = document.querySelector("#clear-button");

button.addEventListener('click', event =>{
        squares.forEach(item => {
                item.style.backgroundColor = "";
        })
    })



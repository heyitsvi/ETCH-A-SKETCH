let size_grid =50;
let div_list=[];

// Creating the grid

const container = document.querySelector("#container");

function createDivs(){
    let div = document.createElement('div');
    return div;
}

function appendDivs(parent,children){
    children.forEach(function(children){
        parent.appendChild(children);
    });
}

function createSquares(size){
    for(let i = 1; i<= size*size; i++){
        div_list.push(createDivs());
    }

}

function widthCalc(size_grid,total_area){
    let width = (total_area/size_grid);
    return (width)+'px';
}

function createGrid(size_grid){
    createSquares(size_grid);
    appendDivs(container,div_list);
    container.style["grid-template-rows"] = `repeat(${size_grid},${widthCalc(size_grid,600)})`;
    container.style["grid-template-columns"] = `repeat(${size_grid},${widthCalc(size_grid,600)})`;
}

createGrid(size_grid);

function randomColor(){
    let red = Math.floor(Math.random()*255);   
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return `rgb(${red},${green},${blue})`;    
}

function returnColor(){
    rainbow.addEventListener("click", event => {
        return randomColor();
    })
    black_white.addEventListener("click",event => {
        return black_white();
    })
}

function rainbowMode(){
    squares.forEach(item => {
        item.addEventListener('mouseover', event =>{
                item.style.backgroundColor = `${randomColor()}`;
        })
    })
}

function black_whiteMode(){
    squares.forEach(item => {
        item.addEventListener('mouseover', event =>{
                item.style.backgroundColor = "black";
        })
    })
}
// Event Listeners

let squares = document.querySelectorAll("#container > div");
let rainbow = document.querySelector("#rainbow-button");
let black_white = document.querySelector("#black-white");

black_whiteMode();

rainbow.addEventListener("click", evemt => {
    rainbowMode();
})

black_white.addEventListener("click", event =>{
    black_whiteMode();
})



let button = document.querySelector("#clear-button");

button.addEventListener('click', event =>{
        squares.forEach(item => {
                item.style.backgroundColor = "";
        })
    })

let slider_input = document.querySelector("#slider-input").addEventListener("input", event => {
    size_grid = event.target.value;
    createGrid(size_grid);
});






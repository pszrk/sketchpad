const container = document.querySelector('.gridContainer');

let totalsize = 960;
let size = 16;
let pixelsize = totalsize / size;

let defaultColor = 'white';
let mouseOverColor = 'black';
let paintColor = 'cyan';

//container.style.gridTemplateColumns = `repeat(${size}, ${pixelsize}px)`;
//container.style.gridTemplateRows = `repeat(${size}, ${pixelsize}px)`;

function createGrid(){
    container.style.gridTemplateColumns = `repeat(${size}, ${pixelsize}px)`;
    container.style.gridTemplateRows = `repeat(${size}, ${pixelsize}px)`;

    for(let i = 0 ; i < size * size; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('pixel');
        newDiv.addEventListener('mouseenter', function(e){
            e.target.style.background = randomRGB();
        });
        //newDiv.addEventListener('mouseleave', function(e){
            //e.target.style.background = randomRGB();
        //});
        container.appendChild(newDiv);
    }
}
createGrid();

const button = document.createElement('button');
button.setAttribute('style', 
'background-color:#4CAF50; border:none; color: white; font-size: 20px; font-weight: bold; padding: 5px 30px;');
button.textContent = 'Reset and Resize';

button.addEventListener('click', () =>{
    let newSize = parseInt(prompt('Enter a new size for the grid, between 16 and 100:', 16));
    if(newSize != null && Number.isInteger(newSize) && newSize >=16 && newSize <= 100){
        size = newSize;
        pixelsize = totalsize / size;
        const pixels = document.querySelectorAll('.pixel');
        pixels.forEach((pixel) =>{
            //pixel.style.background = defaultColor;
            container.removeChild(pixel);
        });
        createGrid();
    }
});
const buttons = document.querySelector('.buttonsContainer');
buttons.appendChild(button);


function randomRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
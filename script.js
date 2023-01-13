const container = document.querySelector('.gridContainer');

let totalsize = 960;
let size = 16;
let pixelsize = totalsize / size;

let defaultColor = 'white';
let mouseOverColor = 'black';
let paintColor = 'cyan';

function createGrid(){
    container.style.gridTemplateColumns = `repeat(${size}, ${pixelsize}px)`;
    container.style.gridTemplateRows = `repeat(${size}, ${pixelsize}px)`;

    for(let i = 0 ; i < size * size; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('pixel');
        newDiv.addEventListener('mouseenter', function(e){
            e.target.style.background = randomRGB();
        });
        container.appendChild(newDiv);
    }
}
createGrid();

const button = document.createElement('button');
button.setAttribute('style', 
'background-color:#378805; border:none; color: white; font-size: 20px; font-weight: bold; padding: 5px 30px;');
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
button.addEventListener('mouseenter', () =>{
    button.style.backgroundColor = "#4CAF51";
});
button.addEventListener('mouseleave', () =>{
    button.style.backgroundColor = "#378805";
});
const buttons = document.querySelector('.buttonsContainer');
buttons.appendChild(button);

function randomRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

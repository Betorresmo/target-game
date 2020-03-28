import {canvas, difficulty} from './main.js';
import {targetPosition} from './targetPosition.js';
export default mouseClick;

function updateScore(points){
    const score = document.querySelector(".container__scoreCounter");

    if(points === 'reset'){
        score.textContent = 0;
        score.classList.add("scoreUpdate");
        setTimeout(()=>score.classList.remove("scoreUpdate"), 200);
    } else{
        score.textContent = parseInt(score.textContent) + points;
        score.classList.add("scoreUpdate");
        setTimeout(()=>score.classList.remove("scoreUpdate"), 200);
    }
}
function mouseClick(click){
    const mouseClickPosition = {};

    mouseClickPosition.x = click.clientX - canvas.offsetLeft;
    mouseClickPosition.y = click.clientY - canvas.offsetTop;

    console.log(mouseClickPosition, targetPosition);

    const distanceBetween = Math.sqrt((Math.pow((mouseClickPosition.x - targetPosition.x), 2) + Math.pow((mouseClickPosition.y - targetPosition.y), 2)));

    if(distanceBetween <= (difficulty.targetRadius/3)){
        updateScore(3);
    } else if(distanceBetween <= ((difficulty.targetRadius/3)*2) && distanceBetween > (difficulty.targetRadius/3)){
        updateScore(2);
    } else if(distanceBetween <= difficulty.targetRadius && distanceBetween > ((difficulty.targetRadius/3)*2)){
        updateScore(1);
    } else{
        updateScore('reset');
    }
}
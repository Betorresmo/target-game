import {difficulty, returnRandomNumberInRange} from './main.js';
export {updateTargetPosition, targetPosition};

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

function drawCircle(x, y, radius, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fill();
}
function drawTarget(x, y){
    drawCircle(x, y, difficulty.targetRadius, "#ea5455");
    drawCircle(x, y, ((difficulty.targetRadius/3)*2), "#eaeaea");
    drawCircle(x, y, (difficulty.targetRadius/3), "#ea5455");
}
function clearCanvas(){
    context.clearRect(0, 0, 700, 700);
}
const targetPosition = {};

function updateTargetPosition(){
    
    targetPosition.x = returnRandomNumberInRange(difficulty.targetRadius, 700-difficulty.targetRadius);
    targetPosition.y = returnRandomNumberInRange(difficulty.targetRadius, 500-difficulty.targetRadius);

    clearCanvas();
    drawTarget(targetPosition.x, targetPosition.y);
}
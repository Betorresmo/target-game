
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const difficultyContainer = document.querySelector('.container__difficulty');

const difficulty = {
    targetRadius: 30,
    minSpeed: 800,
    maxSpeed: 1300
};

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
function returnRandomNumberInRange(min, max){
    return Math.random() * (max - min) + min;
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
function updateScore(hit){
    let score = document.querySelector(".container__scoreCounter");

    if(hit){
        score.textContent = parseInt(score.textContent) + 1;
        score.classList.add("scoreUpdate");
        setTimeout(()=>score.classList.remove("scoreUpdate"), 200);
    }
    else{
        score.textContent = parseInt(score.textContent) - 1;
        score.classList.add("scoreUpdate");
        setTimeout(()=>score.classList.remove("scoreUpdate"), 200);
    }
    
}
function mouseClick(event){
    const mouseClickPosition = {}
    mouseClickPosition.x = event.clientX - canvas.offsetLeft;
    mouseClickPosition.y = event.clientY - canvas.offsetTop;
    console.log(mouseClickPosition, targetPosition);

    if(mouseClickPosition.x <= targetPosition.x+difficulty.targetRadius && mouseClickPosition.x >= targetPosition.x-difficulty.targetRadius && mouseClickPosition.y <= targetPosition.y+difficulty.targetRadius && mouseClickPosition.y >= targetPosition.y-difficulty.targetRadius){
        updateScore(true);
    }
    else{
        updateScore(false);
    }
}

setInterval(updateTargetPosition, returnRandomNumberInRange(difficulty.minSpeed, difficulty.maxSpeed));

canvas.addEventListener("click", mouseClick);

difficultyContainer.addEventListener("click",function(event){
    console.log(event.target)
})
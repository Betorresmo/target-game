export {returnRandomNumberInRange, difficulty, refresh};
import {updateTargetPosition, targetPosition} from './targetPosition.js';
import {updateDifficultyVisual, returnNewDifficultyValues} from './updateDifficulty.js';

const canvas = document.querySelector('canvas');
const difficultyContainer = document.querySelector('.container__difficulty');

let difficulty = {
    targetRadius: 30,
    minSpeed: 800,
    maxSpeed: 1300
};
function returnRandomNumberInRange(min, max){
    return Math.random() * (max - min) + min;
}
function restartRefresh(){
    clearInterval(refresh);
    refresh = setInterval(updateTargetPosition, returnRandomNumberInRange(difficulty.minSpeed, difficulty.maxSpeed));
}
function updateScore(hit){
    const score = document.querySelector(".container__scoreCounter");

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

let refresh = setInterval(updateTargetPosition, returnRandomNumberInRange(difficulty.minSpeed, difficulty.maxSpeed));

canvas.addEventListener("click", mouseClick);
difficultyContainer.addEventListener("click",(difficultyContainerClick)=>{
    
    updateDifficultyVisual(difficultyContainerClick);

    console.log(difficulty);
    difficulty = Object.assign(difficulty, returnNewDifficultyValues(difficultyContainerClick));
    console.log(difficulty);

    restartRefresh();
});
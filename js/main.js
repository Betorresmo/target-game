export {returnRandomNumberInRange, difficulty, refresh, canvas};
import {updateTargetPosition} from './targetPosition.js';
import {updateDifficultyVisual, returnNewDifficultyValues} from './updateDifficulty.js';
import mouseClick from './score.js';

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

let refresh = setInterval(updateTargetPosition, returnRandomNumberInRange(difficulty.minSpeed, difficulty.maxSpeed));

canvas.addEventListener("click", mouseClick);

difficultyContainer.addEventListener("click",(difficultyContainerClick)=>{
    
    updateDifficultyVisual(difficultyContainerClick);

    difficulty = Object.assign(difficulty, returnNewDifficultyValues(difficultyContainerClick));

    restartRefresh();
});
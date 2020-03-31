export {updateDifficultyVisual, returnNewDifficultyValues};

function returnNewDifficultyValues(difficultyContainerClick){

    if(difficultyContainerClick.target.textContent === "Easy"){
        return {
            targetRadius: 40,
            minSpeed: 1000,
            maxSpeed: 2000
        };
    }else if(difficultyContainerClick.target.textContent === "Medium"){
        return {
            targetRadius: 30,
            minSpeed: 800,
            maxSpeed: 1300
        };

    }else if(difficultyContainerClick.target.textContent === "Hard"){
        return {
            targetRadius: 20,
            minSpeed: 600,
            maxSpeed: 800
        };
    }
}
function updateDifficultyVisual(difficultyContainerClick){

    const clickedDifficulty = difficultyContainerClick.target;

    [...clickedDifficulty.parentElement.children].forEach((difficulty)=>{
        difficulty.classList.remove("isActive");
    })

    clickedDifficulty.classList.add("isActive");
}
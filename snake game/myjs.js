//Game constants and variables
let inputDir = {x:0, y:0};
const foodSound = new Audio('eating.mp3');
const gameOverSound = new Audio('gameo.mp3');
const movingSound = new Audio('moving.mp3');
const backgroundMusic = new Audio('music.mp3');
let lastPaintTime = 0;
let speed = 2;
let snakeArr = [
    {x:13 , y:15}
]
let food = {x: 6 , y:7}

//Game funtions
function main(ctime){
    window.requestAnimationFrame(main);
    //console.log(ctime)
    if((ctime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();

}
function gameEngine(){
    //Part 1: Upgrading the Snake array and Food


    // Part 2: Display/Render the Snake and Food

    // Display/Render the Snake

    board.innerHTML="";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement("xyz");
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index == 0){
            snakeElement.classList.add("head")
        }
        else{
            snakeElement.classList.add("snake")
        }
        board.appendChild(snakeElement);
    })

    // Display/Render the Food

    foodElement = document.createElement("xyz");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food")
    board.appendChild(foodElement);

}


//Main logic
window.requestAnimationFrame(main);
window.addEventListener("keydown" , e=>{
    inputDir = {x :0 , y: 1} //start the game
    movingSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

         case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;


            default:
            break;
    }
});
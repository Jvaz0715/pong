// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// Get the ball element
const ball = document.querySelector('.ball');

// Get the player paddle element
const playerPaddle = document.querySelector('.player-paddle');

// initial ball y-position and y-velocity
let ballYPosition = 0;
let ballXPosition = 0;
let ballYVelocity = 5;
let ballXVelocity = 5;

// Initial computer paddle y-position and y-velocity
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 5;

// Initial player-paddle y-position and y-velocity
let playerPaddleYPosition = 50;
let playerPaddleXPosition = 0;
let playerPaddleYVelocity = 5;


// Update the pong world
function update() {

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;
    ballXPosition += ballXVelocity;
    ballYPosition += ballYVelocity;

    // If the computer paddle goes off the edge of the screen, bring it back
    //computerPaddleYPosition = computerPaddleYPosition % (GAME_AREA_HEIGHT - PADDLE_HEIGHT);

    // gets the computer paddle to move up AND down without returning to the top
    if (computerPaddleYPosition > GAME_AREA_HEIGHT - PADDLE_HEIGHT || computerPaddleYPosition < 0) {
        computerPaddleYVelocity = -computerPaddleYVelocity;
    }

    // will get the ball to bounce off left and right
    /*if (ballXPosition > GAME_AREA_WIDTH - 21 || ballXPosition < 0) {
        ballXVelocity = -ballXVelocity;
    }*/ 
    // will get the ball to bounce from top and bottom
    if (ballYPosition > GAME_AREA_HEIGHT - 21 || ballYPosition < 0) {
        ballYVelocity = -ballYVelocity;
    }
    
    // get the ball to reset to the middle of the game if it goes out of left or right
    if (ballXPosition > GAME_AREA_WIDTH - 21 || ballXPosition < 0) {
        ballXPosition = GAME_AREA_HEIGHT / 2;
        balYPosition = GAME_AREA_WIDTH / 2;
    } 
    

    //ballYPosition = ballYPosition % (GAME_AREA_HEIGHT - BALL_SIZE)
    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`
}

// functions to click move player paddle

/*function upArrowPressed () {
    playerPaddle.style.top -= playerPaddleYVelocity;
}

function downArrowPressed () {
    playerPaddle.style.top += playerPaddleYVelocity;
}

function moveOptions(evt) {
    switch (evt.keyCode) {
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}*/


function onKeyDown(event) {
    if (event.keyCode == 38) {
        playerPaddle.style.top -= 5;
    } else if (event.keyCode == 40) {
        playerPaddle.style.top += 5;
    }
}



// Call the update() function every time the browser is ready to re-render
function loop() {
    update();
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);
window.addEventListener("keydown", onKeyDown)
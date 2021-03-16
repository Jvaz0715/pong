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

// initial ball y-position and y-velocity
let ballYPosition = 0;
let ballXPosition = 0;
let ballYVelocity = 5;
let ballXVelocity = 5;

// Initial computer paddle y-position and y-velocity
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;


// Update the pong world
function update() {

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;
    ballXPosition += ballXVelocity;
    ballYPosition += ballYVelocity;

    // If the computer paddle goes off the edge of the screen, bring it back
    computerPaddleYPosition = computerPaddleYPosition % (GAME_AREA_HEIGHT - PADDLE_HEIGHT);

    if (ballXPosition > GAME_AREA_WIDTH - 21 || ballXPosition < 0) {
        ballXVelocity = -ballXVelocity;
    } 

    if (ballYPosition > GAME_AREA_HEIGHT - 21 || ballYPosition < 0) {
        ballYVelocity = -ballYVelocity;
    }
    

    //ballYPosition = ballYPosition % (GAME_AREA_HEIGHT - BALL_SIZE)
    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`
}

// Call the update() function everytime the browser is ready to re-render
function loop() {
    update();
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);
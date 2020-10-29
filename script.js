window.onload = start; //no need to comment (already commented)

/**
 * The position of the bird relative to the left side of the page
 */
let left = 0;

/** Starts the program on page load */
function start() {
    fly();

/** Sets an interval to make the bird fly */
    function fly() {
        setInterval(moveBirdToTheRight, 5)
}


}
/** Moves the bird to the right */
function moveBirdToTheRight() {
    const bird = document.querySelector("img");

    //update position
    left += 0.2;

    //render position
    bird.style.left = left + "%";
}




//for (let i = 0; i < iterations; i++){}
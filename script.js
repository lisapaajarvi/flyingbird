window.onload = start;
let left = 0;

function start() {
    fly();


function fly() {
    setInterval(moveBirdToTheRight, 5)
}


}

function moveBirdToTheRight() {
    const bird = document.querySelector("img");

    //update position
    left += 0.2;
    //render position
    bird.style.left = left + "%";
}




//for (let i = 0; i < iterations; i++){}
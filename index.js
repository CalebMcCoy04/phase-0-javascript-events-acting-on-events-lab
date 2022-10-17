// Your code here
const dodger = document.querySelector('#dodger');

dodger.style.backgroundColor = "#ff69b4";

dodger.style.left = "100px";


document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft();
    }
});

function moveDodgerLeft() {
    const leftNumber = dodger.style.left.replace('px','');
    const left = parseInt(leftNumber, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
};

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        moveDodgerRight();
    }
});

function moveDodgerRight() {
    const rightNumber = dodger.style.left.replace('px','');
    const right = parseInt(rightNumber, 10);

    if (right < 360){
        dodger.style.left = `${right + 1}px`;
    }
}

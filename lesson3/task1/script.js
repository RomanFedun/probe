let firstButton = document.querySelector('#test1');
let secondButton = document.querySelector('#test2');
let box = document.querySelector('.modal');

function show1() {
box.hidden = false;
}

function hide1() {
    box.hidden = true;
}
// hide();

firstButton.onclick = hide1;
secondButton.onclick = show1;
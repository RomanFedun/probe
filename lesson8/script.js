document.querySelector('#div').oncontextmenu = function() {
    return false;
};
document.querySelector("#div").onmousedown = function() {
    return false;
};
document.querySelector('#folder').onmouseenter = () => {
    document.querySelector('#folder').style.background = 'url(openFolder.png) center no-repeat';
    document.querySelector('#folder').style. height = '65px';
    document.querySelector('#folder').style.backgroundSize = '65px';
};
document.querySelector('#folder').onmouseleave = () => {
    document.querySelector('#folder').style.background = 'url(closeFolder.png) center no-repeat';
    document.querySelector('#folder').style.height = '65px';
    document.querySelector('#folder').style.backgroundSize = '65px';
};

let div = document.querySelectorAll('.div');
for (let i = 0; i < div.length; i++) {
    div[i].onmouseenter = setColor;

function setColor() {
    function f() {
       return Math.floor(Math.random() * 256 );
    }
    let r = f();
    let g = f();
    let b = f();
    div[i].style.backgroundColor = `rgb(${r},${g},${b})`;
}
}
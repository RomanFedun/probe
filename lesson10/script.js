document.querySelector('#btn').onclick = function() {
    document.querySelector('#module').classList.remove('hide');
    document.querySelector('#head').classList.add('background');
};
document.querySelector('#close').onclick = function() {
    document.querySelector('#module').classList.add('hide');
    document.querySelector('#head').classList.remove('background');
};
document.onkeydown = function(e) {
    if (e.keyCode == 27) {
        document.querySelector('#module').classList.add('hide');
        document.querySelector('#head').classList.remove('background');
    }
};
document.querySelector('#head').classList.remove('background');

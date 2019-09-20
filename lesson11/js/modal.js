document.querySelectorAll('.btn').forEach(function (e) {
    e.onclick = showModule;
});

function showModule() {
    let buttonId = this.parentElement;
    buttonId.children[1].classList.remove('hide');
    document.querySelector('.module-wrap').classList.add('background');
    document.querySelectorAll('.btn').forEach(function (e) {
        e.classList.add('hide');
    });
    document.onkeydown = function (elem) {
        console.log('ok');
        if (elem.keyCode == 27) {
            buttonId.children[1].classList.add('hide');
            document.querySelector('.module-wrap').classList.remove('background');
            document.querySelectorAll('.btn').forEach(function (e) {
                e.classList.remove('hide');
            });
            document.onkeydown = null;
        }
    }; 
}
document.querySelectorAll('.close').forEach(function (element) {
    element.onclick = closeModule;
});

function closeModule() {
    this.parentElement.classList.add('hide');
    document.querySelector('.module-wrap').classList.remove('background');
    document.querySelectorAll('.btn').forEach(function (e) {
        e.classList.remove('hide');
    });
    document.onkeydown = null;
}
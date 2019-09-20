document.querySelector('.first').onclick = () => {
  document.querySelector('.right').style.marginLeft = '-315px';
  document.querySelector('#close').innerHTML = 'hide rules';
};
document.querySelector('.second').onclick = () => {
  document.querySelector('.right').style.marginLeft = '0px';
  document.querySelector('#close').innerHTML = 'show rules';
};
document.querySelector('#close').onclick = move;
let a= 1;
function move () {
    if (a == 1) {
    document.querySelector('.right').style.marginLeft = '-315px';
    a = 0;
    document.querySelector('#close').innerHTML = 'hide rules';
    } else {
        document.querySelector('.right').style.marginLeft = '0px';
        a = 1;
        document.querySelector('#close').innerHTML = 'show rules';
    }
}
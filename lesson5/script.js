let style1 = document.querySelector('link');
let btn1 = document.querySelector('#btn1');
let hello = document.querySelector('#hello');
let btn2 = document.querySelector('#bton2');
let btn3 = document.querySelector('#btn3');
let textBefore = document.querySelector('#task3');
let btn4 = document.querySelector('#btn4');
let textBeforeTeg = document.querySelector('#task4');
let btn5 = document.querySelector('#btn5');
let textAfter = document.querySelector('#task5');
let btn6 = document.querySelector('#btn6');
let inner = document.querySelector('#task6');
let btn7 = document.querySelector('#btn7');
let outer = document.querySelector('#task7');

btn1.onclick = changeStyle;
btn2.onclick = plus;
btn3.onclick = toGetBefore;
btn4.onclick = toGetBeforeTeg;
btn5.onclick = toGetAfter;
btn6.onclick = changeIn;
btn7.onclick = changeOut;

function changeStyle() {
    style1.href = 'style2.css';
    btn1.hidden = true; 
}
console.log(btn2);

function plus() {
    hello.innerHTML += ' world'; 
}

function toGetBefore() {
    textBefore.insertAdjacentHTML("afterbegin", 'we want to say: ');
}

function toGetBeforeTeg() {
    textBeforeTeg.insertAdjacentHTML("beforebegin", 'it is not the teg  ');
}

function toGetAfter() {
    textAfter.insertAdjacentHTML("beforeend", ' ,how are you?');
}

function changeIn() {
    inner.innerHTML ='<b>HI</b>';
    btn6.onclick = changeIn2;
}

function changeIn2() {
    inner.innerText = '<b>HI</b>';
    btn6.onclick = changeIn;
}

function changeOut() {
    outer.outerHTML =  '<b>Hi</b>';
    btn7.onclick = changeOut2;
    outer =document.querySelector('b');
}

function changeOut2() {
    outer.outerText = "<b>Hi</b>";
    btn7.onclick = function() {
        location.reload();
    };
}


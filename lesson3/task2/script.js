let first = document.getElementById('first');
let second = document.getElementById('second');
let btn = document.getElementById('btn');
first.focus();
btn.onclick = toSum;


function toSum() {
    let sum = +(first.value) + (+(second.value));
    alert(sum);
}

let our = document.getElementById('our');


our.onclick = sumInFunction;

function sumInFunction() {
    alert (2 + 3); 
}
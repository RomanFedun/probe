let first = document.querySelector('#first');
let second = document.querySelector('#second');
let check = document.querySelector('#btn');
check.onclick = compare;

function compare() {
   if (first.value >= second.value) {
       alert(first.value);
   } else {
        alert(second.value);
}
}
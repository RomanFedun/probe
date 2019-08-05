let rand = Math.floor(Math.random() * 101);
console.log(rand);
document.querySelector('#btn').onclick = checkNum;
let num = document.querySelector('#our');
num.focus();

function checkNum() {
   let check = num.value;
if (isNaN(parseFloat(check))) {
    alert('input correct number');
    num.focus();
}

if (check == rand) {
    alert('you guessed the number');
    location.reload();
} else if (check < rand) {
    alert('not enough');
    num.value = '';
    num.focus();
} else {
    alert('too big');
    num.value = '';
    num.focus();
}
}
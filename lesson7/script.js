let numList = document.querySelector('#task1');
for (let num = 0; num <= 100; num++) {
    numList.insertAdjacentText('beforeend', num + "; ");
}

// -----------------------------------------------------

numList = document.querySelector('#task2');
for (num = 0; num < 101; num += 2) {
    numList.insertAdjacentText('beforeend', num + "; ");
}

// ------------------------------------------------------

numList = document.querySelector('#task3');
for (num = 200; num >= 0; num--) {
    numList.insertAdjacentText('beforeend', num + "; ");
}

// ------------------------------------------------------

numList = document.querySelector('#task4');
let sum = 0;
for (num = 0; num <= 100; num++) {
    sum += num;
}
numList.insertAdjacentText('beforeend', sum + "; ");

// -------------------------------------------------------

document.querySelector('#result').onclick = multiple;
function multiple() {
    let number = document.querySelector('#inp-num').value;
    let mult = document.querySelector('#inp-mul').value,
    mulNumber = number;
    for (num = 1; num < mult; num++) {
        mulNumber *= number;      
    }
    if (isNaN(parseFloat(number))) {
        alert('input your number');
        document.querySelector('#inp-num').focus(); 
    }
    if (mult < 0 || isNaN(parseFloat(mult))) {
        document.querySelector('#inp-mul').value ='';
        alert('enter multiple >= 0');
       
      } else if 
        (mult == 0 ) {
        document.querySelector('#get').value = 1;
   } else {
    document.querySelector('#get').value = mulNumber;
   }
}

// -------------------------------------------------------

let div = document.querySelector('#seven');
for (num = 1; num < 10; num++) {

    div.insertAdjacentHTML('beforeend',num + ' * 7 = ' + num * 7 + ' <br>' );
}
// --------------------------------------------------------

let mult = 1;
div = document.querySelector('#eight');
for (num = 1; num <= 50; num++) {
    mult *= num  ;
    div.insertAdjacentHTML('beforeend', mult + '<br>');
}

// --------------------------------------------------------

div = document.querySelector('#task8');
for (num = 1000; num <= 2000; num++) {
    div.insertAdjacentHTML('beforeend', '&#' + num + '; ');
}

// ---------------------------------------------------------

div = document.querySelectorAll('.text');
console.log(div.length);
// div[0].hidden = true;
for (let i = 0; i < div.length; i++) {
    div[i].insertAdjacentText('afterbegin',i + 1 + ') ' );
}
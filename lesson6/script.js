
let fontColor = document.querySelector('#font-color');
let background = document.querySelector('#background');

document.querySelector('#btn-check').onclick = function() {

    console.log(document.querySelector('.input-text').value);
    console.log(document.querySelector('.input-pass').value);
    console.log(document.querySelector('.input-range').value);
    console.log(document.querySelector('#radio-1').checked);
    console.log(document.querySelector('.input-calendar').value);
    console.log(document.querySelector('#box').checked);
    console.log(document.querySelector('#input-color').value);

};

document.querySelector('#indulge').onclick = chooseStyle;

function chooseStyle() {
    console.log(fontColor.value);
    document.body.style.color = fontColor.value;
    document.body.style.backgroundColor = background.value;
}

document.querySelector('#reset').onclick = resetStyle;

function resetStyle() {
    document.body.style.color = 'black';
    document.body.style.backgroundColor = "white";
}

document.querySelector('#range').value = 16;
document.querySelector('#font-size').value = '16px';
document.querySelector('#range').oninput = chooseSize;
function chooseSize() {
    let x = document.querySelector('#range').value;

    console.log(x); 
    document.body.style.fontSize = x + 'px';
    document.querySelector('#font-size').value = x + 'px';
   }

   document.querySelector('#r-color').oninput = chooseColor;
   document.querySelector('#g-color').oninput = chooseColor;
   document.querySelector('#b-color').oninput = chooseColor;
   function chooseColor() {
    let r = document.querySelector('#r-color').value;
    let g = document.querySelector('#g-color').value;
    let b = document.querySelector('#b-color').value;
    console.log(r);
    console.log(g);
    console.log(b);
    document.querySelector('#show-color').style.backgroundColor = `rgb(${r},${g},${b})`;
   }
   
// ------------tas2===========
let div = document.querySelector('#div2in');
let l = 0;
let b = 0;
let v = 0;

document.onkeydown = function(e) {
// console.log(e.keyCode);
if (e.keyCode == 37) {
    l += 10;
    div.style.marginRight = l + 'px';
} else if (e.keyCode == 40) {
    b += 10;
      if (b > 159) {
          b = 159;
      }
    div.style.marginTop = b + 'px';
} else if (e.keyCode == 38)  {
    b -= 10;
      if (b < 0) {
          b = 0;
      } 
    div.style.marginTop = b + 'px' ;
} else if (e.keyCode == 39) {
    l -= 10;
      if (l < -160) {
          l = -160;
      }
    div.style.marginRight = l + 'px';
} else if (e.keyCode == 32) {
    v += 45;
    div.style.transform = `rotate(${v}deg)`;
}

};

// -------------task1---------
let inp1 = document.querySelector('#inp1');
inp1.focus();
inp1.onkeypress = function (e) {
    if (e.charCode > 122 || e.charCode < 97) return false;
    // console.log(e);
};

// --------task3----------
let inp3 = document.querySelector('#inp3');
inp3.onkeypress = function(e) {
    let rand = Math.floor(Math.random() * 123);
    inp3.value = String.fromCharCode(rand);
    let a = inp3.value;
    // console.log(a);
    return false;
};

//  --------task4--------------
let inp4 = document.querySelector('#inp4');
let obj = {
    113: 'w',
    119: 'e',
    101 : 'r',
    114: 't',
    116: 'y',
    121: 'u',
    117: 'i',
    105: 'o',
    111: 'p',
    112: '[',
    91: ']',
    93: 'q',
    92: 'a',
    97: 's',
    115: 'd',
    100: 'f',
    102: 'g',
    103: 'h',
    104: 'j',
    106: 'k',
    107: 'l',
    108: ';',
    122: 'x',
    120:'c',
    99: 'v',
    118: 'b',
    98: 'n',
    110: 'm',
    109: ',',
    44: '.',
    46: '/',
    47: 'z'
};

inp4.onkeypress = (e) => {
// console.log(e.keyCode);
 for (let key in obj) {
     if (e.keyCode == key) {
         inp4.value = obj[key];
         let a = inp4.value;
         return false;
        } 
 }
};
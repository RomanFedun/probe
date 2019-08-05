let check = document.getElementById('btn');
let inp = document.getElementById('inp');

inp.focus();

check.onclick = toCheck;

function toCheck() {
    // let num = parseFloat(inp.value);
    // console.log(num);
    let val = parseFloat(inp.value) % 12;
    if (val == 4) {
    document.getElementById('fot').innerHTML = '<img src="foto/krysa.jpg" alt="">';
} else if (val == 5) {
    document.getElementById('fot').innerHTML = '<img src="foto/byk.jpg" alt="">';
} else if (val == 6) {
    document.getElementById('fot').innerHTML = '<img src="foto/tygr.jpg" alt="">';
} else if (val == 7) {
    document.getElementById('fot').innerHTML = '<img src="foto/krolik.jpg" alt="">';
} else if (val == 8) {
    document.getElementById('fot').innerHTML = '<img src="foto/drakon.jpg" alt="">';
} else if (val == 9) {
    document.getElementById('fot').innerHTML = '<img src="foto/zmija.jpg" alt="">';
} else if (val == 10) {
    document.getElementById('fot').innerHTML = '<img src="foto/kin.jpg" alt="">';
} else if (val == 11) {
    document.getElementById('fot').innerHTML = '<img src="foto/kozel.jpg" alt="">'; 
} else if (val == 0) {
    document.getElementById('fot').innerHTML = '<img src="foto/mavpa.jpg" alt="">';
} else if (val == 1) {
    document.getElementById('fot').innerHTML = '<img src="foto/piven.jpg" alt="">';
} else if (val == 2) {
    document.getElementById('fot').innerHTML = '<img src="foto/sobaka.jpg" alt="">';
} else if (val == 3) {
    document.getElementById('fot').innerHTML = '<img src="foto/kaban.jpg" alt="">';
} else {
    document.getElementById('fot').innerHTML = '<h2>input correct year number</h2>';
    inp.value = '';
    inp.focus();
}
}
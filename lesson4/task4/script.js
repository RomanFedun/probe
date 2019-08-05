let check = document.querySelector('#btn');
let month = document.getElementById('mn');
let date = document.getElementById('dd');


check.onclick = toCheck;

function toCheck() {
    let m = month.value;
    let d = date.value;
   
    if (m == 12 && d > 21 && d <= 31 || m == 1 && d <= 21 && d >= 1) {
        alert('ibex');
    } else if (m == 1 && d > 21 && d <=31 || m == 2 && d <= 21 &&  d >= 1 ) {
        alert('aquarius');
    } else if (m == 2 && d >= 22 && d <= 29 || m == 3 && d <= 21 && d >= 1 ) {
        alert('pisces');
    } else if (m == 3 && d > 21 && d <= 31 || m == 4 && d <= 21 && d >= 1 ) {
        alert('aries');
    } else if (m == 4 && d > 21 && d <= 30 || m == 5 && d <= 21 && d >=1 ) {
        alert('taurus');
    } else if (m == 5 && d > 21 && d <= 31 || m == 6 && d <= 21 && d >=1 ) {
        alert('twins');
    } else if (m == 6 && d > 21 && d <= 30 || m == 7 && d <= 21 && d >= 1 ) {
        alert('cancer');
    } else if (m == 7 && d > 21 && d <= 31 || m == 8 && d <= 21 && d >= 1 ) {
        alert('lion');
    } else if (m == 8 && d > 21 && d <= 31 || m == 9 && d <= 21 && d >= 1 ) {
        alert('virgo');
    } else if (m == 9 && d > 21 && d <= 30 || m == 10 && d <= 21 && d >= 1 ) {
        alert('libra');
    } else if (m == 10 && d > 21 && d <= 31 || m == 11 && d <= 21 && d >= 1 ) {
        alert('scorpio');
    } else if (m == 11 && d > 21 && d <= 30 || m == 12 && d <= 21 && d >= 1 ) {
        alert('sagittarius');
    } 
}
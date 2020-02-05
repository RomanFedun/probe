console.log(1);
console.log(2);

function tr (x, y) {
  setTimeout( () => console.log(x), 5000);
  
  console.log(y);
}
function done () {
    setTimeout( () => console.log('first'), 2000);
     console.log('second');
}

tr(5, done);

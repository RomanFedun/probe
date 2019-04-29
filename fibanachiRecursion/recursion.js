while(true) {
    
var a = prompt('enter sequence number of fibanachi numeric(for end enter esc');
if (a == null) {
    break;
} else if (isNaN(a) || a== '') {
    alert('enter correct numeric'); continue;

 } else {
function fib(n) {
    if (n == 1) {
      return 1;
    } else if (n == 2) {
    return 1;
    } else {
    return fib(n-1) + fib(n-2);
  }
  
 
}fib(a);
}var x = fib(a);
alert(x);
}
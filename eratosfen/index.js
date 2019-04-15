var n = 100;
var listNum = [];
for (var i =2; i <= n; i++) {
  listNum.push(i);
} 
console.log(listNum);
var p = 2;
do { 
 for (i = 2; i <= n/2; i++) {
  delete listNum[ (i*p) -2];
 }


  p++;

} while (p*p < n);
console.log(listNum);

var sum = 0;
for (i = 0; i < listNum.length; i++) {
   if (listNum[i] ) {
     sum += listNum[i];
  }
}    
alert(sum);
let btn = document.getElementById('btn');

btn.onclick = twoFunc;

function twoFunc() {
    alert('get ready');
     function hiy() {
         alert('to say "HELLO"');
     }
     hiy();
     btn.onclick = secondFunc;
}

function secondFunc() {
    console.log('two options of "two function"');
    btn.onclick = twoFunc;
}

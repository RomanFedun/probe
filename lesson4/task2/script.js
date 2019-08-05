let push = document.querySelector('#btn');
push.onclick = pushOn;
let count = 0;
let tr = 3;

function pushOn() {
    push.innerText = "don't push";
    count++;
    console.log(count);
    tr--;
    
    if (count == 1) {
        alert('there  are ' + tr + ' attempts');
    } else if (count == 2) {
        alert('there are' + tr + ' attempt');
    } else {
        push.hidden = true;
    }

}


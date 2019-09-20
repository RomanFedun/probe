let select =  document.querySelector('#select-1');
select.onchange = () => console.log(select.value);

let getForm = document.querySelector('form');
document.querySelector('#submited').onclick = submit;

function submit(event) {
    event.preventDefault();
    console.log(serialize(getForm));
}


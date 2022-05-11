//Grab Single element
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('.container'));
// console.log(document.querySelector('#my-form'));
// console.log(document.querySelector('h1'));

//Select Multiple elements
// const nodeItems = document.querySelectorAll('.item');
// const colItems = document.getElementsByClassName('item');
// console.log(document.getElementsByTagName('li'));

// nodeItems.forEach(item => console.log(item));
// colItems.forEach(item => console.log(item));
// for(let i = 0; i < colItems.length; i++){
//     console.log(colItems[i]);
// }

//DOM Manipulation
// const ul = document.querySelector('.items');
// // ul.remove();
// const btn = document.querySelector('.btn');
// btn.style.backgroundColor = 'red';
// btn.style.textTransform = 'uppercase';
// btn.style.color = 'yellow';

// btn.addEventListener('click', e => {
//     e.preventDefault();
//     ul.firstElementChild.textContent = 'HTML';
//     ul.children[1].innerText = 'CSS';
//     ul.lastElementChild.innerHTML = '<h1>JavaScript</h1>';
// })

//Final form
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

//Listen for form submit
myForm.addEventListener('submit', onSumbit);

function onSumbit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerText = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const liItem = document.createElement('li');
        liItem.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(liItem);
        nameInput.value = '';
        emailInput.value = '';
    }
}
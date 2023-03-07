const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'please fill the fields';

        setTimeout(() => msg.remove(), 2000);
    }
    else{
        const list = document.createElement('list');
        list.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        userList.appendChild(list);

        //clear the field

        nameInput.value = '';
        emailInput.value = '';

    }
})
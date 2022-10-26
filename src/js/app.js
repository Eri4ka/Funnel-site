const form = document.querySelector('.main-form');
const inputName = document.querySelector('#name');
const inputPhone = document.querySelector('#phone');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formResponse = {
        name: inputName.value,
        phone: inputPhone.value,
    };

    console.log(formResponse);
    inputName.value = '';
    inputPhone.value = '';
});

const input = document.querySelector('.btn-time');


const handleSubmit = (event) => {
    event.preventDefault();

    window.location = 'pages/page.html';
}

input.addEventListener('input', validateInput)

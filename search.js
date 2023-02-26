const searchField = document.getElementsByClassName('search')[0];
const userMessage = document.getElementsByClassName('search')[1];
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    if (searchField.value === '' && userMessage.value === '') {
        alert('Please complete the user and the message fields');
    } else if (searchField.value === "") {
        alert('Please select a user');
    } else if (userMessage.value === '') {
        alert('Please write a message');
    } else {
        alert(`Your message has been sent succesfully to ${searchField.value}`);
    }
});



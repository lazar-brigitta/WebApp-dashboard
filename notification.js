const bellIcon = document.getElementsByClassName('bell-icon')[0];
const firstNotification = document.getElementsByClassName('notification1')[0];
const secondNotification = document.getElementsByClassName('notification2')[0];
const thirdNotification = document.getElementsByClassName('notification3')[0];
const x1 = document.getElementById('x1');
const x2 = document.getElementById('x2');

bellIcon.addEventListener('click', (e) => {
    firstNotification.style.display = 'flex';
    x1.style.alignSelf = 'center';
    secondNotification.style.display = 'flex';
    secondNotification.style.justifyContent = 'space-between';
});

x1.addEventListener('click', (e) => {
    firstNotification.style.visibility = "hidden";
    secondNotification.style.marginTop = '5px';
});

x2.addEventListener('click', (e) => {
    secondNotification.style.visibility = "hidden";   
});


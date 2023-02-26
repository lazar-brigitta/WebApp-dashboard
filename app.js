const alert1 = document.getElementById('alert');

// Alert pop-up
alert1.innerHTML =
  `<div class='alert-banner'>
      <p><strong>Alert:</strong> You have unread messages</p>
      <span class="alert-banner-close">x</span>
   </div>`

alert1.addEventListener('click', (e) => {
    if (e.target.className === "alert-banner-close") {
        alert1.style.display = 'none';
    }
  }
)







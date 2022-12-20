const alert = document.getElementById('alert');

// Alert pop-up
alert.innerHTML =
  `<div class='alert-banner'>
      <p><strong>Alert:</strong> You have unread messages</p>
      <span class="alert-banner-close">x</span>
   </div>`

alert.addEventListener('click', (e) => {
    if (e.target.className === "alert-banner-close") {
        alert.style.display = 'none';
    }
  }
)







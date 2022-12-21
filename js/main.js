const nav_menu = document.getElementById('nav-menu');
const nav_toggle = document.getElementById('nav-toggle');
const nav_close = document.getElementById('nav-close');


/* Toggle Menu */
if (nav_toggle) {
    nav_toggle.addEventListener('click', () => {
        nav_menu.classList.add('show-menu');
    })
}

if (nav_close) {
    nav_close.addEventListener('click', () => {
        nav_menu.classList.remove('show-menu');
    })
}


/* Hide Mobile Menu When Clicked On Links */

const nav_link = document.querySelectorAll('.nav_link');

function hideMenuOnClick() {
    nav_menu.classList.remove('show-menu')
}

nav_link.forEach(link => {
    link.addEventListener('click', hideMenuOnClick)
})

/* Show Loader */
const loader = document.querySelector(".lds-ring");

/* Alert when sending email */
const url = "http://localhost:3000/send-email"
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const sendEmailButton = document.querySelector(".form_button");
const form = document.querySelector(".contact_form")

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    loader.style.display = "block"
    sendEmailButton.disabled = true
    try {
        const response = await fetch('https://portfolio-email-sender-production.up.railway.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                message: message.value
            })

        })

        const data = await response.json();


        if (response.status === 200) {
            alert(data.message)
        } else {
            alert(data.message)
        }


    } catch (error) {
        console.log(error.message)
    }
    location.reload()


})







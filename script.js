function toggleDiv() {
    var div = document.getElementById('joinserver');
    div.style.display = 'block';
}

function closediv() {
    var div = document.getElementById('joinserver');
    div.style.display = 'none';
}

function redirect() {
    window.location.href = "https://discord.com/oauth2/authorize?client_id=1304436337520148550";
}

function premiumpage() {
    window.location.href = "premium.html";
}

document.getElementById('toggleButton').addEventListener('click', function (event) {
    event.preventDefault()
    var userConfirmed = window.confirm("You are now about to enter the bot's server. Are you sure you want to leave this page and go to the link?");

    if (userConfirmed) {
        window.location.href = this.href;
    }
});

document.addEventListener('click', function (event) {
    var div = document.getElementById('joinserver');
    if (!div.contains(event.target)) {
        div.classList.add('shake');
        setTimeout(function () {
            div.classList.remove('shake');
        }, 500);
    }
});

document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        const isOpen = content.style.maxHeight;

        document.querySelectorAll('.accordion-content').forEach(item => {
            item.style.maxHeight = null;
        });

        if (!isOpen) {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
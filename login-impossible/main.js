document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');
    const loginForm = document.getElementById('loginForm');
    const inputs = document.querySelectorAll('input');

    submitBtn.addEventListener('mouseover', function() {
        if (!inputs[0].value || !inputs[1].value) {
            const randomX = Math.floor(Math.random() * 200) + 50;
            const randomY = Math.floor(Math.random() * 200) + 50;
            submitBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }
    });

    loginForm.addEventListener('submit', function(event) {
        if (!inputs[0].value || !inputs[1].value) {
            event.preventDefault();
            alert("Veuillez remplir tous les champs !");
        } else {
            submitBtn.style.transform = 'translate(0, 0)';
            alert("Connexion autorisé !");
        }
    });

    inputs.forEach(input => {
        input.addEventListener('input', function() {
            submitBtn.style.transform = 'translate(0, 0)';
        });
    });
});

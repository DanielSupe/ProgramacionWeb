document.addEventListener('DOMContentLoaded', function() {
    const verPassword = document.querySelector('.verPassword');
    const inputPassword = document.querySelector('.inputpassword');

    // Agregar un evento de clic al elemento svg
    verPassword.addEventListener('click', function() {
        // Cambiar el tipo de input de password a text y viceversa
        if (inputPassword.type === 'password') {
            inputPassword.type = 'text';
        } else {
            inputPassword.type = 'password';
        }
    });
});

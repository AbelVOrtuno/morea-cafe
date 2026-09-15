// Formulario 

const form = document.querySelector(".form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const drinkInput = document.querySelector("#drink");
const formMessage = document.querySelector(".form__message");

form.addEventListener("submit", (formEvent) => {
    formEvent.preventDefault();

    const nameValue = nameInput.value.trim();

    if(nameValue ===""){
        formMessage.textContent = "Por favor, escribe tu nombre";
        return;
    }

    const emailValue = emailInput.value.trim();

    if(emailValue ===""){
        formMessage.textContent = "Por favor escribe tu email";
        return;
    }

    if(!emailInput.validity.valid){
        formMessage.textContent = "Por favor escribe un email valido";
        return;
    }
    formMessage.textContent ="Datos Validos";
    
    const phoneValue = phoneInput.value.trim();

    if(phoneValue ===""){
        formMessage.textContent = "Por favor, escribe tu numero de WhatsApp";
        return;
    }

    if (phoneValue.length < 10){
        formMessage.textContent = "Escribe un numero de WhatsApp valido";
        return;
    }

    const drinkValue = drinkInput.value;

    if (drinkValue ===""){
        formMessage.textContent ="Por favor selecciona una opcion";
        return;
    }
    
    formMessage.textContent ="¡Listo! Recibimos tu solicitud. Te contactaremos pronto";
    form.reset();

    setTimeout(() => {
        formMessage.textContent = "";
    }, 2000);
});

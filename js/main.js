const email = document.getElementById("email");
const boton = document.getElementById("btn");
const parrafo = document.getElementById("error");

boton.addEventListener("click", e=> {
    e.preventDefault()
    let error = "";
    let entrar = false;
    let validacion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!validacion.test(email.value)) {
        error += `please provide a valid email address <br>`
        entrar = true; 
    }

    if(entrar) {
        parrafo.innerHTML = error;
    } else {
        parrafo.innerHTML = "enviado";
    }
});
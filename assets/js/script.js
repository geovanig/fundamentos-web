let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

let tamanhoMapa = document.querySelector("#tamanhoMapa");

nome.style.width = "100%";
email.style.width = "100%";
assunto.style.width = "100%";

function validaNome() {
    let txt = document.querySelector("#txtNome");
    if(nome.value.length < 3){
        txt.innerHTML = "Nome inválido";
        txt.style.color = "red";
    }else{
        txtNome.innerHTML = "";
        nomeOk = true;
    }
}

function validaEmail() {
    let txt = document.querySelector("#txtEmail");
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Email inválido";
        txt.style.color = "red";
    }else{
        txtEmail.innerHTML = "";
        emailOk = true;
    }
}

function validaAssunto() {
    let txt = document.querySelector("#txtAssunto");
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto muito grande, recomendado ter por volta de 100 caracteres";
        txt.style.color = "red";
    }else{
        txtAssunto.innerHTML = "";
        assuntoOk = true;
    }
}

function validarEnvio() {
   if(nomeOk == true && emailOk == true && assuntoOk == true) {
       alert("Mensagem enviada!!!");
   }else{
       alert("Preencha os campos corretamente");
   }
}

function normalMapa() {
    tamanhoMapa.style.width = "350px";
    tamanhoMapa.style.height = "225px";
}

function zoomMapa() {
    tamanhoMapa.style.width = "720px";
    tamanhoMapa.style.height = "512px"
}
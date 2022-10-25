// importando css
import '../css/style.css'

// Retirando a renderização do formulário
const form = document.querySelector('form')
form.addEventListener('submit', event => {
    event.preventDefault()
})

// Clique do mouse no Botão de Login, validando as informações preenchidas no formulário, informando se preencheu tudo ou não!
const inputUser = document.querySelector('.input_user input')
const inputPass = document.querySelector('.input_password input')
const btnLogin = document.querySelector('.btn_Login input')
btnLogin.addEventListener('click', () => {
    if(inputUser.value === "" && inputPass.value === "") {
    alert("Dados vázios!")
    }else if(inputUser.value === "") {
        alert("Usuário vázio!")
    } else if(inputPass.value === "") {
        alert("Senha vázia")
    } else {
        alert("Tudo foi preenchido!")
    }
})

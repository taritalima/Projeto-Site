const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    console.log(nome, email);
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')
    let carregando = `<p> carregando... </p>`
    let pronto = `<p> dados salvos com sucesso </p>`
    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto

    }, 500);


})

import Countdown from "./countdown.js";

const tempoblackfriday = new Countdown("20 octuber 2021 20:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoblackfriday.total[index];
    });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);
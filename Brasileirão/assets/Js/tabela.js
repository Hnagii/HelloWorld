function creatGame(time1, hora, time2) {
    return `
    <li>
    <img src="assets/img/icon-${time1}.png" alt="Bandeira do ${time1}">
    <strong>${hora}</strong>
    <img src="assets/img/icon-${time2}.png" alt="Bandeira do ${time2}"> 
    </li>
    `
}
let delay = -0.4;

function creatCard(data, dia, jogos) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${data} <span>${dia}</span></h2>
        <ul>
            ${jogos}
        </ul>
    </div>
    `

}
document.querySelector("#cards").innerHTML =
    creatCard("06/12", "Quarta-Feira", creatGame("santos", "20:00", "fortaleza"))
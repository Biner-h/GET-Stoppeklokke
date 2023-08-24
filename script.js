const app = document.getElementById('app');
const rounds = document.getElementById('runde')
let seconds = 1;
let timer;

function startTid(){
    setInterval(tellSekunder, 1000);
}

function tellSekunder(){
    app.innerHTML = seconds;
    seconds++;
}

function pauseTid(){
    rounds.innerHTML += `<li>${seconds} sekunder</li>`;
    clearInterval(timer);
    seconds = 0;
}

function fjernTid(){
    location.reload()
}
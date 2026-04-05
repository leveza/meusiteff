function criarParticula() {
    let p = document.createElement("div");
    p.classList.add("particula");

    document.body.appendChild(p);

    p.style.left = Math.random() * window.innerWidth + "px";
    p.style.top = "-10px";

    let tamanho = Math.random() * 5 + 2;
    p.style.width = tamanho + "px";
    p.style.height = tamanho + "px";

    let duracao = Math.random() * 3 + 2;

    p.style.animation = `cair ${duracao}s linear`;

    setTimeout(() => {
        p.remove();
    }, duracao * 1000);
}

setInterval(criarParticula, 100);
function criarBola() {
    let bola = document.createElement("div");
    bola.classList.add("bola");

    document.body.appendChild(bola);

    bola.style.left = Math.random() * window.innerWidth + "px";
    bola.style.top = Math.random() * window.innerHeight + "px";

    setTimeout(() => {
        bola.remove();
    }, 4000);
}

setInterval(criarBola, 500);
document.addEventListener("mousemove", function(e) {
    let ponto = document.createElement("div");
    ponto.classList.add("rastro");

    document.body.appendChild(ponto);

    ponto.style.left = e.clientX + "px";
    ponto.style.top = e.clientY + "px";

    setTimeout(() => {
        ponto.remove();
    }, 500);
});
let canvas = document.getElementById("matrix");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let letras = "01";
letras = letras.split("");

let fontSize = 16;
let columns = canvas.width / fontSize;

let drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function desenhar() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        let text = letras[Math.floor(Math.random() * letras.length)];

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}


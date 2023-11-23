function atualizarRelogio() {
    const agora = new Date();
    const [horas, minutos, segundos] = [agora.getHours(), agora.getMinutes(), agora.getSeconds()]
        .map(val => val < 10 ? `0${val}` : val);

    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

function atualizarImagensEGradiente() {
    const agora = new Date();
    const hora = agora.getHours();
    const body = document.body;
    const gifs = document.getElementById('gifs');
    const imagens = gifs.querySelectorAll('img');

    const periodos = [
        { inicio: 0, fim: 12, gradiente: 'linear-gradient(120deg, #304878, #c0d8d8)', alt: 'manhã' },
        { inicio: 12, fim: 16, gradiente: 'linear-gradient(120deg, #ffffff, #E8AA42)', alt: 'tarde' },
        { inicio: 16, fim: 18, gradiente: 'linear-gradient(120deg, #ffe53bd8, #ff2525da)', alt: 'entardecer' },
        { inicio: 18, fim: 24, gradiente: 'linear-gradient(120deg, #000000, #304878)', alt: 'noite' }
    ];

    const periodoAtual = periodos.find(periodo => hora >= periodo.inicio && hora < periodo.fim);

    body.style.backgroundImage = periodoAtual ? periodoAtual.gradiente :
        'linear-gradient(120deg, rgba(255, 229, 59, 0.8470588235), rgba(255, 37, 37, 0.8549019608))';

    imagens.forEach(img => {
        if (img.alt === (periodoAtual ? periodoAtual.alt : 'manhã')) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}

setInterval(atualizarRelogio, 1000);
setInterval(atualizarImagensEGradiente, 60000);
atualizarImagensEGradiente();
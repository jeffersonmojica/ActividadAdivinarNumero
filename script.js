document.addEventListener('DOMContentLoaded', function() {
    const intentosInput = document.getElementById('intentos');
    const numeroInput = document.getElementById('numero');
    const adivinarBtn = document.getElementById('adivinar-btn');
    const reiniciarBtn = document.getElementById('reiniciar-btn');
    const intentoActualSpan = document.getElementById('intento-actual');
    const intentosRestantesSpan = document.getElementById('intentos-restantes');
    const resultadoP = document.getElementById('resultado');

    let intentosRestantes = parseInt(intentosInput.value);
    let numeroAdivinar = Math.floor(Math.random() * 50) + 1;
    let intentoActual = 0;

    adivinarBtn.addEventListener('click', function() {
        intentoActual++;
        intentoActualSpan.textContent = intentoActual;
        intentosRestantes--;
        intentosRestantesSpan.textContent = intentosRestantes;

        const numeroUsuario = parseInt(numeroInput.value);

        if (numeroUsuario === numeroAdivinar) {
            resultadoP.textContent = `¡Felicitaciones! ¡Has adivinado el número en ${intentoActual} intentos!`;
            adivinarBtn.disabled = true;
        } else if (intentoActual === 10) {
            resultadoP.textContent = `¡Lo siento! ¡Has agotado tus 10 intentos! El número era ${numeroAdivinar}.`;
            adivinarBtn.disabled = true;
        } else {
            resultadoP.textContent = `Intento ${intentoActual}: ¡Incorrecto! Intenta de nuevo.`;
        }
    });

    reiniciarBtn.addEventListener('click', function() {
        intentosRestantes = parseInt(intentosInput.value);
        numeroAdivinar = Math.floor(Math.random() * 50) + 1;
        intentoActual = 0;

        intentoActualSpan.textContent = intentoActual;
        intentosRestantesSpan.textContent = intentosRestantes;
        resultadoP.textContent = '';
        adivinarBtn.disabled = false;
    });
});

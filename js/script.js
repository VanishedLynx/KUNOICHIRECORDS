// Selecteer de elementen die we willen veranderen
const hoverText = document.getElementById('hover-text');
const textButton = document.getElementById('text-button');

// Functie om te controleren of we op een mobiel apparaat zijn
function isMobile() {
    return window.matchMedia("only screen and (max-width: 768px)").matches;
}

// Voeg de hover-functionaliteit toe aan de hover-tekst (alleen op desktop)
if (!isMobile()) {
    hoverText.addEventListener('mouseenter', function () {
        hoverText.textContent = 'WHAT ARE YOU DOING HERE..?'; // Engelse tekst bij hover
    });

    hoverText.addEventListener('mouseleave', function () {
        hoverText.textContent = 'ここで何をしているの..？'; // Japans tekst terugzetten bij hover stoppen
    });
}

// Voeg dezelfde hover-functionaliteit toe aan de tekst-knop (alleen op desktop)
if (!isMobile()) {
    textButton.addEventListener('mouseenter', function () {
        textButton.textContent = 'XENO-FEST'; // Engelse tekst bij hover
    });

    textButton.addEventListener('mouseleave', function () {
        textButton.textContent = 'ゼノフェスト'; // Japans tekst terugzetten bij hover stoppen
    });
}

// Voeg de klikfunctionaliteit toe aan de hover-tekst (voor mobiel)
hoverText.addEventListener('click', function () {
    if (hoverText.textContent === 'ここで何をしているの..？') {
        hoverText.textContent = 'WHAT ARE YOU DOING HERE..?'; // Engelse tekst bij klik
    } else {
        hoverText.textContent = 'ここで何をしているの..？'; // Japans tekst terugzetten bij klik
    }
});

// Voeg de klikfunctionaliteit toe aan de tekst-knop (voor mobiel)
textButton.addEventListener('click', function () {
    if (textButton.textContent === 'ゼノフェスト') {
        textButton.textContent = 'XENO-FEST'; // Engelse tekst bij klik
    } else {
        textButton.textContent = 'ゼノフェスト'; // Japans tekst terugzetten bij klik
    }
});

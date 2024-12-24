// Selecteer de elementen die we willen veranderen
const hoverText = document.getElementById('hover-text');
const textButton = document.getElementById('text-button');

// Functie om te controleren of we op een mobiel apparaat zijn
function isMobile() {
    return window.matchMedia("only screen and (max-width: 768px)").matches;
}

// Functie om de tekst te veranderen bij klik
function changeText(elementId) {
    const element = document.getElementById(elementId);

    if (elementId === 'hover-text') {
        if (element.textContent === 'ここで何をしているの..？') {
            element.textContent = 'WHAT ARE YOU DOING HERE..?'; // Engelse tekst bij klik
        } else {
            element.textContent = 'ここで何をしているの..？'; // Japans tekst terugzetten bij klik
        }
    }

    if (elementId === 'text-button') {
        if (element.textContent === 'ゼノフェスト') {
            element.textContent = 'XENO-FEST'; // Engelse tekst bij klik
        } else {
            element.textContent = 'ゼノフェスト'; // Japans tekst terugzetten bij klik
        }
    }
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
    changeText('hover-text');
});

// Voeg de klikfunctionaliteit toe aan de tekst-knop (voor mobiel)
textButton.addEventListener('click', function () {
    changeText('text-button');
});

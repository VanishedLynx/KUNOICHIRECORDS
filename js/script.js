// Selecteer de elementen die we willen veranderen
const hoverText = document.getElementById('hover-text');
const textButton = document.getElementById('text-button');

// Functie om te controleren of we op een mobiel apparaat zijn
function isMobile() {
    return window.matchMedia("only screen and (max-width: 768px)").matches;
}

// Functie om de juiste video toe te voegen voor mobiel en desktop
function loadVideoForDevice() {
    const videoElement = document.getElementById('background-video');

    // Verwijder alle bestaande <source> elementen
    while (videoElement.firstChild) {
        videoElement.removeChild(videoElement.firstChild);
    }

    // Controleer of de gebruiker op een mobiel apparaat zit
    if (isMobile()) {
        // Voeg WebM video toe voor mobiel
        const sourceWebM = document.createElement('source');
        sourceWebM.src = 'videos/bgvideo.webm'; // Je WebM video
        sourceWebM.type = 'video/webm';
        videoElement.appendChild(sourceWebM);
    } else {
        // Voeg MP4 video toe voor desktop
        const sourceMP4 = document.createElement('source');
        sourceMP4.src = 'videos/bgvideo.mp4'; // Je MP4 video
        sourceMP4.type = 'video/mp4';
        videoElement.appendChild(sourceMP4);
    }
}

// Zorg ervoor dat de juiste video geladen wordt zodra de pagina is geladen
window.addEventListener('load', loadVideoForDevice);

// Als de schermgrootte verandert, laad de juiste video opnieuw
window.addEventListener('resize', loadVideoForDevice);

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

// Voeg de klikfunctionaliteit toe aan de hover-tekst (werkt op mobiel en desktop)
hoverText.addEventListener('click', function () {
    if (hoverText.textContent === 'ここで何をしているの..？') {
        hoverText.textContent = 'WHAT ARE YOU DOING HERE..?'; // Engelse tekst bij klik
    } else {
        hoverText.textContent = 'ここで何をしているの..？'; // Japans tekst terugzetten bij klik
    }
});

// Voeg de klikfunctionaliteit toe aan de tekst-knop (werkt op mobiel en desktop)
textButton.addEventListener('click', function () {
    if (textButton.textContent === 'ゼノフェスト') {
        textButton.textContent = 'XENO-FEST'; // Engelse tekst bij klik
    } else {
        textButton.textContent = 'ゼノフェスト'; // Japans tekst terugzetten bij klik
    }
});

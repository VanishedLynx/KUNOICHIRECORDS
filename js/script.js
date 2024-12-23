// Selecteer de elementen die we willen veranderen
const hoverText = document.getElementById('hover-text');
const textButton = document.getElementById('text-button');

// Voeg de hover functionaliteit toe aan de hover-tekst
hoverText.addEventListener('mouseenter', function () {
    hoverText.textContent = 'WHAT ARE YOU DOING HERE..?'; // Engelse tekst bij hover
});

hoverText.addEventListener('mouseleave', function () {
    hoverText.textContent = 'ここで何をしているの..？'; // Japans tekst terugzetten bij hover stoppen
});

// Voeg dezelfde hover functionaliteit toe aan de tekst-knop
textButton.addEventListener('mouseenter', function () {
    textButton.textContent = 'XENO-FEST'; // Engelse tekst bij hover
});

textButton.addEventListener('mouseleave', function () {
    textButton.textContent = 'ゼノフェスト'; // Japans tekst terugzetten bij hover stoppen
});

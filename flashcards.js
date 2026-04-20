// ============================================
// FLASHCARDS - PERSONALPRONOMEN IM NOMINATIV
// Claudia Toth · Învățare prin repetiție cu Text-to-Speech
// ============================================

const flashcardsData = [
    // Pronumele singure
    { de: 'ich', ro: 'eu' },
    { de: 'du', ro: 'tu (informal, 1 pers.)' },
    { de: 'er', ro: 'el' },
    { de: 'sie', ro: 'ea' },
    { de: 'es', ro: 'el/ea (pentru neutru)' },
    { de: 'wir', ro: 'noi' },
    { de: 'ihr', ro: 'voi (informal)' },
    { de: 'sie', ro: 'ei / ele' },
    { de: 'Sie', ro: 'Dumneavoastră (politețe, sg. și pl.)' },

    // Pronume + sein
    { de: 'ich bin', ro: 'eu sunt' },
    { de: 'du bist', ro: 'tu ești' },
    { de: 'er ist', ro: 'el este' },
    { de: 'sie ist', ro: 'ea este' },
    { de: 'es ist', ro: 'el/ea este (neutru)' },
    { de: 'wir sind', ro: 'noi suntem' },
    { de: 'ihr seid', ro: 'voi sunteți' },
    { de: 'sie sind', ro: 'ei/ele sunt' },
    { de: 'Sie sind', ro: 'Dvs. sunteți' },

    // Pronume + haben
    { de: 'ich habe', ro: 'eu am' },
    { de: 'du hast', ro: 'tu ai' },
    { de: 'er hat', ro: 'el are' },
    { de: 'wir haben', ro: 'noi avem' },
    { de: 'ihr habt', ro: 'voi aveți' },
    { de: 'sie haben', ro: 'ei/ele au' },

    // Propoziții de context
    { de: 'Ich bin Anna.', ro: 'Eu sunt Anna.' },
    { de: 'Du bist nett.', ro: 'Tu ești drăguț.' },
    { de: 'Er kommt aus Deutschland.', ro: 'El vine din Germania.' },
    { de: 'Sie wohnt in Berlin.', ro: 'Ea locuiește în Berlin.' },
    { de: 'Es ist neu.', ro: 'Este nou (neutru).' },
    { de: 'Wir lernen Deutsch.', ro: 'Noi învățăm germana.' },
    { de: 'Ihr geht ins Kino.', ro: 'Voi mergeți la cinema.' },
    { de: 'Sie spielen Fußball.', ro: 'Ei joacă fotbal.' },
    { de: 'Sie sind Herr Müller.', ro: 'Dvs. sunteți domnul Müller. (politețe)' },
    { de: 'Das Mädchen? Es ist jung.', ro: 'Fata? Ea este tânără. (atenție: es, nu sie!)' }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;

    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 Învață prin repetiție.</strong><br>
            Click pe card pentru a vedea traducerea. Click pe 🔊 pentru pronunție automată în germană.
        </div>

        <div class="flashcard-counter" id="flashcard-counter">
            Card 1 / ${flashcardsData.length}
        </div>

        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>

        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;

    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (!card || !de || !ro || !counter) return;

    const currentCard = flashcardsData[currentCardIndex];
    de.textContent = currentCard.de;
    ro.textContent = currentCard.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;

    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

// TEXT-TO-SPEECH pentru pronunție germană automată
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];

    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(card.de);
        utterance.lang = 'de-DE';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Browser-ul tău nu suportă Text-to-Speech. Te rog folosește Chrome, Edge sau Safari.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    buildFlashcards();
});

// ============================================
// EXERCIȚII - PERSONALPRONOMEN IM NOMINATIV
// Claudia Toth · 5 exerciții interactive
// ============================================

// ============================================
// EXERCIȚIUL 1: Alege pronumele potrivit
// ============================================
const ex1Data = [
    { id: 'a', subject: 'Tim', correct: 'er' },
    { id: 'b', subject: 'Maria', correct: 'sie' },
    { id: 'c', subject: 'das Kind', correct: 'es' },
    { id: 'd', subject: 'Peter und ich', correct: 'wir' },
    { id: 'e', subject: 'du und Anna', correct: 'ihr' },
    { id: 'f', subject: 'Herr Müller (politețe)', correct: 'Sie' },
    { id: 'g', subject: 'Anna und Tim', correct: 'sie' },
    { id: 'h', subject: 'der Tisch', correct: 'er' },
    { id: 'i', subject: 'die Lampe', correct: 'sie' },
    { id: 'j', subject: 'das Mädchen', correct: 'es' },
    { id: 'k', subject: 'eu', correct: 'ich' },
    { id: 'l', subject: 'tu (un prieten)', correct: 'du' }
];

const ex1Pronouns = ['ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'Sie'];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;

    let html = `
        <div class="exercise-instruction">
            <strong>📝 Wählen Sie das richtige Pronomen.</strong><br>
            Alegeți pronumele personal potrivit pentru fiecare subiect.
        </div>
    `;

    ex1Data.forEach((item, index) => {
        let optionsHTML = '<option value="">-- alege pronumele --</option>';
        ex1Pronouns.forEach(p => {
            optionsHTML += `<option value="${p}">${p}</option>`;
        });

        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><span class="nomen-highlight">${item.subject}</span> → ?</label>
                    <select id="ex1-${item.id}">${optionsHTML}</select>
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;

    ex1Data.forEach(item => {
        const select = document.getElementById(`ex1-${item.id}`);
        const feedback = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = select.value.trim();
        const correctAnswer = item.correct;

        if (userAnswer === correctAnswer) {
            feedback.className = 'feedback correct';
            feedback.textContent = `${item.subject} → ${item.correct}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct}`;
        }
    });

    return { correct, total };
}

// ============================================
// EXERCIȚIUL 2: Lückentext
// ============================================
const ex2Data = [
    {
        id: 'a',
        sentence: '___ bin Student.',
        correct: 'Ich',
        accept: ['ich'],
        translation: 'Eu sunt student.'
    },
    {
        id: 'b',
        sentence: '___ bist sehr nett.',
        correct: 'Du',
        accept: ['du'],
        translation: 'Tu ești foarte drăguț.'
    },
    {
        id: 'c',
        sentence: 'Das ist Peter. ___ kommt aus Berlin.',
        correct: 'Er',
        accept: ['er'],
        translation: 'Acesta este Peter. El vine din Berlin.'
    },
    {
        id: 'd',
        sentence: 'Das ist Anna. ___ ist 25 Jahre alt.',
        correct: 'Sie',
        accept: ['sie'],
        translation: 'Aceasta este Anna. Ea are 25 de ani.'
    },
    {
        id: 'e',
        sentence: 'Das ist das Buch. ___ ist neu.',
        correct: 'Es',
        accept: ['es'],
        translation: 'Aceasta este cartea. Ea este nouă.'
    },
    {
        id: 'f',
        sentence: 'Anna und ich lernen Deutsch. ___ sind fleißig.',
        correct: 'Wir',
        accept: ['wir'],
        translation: 'Anna și cu mine învățăm germana. Noi suntem sârguincioși.'
    },
    {
        id: 'g',
        sentence: 'Tim, Lisa, geht ___ ins Kino?',
        correct: 'ihr',
        accept: ['ihr'],
        translation: 'Tim, Lisa, mergeți (voi) la cinema?'
    },
    {
        id: 'h',
        sentence: 'Die Kinder spielen. ___ sind glücklich.',
        correct: 'Sie',
        accept: ['sie'],
        translation: 'Copiii se joacă. Ei sunt fericiți.'
    },
    {
        id: 'i',
        sentence: 'Guten Tag, Herr Schmidt! ___ sind sehr pünktlich.',
        correct: 'Sie',
        accept: ['sie'],
        translation: 'Bună ziua, domnule Schmidt! Dumneavoastră sunteți foarte punctual.'
    },
    {
        id: 'j',
        sentence: 'Das Mädchen tanzt. ___ ist fröhlich.',
        correct: 'Es',
        accept: ['es'],
        translation: 'Fata dansează. Ea este veselă. (atenție: das Mädchen → es!)'
    }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;

    let html = `
        <div class="exercise-instruction">
            <strong>📝 Ergänzen Sie das passende Pronomen.</strong><br>
            Completați cu pronumele personal potrivit la Nominativ.
        </div>
    `;

    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <input type="text" id="ex2-${item.id}" placeholder="Scrie pronumele...">
                    <small style="color: #6b7280; font-style: italic;">💬 ${item.translation}</small>
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;

    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const feedback = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = input.value.trim().toLowerCase();

        const isCorrect = item.accept.some(a => a.toLowerCase() === userAnswer);

        if (isCorrect) {
            feedback.className = 'feedback correct';
            feedback.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct}`;
        }
    });

    return { correct, total };
}

// ============================================
// EXERCIȚIUL 3: Multiple Choice — du, ihr sau Sie?
// ============================================
const ex3Data = [
    {
        id: 'a',
        question: 'Vorbești cu un bun prieten. Ce pronume folosești?',
        options: ['du', 'ihr', 'Sie'],
        correct: 'du',
        explanation: '"du" — o singură persoană, informal (prieten)'
    },
    {
        id: 'b',
        question: 'Vorbești cu doi prieteni în același timp. Ce pronume folosești?',
        options: ['du', 'ihr', 'Sie'],
        correct: 'ihr',
        explanation: '"ihr" — pluralul informal (mai multe persoane apropiate)'
    },
    {
        id: 'c',
        question: 'Vorbești cu un client la magazin. Ce pronume folosești?',
        options: ['du', 'ihr', 'Sie'],
        correct: 'Sie',
        explanation: '"Sie" — adresare formală, un necunoscut / client'
    },
    {
        id: 'd',
        question: 'Vorbești cu directorul și secretara. Ce pronume folosești?',
        options: ['ihr', 'Sie', 'du'],
        correct: 'Sie',
        explanation: '"Sie" — și pentru mai multe persoane, contextul formal rămâne'
    },
    {
        id: 'e',
        question: 'Vorbești cu sora ta mică. Ce pronume folosești?',
        options: ['Sie', 'du', 'ihr'],
        correct: 'du',
        explanation: '"du" — familie, informal'
    },
    {
        id: 'f',
        question: 'Vorbești cu toată clasa ta de prieteni. Ce pronume folosești?',
        options: ['Sie', 'ihr', 'du'],
        correct: 'ihr',
        explanation: '"ihr" — mai mulți prieteni / colegi apropiați'
    },
    {
        id: 'g',
        question: 'Vorbești cu un profesor universitar pe care îl întâlnești prima dată. Ce pronume folosești?',
        options: ['du', 'Sie', 'ihr'],
        correct: 'Sie',
        explanation: '"Sie" — respect și distanță profesională'
    },
    {
        id: 'h',
        question: 'Vorbești cu un copil de 6 ani. Ce pronume folosești?',
        options: ['du', 'Sie', 'ihr'],
        correct: 'du',
        explanation: '"du" — cu copiii se folosește mereu forma informală'
    }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;

    let html = `
        <div class="exercise-instruction">
            <strong>📝 Wählen Sie die richtige Antwort.</strong><br>
            Alegeți pronumele corect pentru fiecare situație.
        </div>
    `;

    ex3Data.forEach((item, index) => {
        let optionsHTML = '';
        item.options.forEach((opt, i) => {
            optionsHTML += `
                <div class="mc-option">
                    <input type="radio" name="ex3-${item.id}" value="${opt}" id="ex3-${item.id}-${i}">
                    <label for="ex3-${item.id}-${i}">${opt}</label>
                </div>
            `;
        });

        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.question}</label>
                    <div class="mc-options">${optionsHTML}</div>
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;

    ex3Data.forEach(item => {
        const selected = document.querySelector(`input[name="ex3-${item.id}"]:checked`);
        const feedback = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = selected ? selected.value : '';

        if (userAnswer === item.correct) {
            feedback.className = 'feedback correct';
            feedback.textContent = `${item.correct} - ${item.explanation}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct} - ${item.explanation}`;
        }
    });

    return { correct, total };
}

// ============================================
// EXERCIȚIUL 4: Înlocuiește substantivul cu pronume
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'Peter ist Arzt.', correct: 'Er ist Arzt.', accept: ['er ist arzt.', 'er ist arzt'] },
    { id: 'b', sentence: 'Maria wohnt in Wien.', correct: 'Sie wohnt in Wien.', accept: ['sie wohnt in wien.', 'sie wohnt in wien'] },
    { id: 'c', sentence: 'Das Auto ist rot.', correct: 'Es ist rot.', accept: ['es ist rot.', 'es ist rot'] },
    { id: 'd', sentence: 'Anna und Tim lernen Deutsch.', correct: 'Sie lernen Deutsch.', accept: ['sie lernen deutsch.', 'sie lernen deutsch'] },
    { id: 'e', sentence: 'Der Hund spielt im Garten.', correct: 'Er spielt im Garten.', accept: ['er spielt im garten.', 'er spielt im garten'] },
    { id: 'f', sentence: 'Die Lehrerin ist freundlich.', correct: 'Sie ist freundlich.', accept: ['sie ist freundlich.', 'sie ist freundlich'] },
    { id: 'g', sentence: 'Das Mädchen singt.', correct: 'Es singt.', accept: ['es singt.', 'es singt'] },
    { id: 'h', sentence: 'Paul und ich kochen.', correct: 'Wir kochen.', accept: ['wir kochen.', 'wir kochen'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;

    let html = `
        <div class="exercise-instruction">
            <strong>📝 Ersetzen Sie das Nomen durch ein Pronomen.</strong><br>
            Înlocuiți subiectul (numele/substantivul) cu pronumele potrivit. Scrieți propoziția întreagă.
        </div>
    `;

    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><span class="nomen-highlight">${item.sentence}</span> → ?</label>
                    <input type="text" id="ex4-${item.id}" placeholder="Scrie propoziția cu pronume...">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;

    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const feedback = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = input.value.trim().toLowerCase().replace(/\s+/g, ' ');

        const isCorrect = item.accept.some(a => a === userAnswer);

        if (isCorrect) {
            feedback.className = 'feedback correct';
            feedback.textContent = item.correct;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct}`;
        }
    });

    return { correct, total };
}

// ============================================
// EXERCIȚIUL 5: Traducere Română → Germană
// ============================================
const ex5Data = [
    {
        id: 'a',
        ro: 'Eu sunt Ana.',
        correct: 'Ich bin Ana.',
        accept: ['ich bin ana.', 'ich bin ana']
    },
    {
        id: 'b',
        ro: 'Tu ești student.',
        correct: 'Du bist Student.',
        accept: ['du bist student.', 'du bist student']
    },
    {
        id: 'c',
        ro: 'El are sete.',
        correct: 'Er hat Durst.',
        accept: ['er hat durst.', 'er hat durst']
    },
    {
        id: 'd',
        ro: 'Ea vine din Berlin.',
        correct: 'Sie kommt aus Berlin.',
        accept: ['sie kommt aus berlin.', 'sie kommt aus berlin']
    },
    {
        id: 'e',
        ro: 'Noi învățăm germana.',
        correct: 'Wir lernen Deutsch.',
        accept: ['wir lernen deutsch.', 'wir lernen deutsch']
    },
    {
        id: 'f',
        ro: 'Voi mergeți la cinema.',
        correct: 'Ihr geht ins Kino.',
        accept: ['ihr geht ins kino.', 'ihr geht ins kino']
    },
    {
        id: 'g',
        ro: 'Ei locuiesc aici.',
        correct: 'Sie wohnen hier.',
        accept: ['sie wohnen hier.', 'sie wohnen hier']
    },
    {
        id: 'h',
        ro: 'Dumneavoastră sunteți domnul Müller.',
        correct: 'Sie sind Herr Müller.',
        accept: ['sie sind herr müller.', 'sie sind herr müller', 'sie sind herr mueller.', 'sie sind herr mueller']
    }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;

    let html = `
        <div class="exercise-instruction">
            <strong>📝 Übersetzen Sie ins Deutsche.</strong><br>
            Traduceți în germană folosind pronumele personal potrivit.
        </div>
    `;

    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>🇷🇴 ${item.ro}</label>
                    <input type="text" id="ex5-${item.id}" placeholder="Traducere în germană...">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;

    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const feedback = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = input.value.trim().toLowerCase().replace(/\s+/g, ' ');

        const isCorrect = item.accept.some(a => a === userAnswer);

        if (isCorrect) {
            feedback.className = 'feedback correct';
            feedback.textContent = item.correct;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct}`;
        }
    });

    return { correct, total };
}

// ============================================
// BUILD ALL EXERCISES
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    buildEx1();
    buildEx2();
    buildEx3();
    buildEx4();
    buildEx5();
});

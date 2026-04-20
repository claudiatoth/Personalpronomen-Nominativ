// ============================================
// TEST FINAL - Personalpronomen im Nominativ
// Claudia Toth · 15 întrebări mixte
// ============================================

const finalTestData = [
    // ============================================
    // BLOC 1: MATCHING (subiect → pronume)
    // ============================================
    {
        type: 'matching',
        category: '📋 Identificare pronume',
        question: 'Care este pronumele corect pentru acest subiect?',
        nomen: 'Tim und Anna',
        options: ['er', 'sie (ea)', 'sie (ei/ele)', 'wir'],
        correct: 'sie (ei/ele)',
        explanation: 'Două persoane → persoana a 3-a plural → sie'
    },
    {
        type: 'matching',
        category: '📋 Identificare pronume',
        question: 'Care este pronumele corect pentru acest subiect?',
        nomen: 'das Mädchen',
        options: ['sie', 'es', 'er', 'ihr'],
        correct: 'es',
        explanation: '"das Mädchen" (neutru) → es, nu sie! Genul gramatical dictează pronumele'
    },
    {
        type: 'matching',
        category: '📋 Identificare pronume',
        question: 'Care este pronumele corect pentru acest subiect?',
        nomen: 'Paul und ich',
        options: ['ihr', 'wir', 'sie', 'Sie'],
        correct: 'wir',
        explanation: '"Paul și eu" → persoana 1 plural → wir'
    },
    {
        type: 'matching',
        category: '📋 Identificare pronume',
        question: 'Care este pronumele corect pentru acest subiect?',
        nomen: 'die Lampe',
        options: ['es', 'er', 'sie', 'ihr'],
        correct: 'sie',
        explanation: '"die Lampe" (feminin) → sie'
    },

    // ============================================
    // BLOC 2: LÜCKENTEXT
    // ============================================
    {
        type: 'luckentext',
        category: '📝 Lückentext',
        question: 'Completați cu pronumele potrivit:',
        sentence: '___ bin 25 Jahre alt.',
        translation: 'Eu am 25 de ani.',
        accept: ['ich'],
        correct: 'Ich',
        explanation: 'Subiectul "eu" → ich (întotdeauna cu majusculă la început de propoziție)'
    },
    {
        type: 'luckentext',
        category: '📝 Lückentext',
        question: 'Completați cu pronumele potrivit:',
        sentence: 'Das ist Paul. ___ kommt aus Wien.',
        translation: 'Acesta este Paul. El vine din Viena.',
        accept: ['er'],
        correct: 'Er',
        explanation: 'Paul → o persoană masculină → er'
    },
    {
        type: 'luckentext',
        category: '📝 Lückentext',
        question: 'Completați cu pronumele potrivit:',
        sentence: 'Tim, Lisa, habt ___ Hunger?',
        translation: 'Tim, Lisa, vă este foame (vouă)?',
        accept: ['ihr'],
        correct: 'ihr',
        explanation: 'Adresare informală către 2 persoane → ihr'
    },
    {
        type: 'luckentext',
        category: '📝 Lückentext',
        question: 'Completați cu pronumele potrivit:',
        sentence: 'Das Buch ist interessant. ___ ist neu.',
        translation: 'Cartea este interesantă. Este nouă.',
        accept: ['es'],
        correct: 'Es',
        explanation: '"das Buch" (neutru) → es'
    },

    // ============================================
    // BLOC 3: MULTIPLE CHOICE (du / ihr / Sie)
    // ============================================
    {
        type: 'multiple',
        category: '✅ Multiple Choice',
        question: 'Vorbești cu directorul firmei. Ce pronume folosești?',
        options: ['du', 'ihr', 'Sie'],
        correct: 'Sie',
        explanation: '"Sie" — adresare formală, respect profesional'
    },
    {
        type: 'multiple',
        category: '✅ Multiple Choice',
        question: 'Vorbești cu fratele tău mai mic. Ce pronume folosești?',
        options: ['du', 'Sie', 'ihr'],
        correct: 'du',
        explanation: '"du" — familie, informal'
    },
    {
        type: 'multiple',
        category: '✅ Multiple Choice',
        question: 'Vorbești cu mai mulți prieteni. Ce pronume folosești?',
        options: ['Sie', 'ihr', 'du'],
        correct: 'ihr',
        explanation: '"ihr" — pluralul informal, prieteni apropiați'
    },

    // ============================================
    // BLOC 4: TRADUCERE Română → Germană
    // ============================================
    {
        type: 'translate',
        category: '🇷🇴 Traducere',
        question: 'Traduceți în germană:',
        ro: 'Tu ești student.',
        accept: ['du bist student.', 'du bist student'],
        correct: 'Du bist Student.',
        explanation: 'tu → du; verbul "sein" la persoana a 2-a sg. → bist'
    },
    {
        type: 'translate',
        category: '🇷🇴 Traducere',
        question: 'Traduceți în germană:',
        ro: 'Noi învățăm germana.',
        accept: ['wir lernen deutsch.', 'wir lernen deutsch'],
        correct: 'Wir lernen Deutsch.',
        explanation: 'noi → wir; verb la pers. 1 pl. → lernen'
    },
    {
        type: 'translate',
        category: '🇷🇴 Traducere',
        question: 'Traduceți în germană:',
        ro: 'El are sete.',
        accept: ['er hat durst.', 'er hat durst'],
        correct: 'Er hat Durst.',
        explanation: 'el → er; "haben" la pers. 3 sg. → hat'
    },
    {
        type: 'translate',
        category: '🇷🇴 Traducere',
        question: 'Traduceți în germană (adresare formală):',
        ro: 'Dumneavoastră sunteți drăguț.',
        accept: ['sie sind nett.', 'sie sind nett'],
        correct: 'Sie sind nett.',
        explanation: '"Sie" (politețe) + "sind" (aceeași formă ca ei/ele)'
    }
];

// ============================================
// STATE
// ============================================
let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

// ============================================
// BUILD - Container principal
// ============================================
function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;

    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Acest test final conține <strong>15 întrebări mixte</strong> (matching, lückentext, multiple choice, traducere) despre pronumele personale la Nominativ.</p>
            <ul class="test-info-list">
                <li>📋 <strong>Format:</strong> o întrebare pe pagină, cu navigare Înapoi / Următor</li>
                <li>✅ <strong>Verificare:</strong> feedback instant la fiecare întrebare</li>
                <li>🎓 <strong>Prag de promovare:</strong> 70%</li>
                <li>⏱️ <strong>Timp estimat:</strong> 8-12 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>

        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar">
                    <div class="test-progress-fill" id="progress-fill"></div>
                </div>
            </div>

            <div id="question-container"></div>

            <div class="feedback" id="test-feedback"></div>

            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>

        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};

    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';

    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');

    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;

    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';

    feedback.className = 'feedback';
    feedback.textContent = '';

    let questionHTML = '';

    if (q.type === 'matching') {
        let optionsHTML = '<option value="">-- alege pronumele --</option>';
        q.options.forEach(opt => {
            optionsHTML += `<option value="${opt}">${opt}</option>`;
        });
        questionHTML = `
            <div class="test-question">
                <div class="test-question-label">${q.question}</div>
                <div class="test-question-content">
                    <span class="nomen-highlight">${q.nomen}</span> → ?
                </div>
                <select id="test-answer" class="test-input">${optionsHTML}</select>
            </div>
        `;
    } else if (q.type === 'luckentext') {
        questionHTML = `
            <div class="test-question">
                <div class="test-question-label">${q.question}</div>
                <div class="test-question-content">${q.sentence}</div>
                <small class="test-translation">💬 ${q.translation}</small>
                <input type="text" id="test-answer" class="test-input" placeholder="Scrie pronumele...">
            </div>
        `;
    } else if (q.type === 'multiple') {
        let optionsHTML = '';
        q.options.forEach((opt, i) => {
            optionsHTML += `
                <div class="mc-option">
                    <input type="radio" name="test-answer" value="${opt}" id="test-opt-${i}">
                    <label for="test-opt-${i}">${opt}</label>
                </div>
            `;
        });
        questionHTML = `
            <div class="test-question">
                <div class="test-question-label">${q.question}</div>
                <div class="mc-options test-mc">${optionsHTML}</div>
            </div>
        `;
    } else if (q.type === 'translate') {
        questionHTML = `
            <div class="test-question">
                <div class="test-question-label">${q.question}</div>
                <div class="test-question-content test-ro-text">🇷🇴 ${q.ro}</div>
                <input type="text" id="test-answer" class="test-input" placeholder="Traducere în germană...">
            </div>
        `;
    }

    container.innerHTML = questionHTML;

    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            const radio = document.querySelector(`input[name="test-answer"][value="${userAnswers[index].answer}"]`);
            if (radio) radio.checked = true;
        } else {
            const input = document.getElementById('test-answer');
            if (input) input.value = userAnswers[index].answer;
        }

        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';

    if (q.type === 'multiple') {
        const selected = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = selected ? selected.value : '';
    } else {
        const input = document.getElementById('test-answer');
        userAnswer = input ? input.value.trim() : '';
    }

    if (!userAnswer) {
        const feedback = document.getElementById('test-feedback');
        feedback.className = 'feedback incorrect';
        feedback.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }

    let isCorrect = false;

    if (q.type === 'multiple' || q.type === 'matching') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const userAnswerNorm = userAnswer.toLowerCase().replace(/\s+/g, ' ');
        isCorrect = q.accept.some(a => a.toLowerCase() === userAnswerNorm);
    }

    userAnswers[currentQuestionIndex] = {
        answer: userAnswer,
        correct: isCorrect,
        checked: true
    };

    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const feedback = document.getElementById('test-feedback');

    if (ans.correct) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
    } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function scrollToTest() {
    const wizard = document.getElementById('test-wizard');
    if (wizard) wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;

    let correct = 0;
    finalTestData.forEach((q, i) => {
        if (userAnswers[i] && userAnswers[i].correct) correct++;
    });

    const total = finalTestData.length;
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 70;

    let emoji, message, messageRo, badge;
    if (percentage === 100) {
        emoji = '🏆'; badge = 'PERFEKT!';
        message = 'Ausgezeichnete Leistung! Du beherrschst die Personalpronomen perfekt.';
        messageRo = 'Performanță excelentă! Stăpânești perfect pronumele personale.';
    } else if (percentage >= 90) {
        emoji = '⭐'; badge = 'AUSGEZEICHNET';
        message = 'Sehr gut! Du hast fast alles richtig gemacht.';
        messageRo = 'Foarte bine! Aproape totul corect.';
    } else if (percentage >= 80) {
        emoji = '🎓'; badge = 'SEHR GUT';
        message = 'Sehr gute Leistung! Nur ein paar kleine Lücken.';
        messageRo = 'Performanță foarte bună! Doar mici lacune.';
    } else if (percentage >= 70) {
        emoji = '✅'; badge = 'BESTANDEN';
        message = 'Bestanden! Du hast die Mindestpunktzahl erreicht. Übe noch ein wenig für Perfektion!';
        messageRo = 'Promovat! Ai atins pragul minim. Mai exersează puțin pentru perfecțiune!';
    } else if (percentage >= 50) {
        emoji = '📚'; badge = 'NICHT BESTANDEN';
        message = 'Leider nicht bestanden. Du brauchst mindestens 70%. Wiederhole die Theorie!';
        messageRo = 'Din păcate, nepromovat. Ai nevoie de minim 70%. Repetă teoria!';
    } else {
        emoji = '💪'; badge = 'WEITER ÜBEN';
        message = 'Mehr Übung ist nötig. Geh zurück zur Theorie und übe die einzelnen Übungen nochmal!';
        messageRo = 'E nevoie de mai multă exersare. Întoarce-te la teorie și exersează!';
    }

    const categoryStats = {};
    finalTestData.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].total++;
        if (userAnswers[i] && userAnswers[i].correct) categoryStats[cat].correct++;
    });

    let statsHTML = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const cat in categoryStats) {
        const s = categoryStats[cat];
        const catPct = Math.round((s.correct / s.total) * 100);
        statsHTML += `<li>${cat}: <strong>${s.correct}/${s.total}</strong> (${catPct}%)</li>`;
    }
    statsHTML += '</ul></div>';

    let mistakesHTML = '';
    const mistakes = [];
    finalTestData.forEach((q, i) => {
        if (userAnswers[i] && !userAnswers[i].correct) {
            mistakes.push({ q, i, userAns: userAnswers[i].answer });
        }
    });

    if (mistakes.length > 0) {
        mistakesHTML = '<div class="test-mistakes"><h4>📝 Întrebările greșite (revezi):</h4>';
        mistakes.forEach(m => {
            mistakesHTML += `
                <div class="mistake-item">
                    <strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br>
                    <span style="color: #991b1b;">Răspunsul tău: <em>${m.userAns}</em></span><br>
                    <span style="color: #065f46;">Corect: <strong>${m.q.correct}</strong></span><br>
                    <small style="color: #6b7280;">${m.q.explanation}</small>
                </div>
            `;
        });
        mistakesHTML += '</div>';
    }

    const wizard = document.getElementById('test-wizard');
    const results = document.getElementById('test-results');

    wizard.style.display = 'none';
    results.style.display = 'block';

    results.innerHTML = `
        <div class="test-back-top">
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>

        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${percentage}%</div>
            <div class="test-result-message">
                <p><strong>${message}</strong></p>
                <p style="margin-top: 8px;">${messageRo}</p>
            </div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>

        ${statsHTML}
        ${mistakesHTML}

        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;

    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul? Toate răspunsurile vor fi șterse.')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;

        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const teorieContent = document.getElementById('main-section-0');
    const arrow = document.querySelectorAll('.arrow')[0];
    if (teorieContent && !teorieContent.classList.contains('active')) {
        teorieContent.classList.add('active');
        if (arrow) arrow.classList.add('rotated');
    }

    const teorieSection = document.getElementById('teorie');
    if (teorieSection) {
        teorieSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    buildFinalTest();
});

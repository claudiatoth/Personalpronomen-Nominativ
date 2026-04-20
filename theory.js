// ============================================
// TEORIE - PERSONALPRONOMEN IM NOMINATIV
// Claudia Toth · Nivel A1
// ============================================

const theoryHTML = `
    <!-- Sub-secțiune 0: Ce sunt? -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Ce sunt Personalpronomen?</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="theory-box">
                <h4>Definiție</h4>
                <p><strong>Personalpronomen</strong> (pronumele personale) sunt cuvinte scurte care <strong>înlocuiesc un nume, o persoană sau un lucru</strong>, ca să nu repetăm mereu același substantiv.</p>
                <p style="margin-top: 10px;">În această lecție învățăm pronumele la <strong>Nominativ</strong> — cazul subiectului, care răspunde la întrebarea <strong>"Wer?"</strong> (Cine?) sau <strong>"Was?"</strong> (Ce?).</p>
            </div>

            <div class="example-box">
                <p class="de">Das ist <u>Tim</u>. <strong>Er</strong> kommt aus Deutschland.</p>
                <p class="ro">Acesta este Tim. El vine din Germania.</p>
            </div>
            <div class="example-box">
                <p class="de">Das ist <u>Anna</u>. <strong>Sie</strong> wohnt in Berlin.</p>
                <p class="ro">Aceasta este Anna. Ea locuiește în Berlin.</p>
            </div>
            <div class="example-box">
                <p class="de">Das ist <u>das Auto</u>. <strong>Es</strong> ist neu.</p>
                <p class="ro">Aceasta este mașina. Ea este nouă.</p>
            </div>

            <div class="theory-box">
                <h4>⚠️ De ce sunt importante?</h4>
                <ul>
                    <li>Sunt <strong>primul pas</strong> în conjugarea verbelor</li>
                    <li>Fără ele nu poți forma propoziții — apar în <strong>fiecare propoziție</strong></li>
                    <li>Folosirea greșită (<em>du</em> în loc de <em>Sie</em>) poate fi <strong>nepoliticoasă</strong></li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Sub-secțiune 1: Tabelul complet -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📋 2. Tabelul pronumelor la Nominativ</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <table class="theory-table">
                <thead>
                    <tr>
                        <th>Persoană</th>
                        <th>Germană</th>
                        <th>Română</th>
                        <th>Exemplu</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><strong>1. sg.</strong></td><td class="verb">ich</td><td class="ro-text">eu</td><td><em>Ich bin Anna.</em></td></tr>
                    <tr><td><strong>2. sg.</strong></td><td class="verb">du</td><td class="ro-text">tu</td><td><em>Du bist nett.</em></td></tr>
                    <tr><td><strong>3. sg. m.</strong></td><td class="verb">er</td><td class="ro-text">el</td><td><em>Er heißt Tim.</em></td></tr>
                    <tr><td><strong>3. sg. f.</strong></td><td class="verb">sie</td><td class="ro-text">ea</td><td><em>Sie kommt aus Spanien.</em></td></tr>
                    <tr><td><strong>3. sg. n.</strong></td><td class="verb">es</td><td class="ro-text">el/ea (pt. neutru)</td><td><em>Es ist schön.</em></td></tr>
                    <tr><td><strong>1. pl.</strong></td><td class="verb">wir</td><td class="ro-text">noi</td><td><em>Wir lernen Deutsch.</em></td></tr>
                    <tr><td><strong>2. pl.</strong></td><td class="verb">ihr</td><td class="ro-text">voi</td><td><em>Ihr geht ins Kino.</em></td></tr>
                    <tr><td><strong>3. pl.</strong></td><td class="verb">sie</td><td class="ro-text">ei / ele</td><td><em>Sie wohnen hier.</em></td></tr>
                    <tr style="background: #fef3c7;"><td><strong>politețe</strong></td><td class="verb">Sie</td><td class="ro-text">Dvs. (sg. + pl.)</td><td><em>Sie sind Herr Müller.</em></td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>🔑 Trei observații cheie</h4>
                <ul>
                    <li><strong>"sie"</strong> apare de <u>trei ori</u>! Dar înțelesul diferă: <em>sie</em> = ea (sg.), <em>sie</em> = ei/ele (pl.), <em>Sie</em> = Dvs. (politețe)</li>
                    <li><strong>"Sie"</strong> (politețe) se scrie <u>întotdeauna</u> cu majusculă — și la începutul și la mijlocul propoziției</li>
                    <li>Există <strong>3 forme pentru "tu/voi"</strong>: <em>du</em> (tu, informal), <em>ihr</em> (voi, informal), <em>Sie</em> (Dvs., formal — sg. sau pl.)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Sub-secțiune 2: du / ihr / Sie -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🤝 3. Diferența du / ihr / Sie (informal vs. formal)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="theory-box">
                <h4>Regula de aur</h4>
                <p>În germană există o distincție <strong>strictă</strong> între adresarea informală și cea formală — mai strictă decât în română. Dacă greșești, poți părea nepoliticos.</p>
            </div>

            <table class="theory-table">
                <thead>
                    <tr>
                        <th>Pronume</th>
                        <th>Folosit pentru</th>
                        <th>Situații</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="verb">du</td>
                        <td>O <strong>persoană</strong>, informal</td>
                        <td>Prieteni, familie, copii, colegi apropiați, tineri între ei</td>
                    </tr>
                    <tr>
                        <td class="verb">ihr</td>
                        <td><strong>Mai multe persoane</strong>, informal</td>
                        <td>Pluralul lui "du" — mai mulți prieteni, familie, copii</td>
                    </tr>
                    <tr>
                        <td class="verb">Sie</td>
                        <td><strong>Una sau mai multe</strong> persoane, formal</td>
                        <td>Necunoscuți, profesori, șefi, clienți, persoane în vârstă, situații oficiale</td>
                    </tr>
                </tbody>
            </table>

            <div class="example-box">
                <p class="de">👫 Zu einem Freund: "<strong>Du</strong> bist nett."</p>
                <p class="ro">Către un prieten: "Ești drăguț."</p>
            </div>
            <div class="example-box">
                <p class="de">👨‍👩‍👧 Zu mehreren Freunden: "<strong>Ihr</strong> seid nett."</p>
                <p class="ro">Către mai mulți prieteni: "Sunteți drăguți."</p>
            </div>
            <div class="example-box">
                <p class="de">👔 Zu einem Fremden/Chef: "<strong>Sie</strong> sind nett."</p>
                <p class="ro">Către un necunoscut/șef: "Sunteți drăguț(ă)." (politețe)</p>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6;">
                <h4>💡 Regula practică pentru începători</h4>
                <p><strong>La prima întâlnire cu un adult necunoscut → folosește <u>Sie</u>.</strong></p>
                <p style="margin-top: 8px;">Doar când celălalt îți propune "Duzen wir uns?" (Să ne tutuim?) poți trece la <em>du</em>.</p>
            </div>
        </div>
    </div>

    <!-- Sub-secțiune 3: er/sie/es după gen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🎭 4. er / sie / es — după genul substantivului</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="theory-box">
                <h4>Regula: pronumele urmează genul gramatical, nu sexul biologic!</h4>
                <p>Când înlocuim un <strong>lucru</strong>, pronumele depinde de articolul substantivului:</p>
                <ul style="margin-top: 10px;">
                    <li><strong>der</strong> (masculin) → <span class="verb">er</span></li>
                    <li><strong>die</strong> (feminin) → <span class="verb">sie</span></li>
                    <li><strong>das</strong> (neutru) → <span class="verb">es</span></li>
                </ul>
            </div>

            <table class="theory-table">
                <thead>
                    <tr>
                        <th>Substantiv</th>
                        <th>Pronume</th>
                        <th>Exemplu</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td class="nomen">der Tisch (masa)</td><td class="verb">er</td><td><em>Er ist neu.</em></td></tr>
                    <tr><td class="nomen">der Mann</td><td class="verb">er</td><td><em>Er ist groß.</em></td></tr>
                    <tr><td class="nomen">die Lampe (lampa)</td><td class="verb">sie</td><td><em>Sie ist rot.</em></td></tr>
                    <tr><td class="nomen">die Frau</td><td class="verb">sie</td><td><em>Sie ist freundlich.</em></td></tr>
                    <tr><td class="nomen">das Buch (cartea)</td><td class="verb">es</td><td><em>Es ist interessant.</em></td></tr>
                    <tr style="background: #fef3c7;"><td class="nomen">das Mädchen (fata!)</td><td class="verb">es</td><td><em>Es ist jung.</em></td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>⚠️ Surpriza: "das Mädchen" = es (nu sie!)</h4>
                <p>În germană, <strong>genul gramatical</strong> nu coincide mereu cu sexul biologic:</p>
                <ul style="margin-top: 8px;">
                    <li><em>das Mädchen</em> (fata) → <strong>es</strong> (pentru că e "das")</li>
                    <li><em>das Kind</em> (copilul) → <strong>es</strong></li>
                    <li><em>das Baby</em> → <strong>es</strong></li>
                </ul>
                <p style="margin-top: 8px;">🇷🇴 În română zicem "masa → ea", "tabloul → el". În germană: "der Tisch → er", "das Bild → es". <strong>Articolul dictează pronumele!</strong></p>
            </div>
        </div>
    </div>

    <!-- Sub-secțiune 4: Conjugare sein / haben -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🔗 5. Pronume + verbul "sein" / "haben"</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="theory-box">
                <h4>Fiecare pronume cere o formă verbală proprie</h4>
                <p>Spre deosebire de engleză (I am, you are, he is...), <strong>germana schimbă verbul la fiecare persoană</strong>. Aici sunt cele două verbe esențiale:</p>
            </div>

            <table class="theory-table">
                <thead>
                    <tr>
                        <th>Pronume</th>
                        <th>sein (a fi)</th>
                        <th>haben (a avea)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td class="verb">ich</td><td><strong>bin</strong></td><td><strong>habe</strong></td></tr>
                    <tr><td class="verb">du</td><td><strong>bist</strong></td><td><strong>hast</strong></td></tr>
                    <tr><td class="verb">er/sie/es</td><td><strong>ist</strong></td><td><strong>hat</strong></td></tr>
                    <tr><td class="verb">wir</td><td><strong>sind</strong></td><td><strong>haben</strong></td></tr>
                    <tr><td class="verb">ihr</td><td><strong>seid</strong></td><td><strong>habt</strong></td></tr>
                    <tr><td class="verb">sie / Sie</td><td><strong>sind</strong></td><td><strong>haben</strong></td></tr>
                </tbody>
            </table>

            <div class="example-box">
                <p class="de"><strong>Ich bin</strong> Anne. <strong>Du bist</strong> Student. <strong>Er hat</strong> Durst.</p>
                <p class="ro">Eu sunt Anne. Tu ești student. Lui îi este sete.</p>
            </div>
            <div class="example-box">
                <p class="de"><strong>Wir sind</strong> müde. <strong>Ihr habt</strong> Hunger. <strong>Sie sind</strong> glücklich.</p>
                <p class="ro">Noi suntem obosiți. Vouă vă este foame. Ei sunt fericiți.</p>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6;">
                <h4>💡 Trucul memoriei</h4>
                <p><strong>wir</strong>, <strong>sie</strong> (ei/ele) și <strong>Sie</strong> (Dvs.) au <u>aceeași</u> formă verbală: <em>sind</em>, <em>haben</em>, etc.</p>
                <p style="margin-top: 8px;">E o veste bună — învățând o formă, știi trei pronume deodată!</p>
            </div>
        </div>
    </div>

    <!-- Sub-secțiune 5: Capcane pentru români -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🇷🇴 6. Capcane pentru vorbitorii de română</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="theory-box" style="background: #fee2e2; border-color: #ef4444;">
                <h4>⚠️ Capcana 1: Pronumele nu se poate omite!</h4>
                <p>În română putem zice <em>"Sunt Ana"</em> (fără "eu"). În <strong>germana pronumele este obligatoriu</strong>:</p>
                <ul style="margin-top: 8px;">
                    <li>🇷🇴 "Sunt Ana." → 🇩🇪 <strong>Ich</strong> bin Ana. (NU doar "Bin Ana.")</li>
                    <li>🇷🇴 "Vine din Berlin." → 🇩🇪 <strong>Er</strong> kommt aus Berlin. (NU "Kommt aus Berlin.")</li>
                </ul>
            </div>

            <div class="theory-box" style="background: #fee2e2; border-color: #ef4444;">
                <h4>⚠️ Capcana 2: "Sie" cu majusculă = politețe</h4>
                <p>Cele trei "sie" se disting prin context și majusculă:</p>
                <ul style="margin-top: 8px;">
                    <li><em>sie</em> cu minusculă + verb la sg. (ist, hat) → <strong>ea</strong></li>
                    <li><em>sie</em> cu minusculă + verb la pl. (sind, haben) → <strong>ei/ele</strong></li>
                    <li><em>Sie</em> cu MAJUSCULĂ mereu → <strong>Dvs.</strong> (politețe)</li>
                </ul>
                <p style="margin-top: 8px;">Exemple comparate:</p>
                <ul>
                    <li><em>Sie <strong>ist</strong> nett.</em> → Ea este drăguță. (la început de propoziție → tot cu majusculă, verdict după verb)</li>
                    <li><em>Sie <strong>sind</strong> nett.</em> → Ei/ele sunt drăguți <strong>sau</strong> Dvs. sunteți drăguț. (context!)</li>
                </ul>
            </div>

            <div class="theory-box" style="background: #fee2e2; border-color: #ef4444;">
                <h4>⚠️ Capcana 3: "das Mädchen" ≠ sie</h4>
                <p>Tentația e să zici <em>"Das Mädchen... sie ist schön."</em> — dar <strong>corect</strong> este:</p>
                <p style="margin-top: 8px;"><strong>"Das Mädchen... es ist schön."</strong> (articolul das dictează es)</p>
            </div>

            <div class="theory-box" style="background: #fee2e2; border-color: #ef4444;">
                <h4>⚠️ Capcana 4: "du" vs. "Sie" nu e la fel ca "tu" vs. "dumneavoastră"</h4>
                <p>În română spunem "dumneavoastră" mai rar. În germană, <strong>"Sie" este regula, nu excepția</strong>, între adulți care nu se cunosc.</p>
                <ul style="margin-top: 8px;">
                    <li>La magazin, la medic, în autobuz cu un străin → <strong>Sie</strong></li>
                    <li>Profesor nou, șef, client → <strong>Sie</strong></li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Sub-secțiune 6: Strategii -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>💡 7. Strategii de învățare</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="theory-box">
                <h4>🔑 Cum să memorezi rapid</h4>
                <ul>
                    <li><strong>Învață cu verbul, nu izolat</strong> — spune "ich bin, du bist, er ist..." ca pe o rimă</li>
                    <li><strong>Asociază cu persoane reale</strong> — "ich = eu", "du = cel mai bun prieten", "er = tata", "sie = mama"</li>
                    <li><strong>Exersează cu voce tare</strong> — citește tabelul zilnic 2-3 minute</li>
                    <li><strong>Fă flashcards</strong> — germană pe o parte, română pe cealaltă</li>
                </ul>
            </div>

            <div class="theory-box">
                <h4>🧠 Mnemonice utile</h4>
                <ul>
                    <li><strong>"Drei sie, drei sind"</strong> — cele 3 "sie" merg cu forme pl. (sind): <em>sie sind</em> (ei), <em>Sie sind</em> (Dvs.)... doar <em>sie ist</em> (ea) face excepția</li>
                    <li><strong>"ihr seid" = "voi sunteți"</strong> — rețineți-l împreună, e forma unică</li>
                    <li><strong>der→er, die→sie, das→es</strong> — ultimele 2 litere se păstrează: d<u>er</u> → <u>er</u>, di<u>e</u> → si<u>e</u>, da<u>s</u> → e<u>s</u></li>
                </ul>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6;">
                <h4>📝 Exersează zilnic</h4>
                <p>Descrie 5 oameni/obiecte în jurul tău folosind pronume:</p>
                <ul style="margin-top: 8px;">
                    <li><em>Das ist mein Vater. <strong>Er</strong> ist Lehrer.</em></li>
                    <li><em>Das ist meine Schwester. <strong>Sie</strong> ist 10 Jahre alt.</em></li>
                    <li><em>Das ist mein Telefon. <strong>Es</strong> ist neu.</em></li>
                </ul>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) {
        container.innerHTML = theoryHTML;
    }
});

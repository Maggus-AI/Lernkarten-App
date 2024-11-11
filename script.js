const cards = [
  {
    question: "Was ist der Zweck des `<body>`-Tags in HTML?",
    choices: [
      "Definiert das Dokument",
      "Beinhaltet den sichtbaren Inhalt",
      "Beinhaltet Metadaten",
    ],
    answer: 1,
  },
  {
    question: "Welches Attribut wird verwendet, um ein Bild einzufügen?",
    choices: ["<image>", "<img>", "src"],
    answer: 2,
  },
  {
    question: "Was ist der Zweck des `<nav>`-Tags?",
    choices: [
      "Definiert einen Navigationsbereich",
      "Beinhaltet den Textinhalt",
      "Definiert ein Bild",
    ],
    answer: 0,
  },
  {
    question: "Was ist der Zweck des `<nav>`-Tags in HTML?",
    choices: [
      "Zum Darstellen eines Bildes",
      "Zum Erstellen einer Navigation",
      "Zum Einfügen eines Links",
    ],
    answer: 1,
  },
  {
    question: "Welche Funktion hat der `<style>`-Tag in HTML?",
    choices: [
      "Definiert die Struktur des Inhalts",
      "Fügt CSS für die Gestaltung hinzu",
      "Erstellt eine JavaScript-Funktion",
    ],
    answer: 1,
  },
  {
    question: "Was bewirkt `border-radius: 8px;` in CSS?",
    choices: [
      "Erstellt einen runden Rahmen",
      "Rundet die Ecken des Elements ab",
      "Ändert die Hintergrundfarbe",
    ],
    answer: 1,
  },
  {
    question: "Was bedeutet der Wert `1.6` bei `line-height: 1.6;` in CSS?",
    choices: [
      "Definiert die Schriftgröße",
      "Erhöht den Abstand zwischen den Zeilen",
      "Erstellt einen Rand",
    ],
    answer: 1,
  },
  {
    question: "Wofür wird der `padding`-Wert in CSS verwendet?",
    choices: [
      "Erstellt einen Abstand außerhalb des Elements",
      "Erstellt einen Abstand innerhalb des Elements",
      "Ändert die Schriftart",
    ],
    answer: 1,
  },
  {
    question:
      "Wie stellt man in einer geordneten Liste Unterpunkte wie 1.1 und 1.2 dar?",
    choices: [
      "Durch verschachtelte `<ol>`-Listen",
      "Durch `<ul>`-Listen",
      "Durch den `<nav>`-Tag",
    ],
    answer: 0,
  },
  {
    question: "Was macht `position: absolute;` bei einem Element in CSS?",
    choices: [
      "Fixiert das Element beim Scrollen",
      "Positioniert das Element relativ zu seinem Container",
      "Positioniert das Element relativ zum nächstgelegenen übergeordneten Element mit `position`",
    ],
    answer: 2,
  },
  {
    question: "Wofür wird `font-family: Arial, sans-serif;` in CSS verwendet?",
    choices: [
      "Legt die Hintergrundfarbe fest",
      "Setzt die Schriftgröße",
      "Definiert die Schriftart",
    ],
    answer: 2,
  },
  {
    question:
      "Welcher CSS-Eigenschaft wird verwendet, um eine graue Rahmenlinie um ein Bild zu setzen?",
    choices: ["`border`", "`background-color`", "`font-family`"],
    answer: 0,
  },
  {
    question: "Welcher HTML-Tag definiert die Hauptsprache des Dokuments?",
    choices: ["`<meta charset='UTF-8'>`", "`<html lang='de'>`", "`<title>`"],
    answer: 1,
  },
  {
    question: "Was bedeutet `box-shadow` in CSS?",
    choices: [
      "Fügt dem Element einen Schatten hinzu",
      "Vergrößert das Element",
      "Ändert die Textfarbe",
    ],
    answer: 0,
  },
  {
    question:
      "Wie positioniert man ein Element am unteren Rand seines Containers?",
    choices: ["Mit `margin: auto;`", "Mit `bottom: 0;`", "Mit `top: 100%;`"],
    answer: 1,
  },
  {
    question: "Was ist der Unterschied zwischen JavaScript und Java?",
    choices: [
      "JavaScript ist für Web-Anwendungen, Java für Android-Apps",
      "Java ist für Web-Entwicklung, JavaScript für Desktops",
      "Beides ist genau dasselbe",
    ],
    answer: 0,
  },
  {
    question: "Was macht `margin-bottom: 20px;` in CSS?",
    choices: [
      "Erstellt einen Abstand über dem Element",
      "Erstellt einen Abstand unterhalb des Elements",
      "Erstellt einen Rahmen um das Element",
    ],
    answer: 1,
  },
];

let currentCard = 0;

function showCard() {
  const card = cards[currentCard];
  document.getElementById("question").innerText = card.question;
  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";
  card.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.innerText = choice;
    button.onclick = () => checkAnswer(index);
    choicesContainer.appendChild(button);
  });
  document.getElementById("feedback").innerText = "";
}

function checkAnswer(selected) {
  const card = cards[currentCard];
  if (selected === card.answer) {
    document.getElementById("feedback").innerText = "Richtig!";
  } else {
    document.getElementById("feedback").innerText =
      "Falsch, versuche es nochmal.";
  }
}

function nextCard() {
  currentCard++;
  if (currentCard < cards.length) {
    showCard();
  } else {
    document.getElementById("question").innerText =
      "Gut gemacht! Du hast alle Fragen abgeschlossen.";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("next-button").style.display = "none";
  }
}

showCard();

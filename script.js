// script.js

// 🎨 Escena del día aleatoria
const scenes = [
  { title: "Buenos días, soñadora ☁️", description: "Es una mañana brillante para crear algo hermoso." },
  { title: "Noche de inspiración 🌙", description: "Perfecta para escribir y dejar volar tu mente." },
  { title: "Día lluvioso ✨", description: "Las gotas afuera te invitan a quedarte contigo misma." },
];
const randomScene = scenes[Math.floor(Math.random() * scenes.length)];
document.getElementById("scene-title").textContent = randomScene.title;
document.getElementById("scene-description").textContent = randomScene.description;

// ✅ Planner visual
function addTask() {
  const input = document.getElementById("taskInput");
  const list = document.getElementById("taskList");
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
  }
}

// 🎧 Main Character Mode
const quotes = [
  "Estás escribiendo el capítulo más bonito de tu historia.",
  "No eres tarde para nada. Estás en tu propio tiempo perfecto.",
  "Tu rutina también puede ser arte.",
];

function toggleMainCharacterMode() {
  const display = document.getElementById("quoteDisplay");
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  display.textContent = quote;
}

// 📖 Biblioteca emocional
function saveEntry() {
  const text = document.getElementById("diaryEntry").value;
  if (text.trim() !== "") {
    const entryDiv = document.createElement("div");
    entryDiv.className = "entry";
    entryDiv.textContent = text;
    document.getElementById("entryList").appendChild(entryDiv);
    document.getElementById("diaryEntry").value = "";
  }
}
// 🎬 DreamFrame: Modo Escena
function generateMovieScene() {
  const mood = document.getElementById("sceneMood").value;
  const result = document.getElementById("sceneResult");
  let output = "";

  switch (mood) {
    case "feliz":
      output = "🌞 Una escena brillante con risas, cámara lenta y una canción alegre.";
      break;
    case "nostálgico":
      output = "🍂 Filtros sepia, música de piano suave, recuerdos flotando como hojas.";
      break;
    case "dramático":
      output = "🌧️ Lluvia, close-ups intensos y una balada poderosa de fondo.";
      break;
    case "aesthetic":
      output = "✨ Tonos pastel, texto flotante, luces suaves y frases inspiradoras.";
      break;
  }

  result.textContent = output;
}

// 🧠 MemoryVerse: Diario audiovisual emocional
function createMemoryVerse() {
  const input = document.getElementById("memoryVerseInput").value;
  if (input.trim() !== "") {
    const entry = document.createElement("div");
    entry.className = "entry";
    entry.textContent = `🎞️ “${input}” fue archivado como una escena memorable.`;
    document.getElementById("memoryTimeline").appendChild(entry);
    document.getElementById("memoryVerseInput").value = "";
  }
}

// 🪄 Widgets mágicos
const moods = ["Feliz", "Cansada pero inspirada", "Melancólica creativa", "Caótica brillante"];
const quotes = [
  "Hoy es un buen día para ser tu versión más romántica.",
  "No es solo un lunes, es el inicio de tu capítulo favorito.",
  "Tu rutina también puede ser arte.",
  "La belleza está en los detalles que solo tú ves."
];

function updateWidgets() {
  const mood = moods[Math.floor(Math.random() * moods.length)];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("emotionalClock").textContent = `🕰️ Estado emocional: ${mood}`;
  document.getElementById("motivationalQuote").textContent = `✨ Frase del día: "${quote}"`;
}

updateWidgets();
// 🌅 Escena del día aleatoria
document.addEventListener("DOMContentLoaded", () => {
  const scenes = [
    { title: "Buenos días, soñadora ☁️", description: "Es una mañana brillante para crear algo hermoso." },
    { title: "Noche de inspiración 🌙", description: "Perfecta para escribir y dejar volar tu mente." },
    { title: "Día lluvioso ✨", description: "Las gotas afuera te invitan a quedarte contigo misma." },
  ];
  const randomScene = scenes[Math.floor(Math.random() * scenes.length)];
  document.getElementById("scene-title").textContent = randomScene.title;
  document.getElementById("scene-description").textContent = randomScene.description;

  updateWidgets(); // Inicializa los widgets mágicos
});

// ✅ PLANNER
document.getElementById("addTaskBtn").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  const list = document.getElementById("taskList");

  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;

    // Botón para eliminar tarea
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "🗑️";
    removeBtn.style.marginLeft = "1rem";
    removeBtn.addEventListener("click", () => li.remove());

    li.appendChild(removeBtn);
    list.appendChild(li);
    input.value = "";
  }
});

// 🎧 MAIN CHARACTER MODE
document.getElementById("mainCharacterBtn").addEventListener("click", () => {
  const quotes = [
    "Estás escribiendo el capítulo más bonito de tu historia.",
    "No eres tarde para nada. Estás en tu propio tiempo perfecto.",
    "Tu rutina también puede ser arte.",
    "Nadie puede hacer lo que tú haces como tú lo haces.",
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteDisplay").textContent = `🎬 ${quote}`;
});

// 📖 BIBLIOTECA EMOCIONAL
document.getElementById("saveEntryBtn").addEventListener("click", () => {
  const text = document.getElementById("diaryEntry").value;
  if (text.trim() !== "") {
    const entryDiv = document.createElement("div");
    entryDiv.className = "entry";
    entryDiv.textContent = text;
    document.getElementById("entryList").appendChild(entryDiv);
    document.getElementById("diaryEntry").value = "";
  }
});

// 🎬 DREAMFRAME - Modo Escena
document.getElementById("generateSceneBtn").addEventListener("click", () => {
  const mood = document.getElementById("sceneMood").value;
  const result = document.getElementById("sceneResult");

  let description = "";

  switch (mood) {
    case "feliz":
      description = "🌞 Una escena brillante con risas, cámara lenta y una canción alegre.";
      break;
    case "nostálgico":
      description = "🍂 Filtros sepia, música de piano suave, recuerdos flotando como hojas.";
      break;
    case "dramático":
      description = "🌧️ Lluvia, close-ups intensos y una balada poderosa de fondo.";
      break;
    case "aesthetic":
      description = "✨ Tonos pastel, texto flotante, luces suaves y frases inspiradoras.";
      break;
    default:
      description = "🎥 Escena emocional generada.";
  }

  result.textContent = description;
});

// 🧠 MEMORYVERSE - Diario audiovisual
document.getElementById("saveMemoryBtn").addEventListener("click", () => {
  const input = document.getElementById("memoryVerseInput").value;
  if (input.trim() !== "") {
    const entry = document.createElement("div");
    entry.className = "entry";
    entry.textContent = `🎞️ “${input}” fue archivado como una escena memorable.`;
    document.getElementById("memoryTimeline").appendChild(entry);
    document.getElementById("memoryVerseInput").value = "";
  }
});

// 🪄 EMOTIONAL WIDGETS
function updateWidgets() {
  const moods = ["Feliz", "Cansada pero inspirada", "Melancólica creativa", "Caótica brillante"];
  const quotes = [
    "Hoy es un buen día para ser tu versión más romántica.",
    "No es solo un lunes, es el inicio de tu capítulo favorito.",
    "Tu rutina también puede ser arte.",
    "La belleza está en los detalles que solo tú ves.",
  ];

  const mood = moods[Math.floor(Math.random() * moods.length)];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  document.getElementById("emotionalClock").textContent = `🕰️ Estado emocional: ${mood}`;
  document.getElementById("motivationalQuote").textContent = `✨ Frase del día: "${quote}"`;
}

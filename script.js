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

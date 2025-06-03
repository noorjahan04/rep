const gallery = document.getElementById("character-gallery");
const clock = document.getElementById("clock");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
let currentPage = 1;

function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-GB", { hour12: false });
  const dateStr = now.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  clock.textContent = `${timeStr} ${dateStr}`;
}
setInterval(updateClock, 1000);
updateClock();
function fetchCharacters(page = 1) {
  fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(res => res.json())
    .then(data => {
      gallery.innerHTML = "";
      const charactersToShow = data.results.slice(0, 6);
      charactersToShow.forEach(character => {
        const card = document.createElement("div");
        card.className = "character-card fade-in";
        card.innerHTML = `
          <img src="${character.image}" alt="${character.name}" />
          <h3>${character.name}</h3>
          <p>${character.species} - ${character.status}</p>
        `;
        card.onclick = () => {
          window.open(`detail.html?id=${character.id}`, "_blank");
        };
        gallery.appendChild(card);
      });
    });
}
fetchCharacters(currentPage);
nextBtn.onclick = () => {
  currentPage++;
  fetchCharacters(currentPage);
};

prevBtn.onclick = () => {
  if (currentPage > 1) {
    currentPage--;
    fetchCharacters(currentPage);
  }
};

const themeToggle = document.getElementById("theme-toggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
};

document.getElementById("random-btn").onclick = () => {
  const randomId = Math.floor(Math.random() * 826) + 1;
  window.open(`detail.html?id=${randomId}`, "_blank");
};

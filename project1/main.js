const API_URL = 'https://akabab.github.io/starwars-api/api/all.json';
const charactersPerPage = 6;
let characters = [];
let currentPage = 1;
const gallery = document.getElementById('gallery');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageNum = document.getElementById('pageNum');
const themeToggle = document.getElementById('themeToggle');
const randomBtn = document.getElementById('randomBtn');
fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    characters = data;
    renderPage();
  });
function renderPage() {
  gallery.innerHTML = '';
  const start = (currentPage - 1) * charactersPerPage;
  const end = start + charactersPerPage;
  const pageCharacters = characters.slice(start, end);
  pageCharacters.forEach(char => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${char.image}" alt="${char.name}">
      <h2>${char.name}</h2>
      <p>${char.species}</p>
      <p>${char.gender}</p>
    `;
    card.onclick = () => window.open(`character.html?id=${char.id}`, '_blank');
    gallery.appendChild(card);
  });
  pageNum.textContent = `Page ${currentPage}`;
}
prevBtn.onclick = () => {
  if (currentPage > 1) {
    currentPage--;
    renderPage();
  }
};
nextBtn.onclick = () => {
  if (currentPage * charactersPerPage < characters.length) {
    currentPage++;
    renderPage();
  }
};
randomBtn.onclick = () => {
  const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
  window.open(`character.html?id=${randomCharacter.id}`, '_blank');
};
themeToggle.onclick = () => {
  document.body.classList.toggle('dark');
};
setInterval(() => {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
  document.getElementById('footer-clock').textContent = `${time} ${date}`;
}, 1000);

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const API = `https://akabab.github.io/starwars-api/api/id/${id}.json`;
fetch(API)
  .then(res => res.json())
  .then(data => {
    const detailDiv = document.getElementById('character-detail');
    detailDiv.innerHTML = `
      <div class="detail">
        <img src="${data.image}" alt="${data.name}" />
        <h1>${data.name}</h1>
        <p><strong>Gender:</strong> ${data.gender}</p>
        <p><strong>Species:</strong> ${data.species}</p>
        <p><strong>Homeworld:</strong> ${data.homeworld}</p>
        <p><strong>Affiliations:</strong> ${data.affiliations.join(', ')}</p>
        <p><strong>Height:</strong> ${data.height} cm</p>
        <p><strong>Mass:</strong> ${data.mass} kg</p>
        <p><strong>Eye Color:</strong> ${data.eyeColor}</p>
        <p><strong>Hair Color:</strong> ${data.hairColor}</p>
        <p><strong>Skin Color:</strong> ${data.skinColor}</p>
      </div>
    `;
  });
document.getElementById('themeToggle').onclick = () => {
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

const detailContainer = document.getElementById("character-detail");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
function updateClockDetail() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-GB", { hour12: false });
  const dateStr = now.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  document.getElementById("clock").textContent = `${timeStr} ${dateStr}`;
}
setInterval(updateClockDetail, 1000);
updateClockDetail();
fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then(res => res.json())
  .then(character => {
    detailContainer.innerHTML = `
      <h1>${character.name}</h1>
      <img src="${character.image}" alt="${character.name}" style="max-width: 300px"/>
      <p><strong>Status:</strong> ${character.status}</p>
      <p><strong>Species:</strong> ${character.species}</p>
      <p><strong>Type:</strong> ${character.type || "N/A"}</p>
      <p><strong>Gender:</strong> ${character.gender}</p>
      <p><strong>Origin:</strong> ${character.origin.name}</p>
      <p><strong>Location:</strong> ${character.location.name}</p>
      <p><strong>Episodes:</strong> ${character.episode.length}</p>
    `;
  });

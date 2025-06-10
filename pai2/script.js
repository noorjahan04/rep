let apiUrl="https://rickandmortyapi.com/api/character";
let currentPage=1;
let searchQuery="";
let selectedStatus="";
let selectedSpecies="";
let debounceTimer;
let charactersDiv=document.getElementById("characters");
let searchInput=document.getElementById("search");
let statusFilter=document.getElementById("status-filter");
let speciesFilter=document.getElementById("species-filter");
let prevBtn=document.getElementById("prev");
let nextBtn=document.getElementById("next");

let allCharacters=[];
let clientPage=1;
const itemsPerPage=6;

async function fetchCharacters(){
  let url=`${apiUrl}/?page=1&name=${searchQuery}&status=${selectedStatus}&species=${selectedSpecies}`;
  allCharacters=[];
  clientPage=1;
  try{
    while (url){
      const res=await fetch(url);
      const data=await res.json();
      allCharacters.push(...data.results);
      url = data.info.next;
    }
    renderClientPage();
  } catch (err) {
    charactersDiv.innerHTML="<p>No characters found</p>";
    prevBtn.disabled=true;
    nextBtn.disabled=true;
  }
}

function renderClientPage(){
  charactersDiv.innerHTML="";
  const start=(clientPage-1)*itemsPerPage;
  const end=start+itemsPerPage;
  const pageItems=allCharacters.slice(start,end);

  pageItems.forEach(char =>{
    let card=document.createElement("div");
    card.className="card";
    card.innerHTML= `
      <img src="${char.image}" alt="${char.name}">
      <h3>${char.name}</h3>
      <p>Species: ${char.species}</p>
      <p>Status: ${char.status}</p>
      <p>Location: ${char.location.name}</p>
    `;
    charactersDiv.appendChild(card);
  });

  prevBtn.disabled=clientPage== 1;
  nextBtn.disabled=end>=allCharacters.length;
}
searchInput.addEventListener("input",() =>{
  clearTimeout(debounceTimer);
  debounceTimer=setTimeout(() =>{
    searchQuery=searchInput.value.toLowerCase();
    fetchCharacters();
  }, 300);
});
statusFilter.addEventListener("change", () =>{
  selectedStatus = statusFilter.value.toLowerCase();
  fetchCharacters();
});
speciesFilter.addEventListener("change", () =>{
  selectedSpecies = speciesFilter.value.toLowerCase();
  fetchCharacters();
});

prevBtn.addEventListener("click", ()=>{
  if (clientPage > 1) {
    clientPage--;
    renderClientPage();
  }
});

nextBtn.addEventListener("click", () =>{
  if ((clientPage * itemsPerPage)<allCharacters.length){
    clientPage++;
    renderClientPage();
  }
});
fetchCharacters();

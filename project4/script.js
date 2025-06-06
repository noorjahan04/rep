const names = [
  "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Reyansh", "Ayaan", "Krishna", "Ishaan",
  "Anaya", "Siya", "Diya", "Myra", "Aadhya", "Pari", "Riya", "Anika", "Ira", "Meera",
  "Rahul", "Sneha", "Priya", "Amit", "Neha", "Sanjay", "Pooja", "Kiran", "Nikhil", "Divya",
  "Abhishek", "Akshay", "Rohan", "Manish", "Kavya", "Tanvi", "Ritika", "Varun", "Yash", "Harsh",
  "Arnav", "Tanish", "Dev", "Kabir", "Naira", "Jiya", "Aisha", "Zara", "Tara", "Ishita",
  "Siddharth", "Aryan", "Atharv", "Ved", "Om", "Laksh", "Anvi", "Saanvi", "Prisha", "Khushi",
  "Aarohi", "Navya", "Swara", "Mira", "Lavanya", "Aashi", "Vanya", "Kiara", "Kiaan", "Reyansh",
  "Moksh", "Ranveer", "Sharanya", "Advik", "Pranav", "Tejas", "Jhanvi", "Suhana", "Advika", "Shrishti",
  "Alok", "Deepa", "Farhan", "Gauri", "Harsha", "Indira", "Jatin", "Kajal", "Lalit", "Mehul",
  "Naina", "Omkar", "Pallavi", "Qasim", "Raghav", "Simran", "Tanu", "Uday", "Vikas", "Yuvraj",
];
while (names.length < 250) {
  names.push("User " + (names.length + 1));
}
const searchInput = document.getElementById('search-input');
const resultsList = document.getElementById('results');
const loader = document.getElementById('loader');
const stats = document.getElementById('stats');
const noResult = document.getElementById('no-result');
const backToTop = document.getElementById('back-to-top');
let keystrokes = 0;
let debouncedCount = 0;
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    loader.style.display = "block";
    timer = setTimeout(() => {
      loader.style.display = "none";
      func.apply(this, args);
    }, delay);
  };
}
function throttle(func, limit) {
  let lastCall = 0;
  return function () {
    const now = new Date().getTime();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, arguments);
    }
  };
}
function highlightMatch(name, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return name.replace(regex, '<span class="highlight">$1</span>');
}
function updateStats() {
  stats.textContent = `Keystrokes: ${keystrokes} | Debounced Searches: ${debouncedCount}`;
}
function showResults(query) {
  debouncedCount++;
  updateStats();
  resultsList.innerHTML = '';
  noResult.style.display = 'none';
  if (query.trim() === "") return;
  const matches = names.filter(name => name.toLowerCase().includes(query.toLowerCase()));
  if (matches.length === 0) {
    noResult.style.display = 'block';
    return;
  }
  matches.forEach(name => {
    const li = document.createElement('li');
    li.innerHTML = highlightMatch(name, query);
    resultsList.appendChild(li);
  });
}
const debouncedSearch = debounce((e) => showResults(e.target.value), 1000);
searchInput.addEventListener('input', (e) => {
  keystrokes++;
  updateStats();
  debouncedSearch(e);
});
window.addEventListener('scroll', throttle(() => {
  if (window.scrollY >= 200) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
}, 500));
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

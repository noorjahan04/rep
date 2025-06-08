const API_URL = "https://fakestoreapi.com/products";
let allProducts = [];
let filteredProducts = [];
let currentPage = 1;
const itemsPerPage = 8;
const grid = document.getElementById("product-grid");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const categorySelect = document.getElementById("category");
const pageInfo = document.getElementById("page-info");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let debounceTimer;
window.onload = async function () {
  const productsRes = await fetch(API_URL);
  allProducts = await productsRes.json();
  const categoryRes = await fetch(`${API_URL}/categories`);
  const categories = await categoryRes.json();
  categories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });
  applyFilters();
};
function applyFilters() {
  const search = searchInput.value.toLowerCase();
  const category = categorySelect.value;
  const sort = sortSelect.value;
  filteredProducts = allProducts.filter((product) => {
    const matchTitle = product.title.toLowerCase().includes(search);
    const matchCategory = category === "all" || product.category === category;
    return matchTitle && matchCategory;
  });
  if (sort === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "title") {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  }
  currentPage = 1;
  renderProducts();
}
function renderProducts() {
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = filteredProducts.slice(start, end);
  grid.innerHTML = "";
  if (pageItems.length === 0) {
    grid.innerHTML = "<p>No products found.</p>";
    pageInfo.textContent = "";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }
  pageItems.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p><strong>$${product.price}</strong></p>
      <small>${product.category}</small>
    `;
    grid.appendChild(card);
  });
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage >= totalPages;
  window.scrollTo(0, 0);
}
searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(applyFilters, 1000);
});
sortSelect.addEventListener("change", applyFilters);
categorySelect.addEventListener("change", applyFilters);
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderProducts();
  }
});
nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderProducts();
  }
});

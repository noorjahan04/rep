let  BASE_URL = "https://sample-7930e-default-rtdb.asia-southeast1.firebasedatabase.app"; 
function addBook(title, author, genre, publishedYear, available) {
    console.log("Adding Book:", { title, author, genre, publishedYear, available });
    fetch(`${BASE_URL}/books.json`, {
        method: "POST",
        body: JSON.stringify({ title, author, genre, publishedYear, available }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        console.log(" Book Added Successfully:", data);
        alert(`Book added successfully! ID: ${data.name}`); // Firebase assigns a unique key
    })
    .catch(error => console.error(" Error Adding Book:", error));
}
function updateBook(bookId, updatedData) {
    console.log(` Updating Book ID: ${bookId}`, updatedData);
    fetch(`${BASE_URL}/books/${bookId}.json`, {
        method: "PATCH",
        body: JSON.stringify(updatedData),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => console.log("Book Updated Successfully:", data))
    .catch(error => console.error(" Error Updating Book:", error));
}
function deleteBook(bookId) {
    console.log(` Deleting Book ID: ${bookId}`);
    fetch(`${BASE_URL}/books/${bookId}.json`, {
        method: "DELETE"
    })
    .then(() => console.log("Book Deleted Successfully"))
    .catch(error => console.error(" Error Deleting Book:", error));
}
function fetchBooks(callback) {
    console.log("Fetching Books...");
    fetch(`${BASE_URL}/books.json`)
    .then(response => response.json())
    .then(data => {
        console.log(" Books Fetched Successfully:", data);
        callback(data);
    })
    .catch(error => console.error(" Error Fetching Books:", error));
}
function filterBooks(filterGenre, filterAvailability) {
    console.log(` Filtering Books - Genre: ${filterGenre}, Available: ${filterAvailability}`);
    fetchBooks(books => {
        if (!books) {
            console.error(" No books found");
            return;
        }
        let filteredBooks = Object.entries(books)
            .map(([id, book]) => ({ id, ...book }))
            .filter(book => book.genre === filterGenre && book.available === filterAvailability);
        console.log(" Filtered Books:", filteredBooks);
    });
}
function sortBooksByAuthor() {
    console.log(" Sorting Books by Author...");
    fetchBooks(books => {
        if (!books) {
            console.error(" No books found");
            return;
        }
        const sortedBooks = Object.entries(books)
            .map(([id, book]) => ({ id, ...book }))
            .sort((a, b) => a.author.localeCompare(b.author));
        console.log(" Sorted Books by Author:", sortedBooks);
    });
}
function paginateBooks(page, limit) {
    console.log(` Paginating Books - Page: ${page}, Limit: ${limit}`);
    fetchBooks(books => {
        if (!books) {
            console.error(" No books found");
            return;
        }
        let allBooks = Object.entries(books).map(([id, book]) => ({ id, ...book }));
        let start = (page - 1) * limit;
        let paginatedBooks = allBooks.slice(start, start + limit);
        console.log("Paginated Books:", paginatedBooks);
    });
}
function saveState(settings) {
    console.log(" Saving State:", settings);
    localStorage.setItem("libraryState", JSON.stringify(settings));
}
function loadState() {
    let state = JSON.parse(localStorage.getItem("libraryState")) || {};
    console.log(" Loaded State:", state);
    return state;
}
function applyState() {
    const state = loadState();
    console.log(" Restoring State:", state);
}
applyState();
document.getElementById("addBookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let title = document.getElementById("title").value;
   let author = document.getElementById("author").value;
    let genre = document.getElementById("genre").value;
    let publishedYear = parseInt(document.getElementById("publishedYear").value);
    let available = document.getElementById("available").checked;
    addBook(title, author, genre, publishedYear, available);
    alert(" Book added successfully!");
});
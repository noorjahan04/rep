document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const feedbackList = document.getElementById("feedbackList");
    const savedFeedback = JSON.parse(localStorage.getItem("feedbackMessages")) || [];
    savedFeedback.forEach(item => addFeedback(item));
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();
        if (!name || !email || !phone || !message) {
            alert("Please fill all the fields.");
            return;
        }
        const feedback = { name, email, phone, message };
        addFeedback(feedback);
        savedFeedback.push(feedback);
        localStorage.setItem("feedbackMessages", JSON.stringify(savedFeedback));
        form.reset();
    });
    function addFeedback({ name, email, phone, message }) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${name}</strong> (${email}, ${phone}): <em>${message}</em>`;
        feedbackList.appendChild(li);
    }
});
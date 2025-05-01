document.getElementById("main-heading").textContent = "Welcome to the DOM World!";
let paragraphs = document.getElementsByTagName("p");
for (let para of paragraphs) {
    para.style.color = "blue";
}
document.querySelector(".container").style.backgroundColor = "yellow";
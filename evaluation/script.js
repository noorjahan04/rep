const toggleBtn=document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode",document.body.classList.contains("dark-mode"));
});
window.addEventListener("DOMContentLoade",()=>{
    if(localStorage.getItem("darkMode")==="true"){
        document.body.classList.add("dark-mode");
    }
});
let scrollToTopBtn=document.getElementById("scrollToTop");
if(scroolTopBtn){
    window.onscroll=()=>{
        scrollToTopBtn.style.display=window.scrolly>100?"block":"none"
    };
    scrollToTopBtn.onclick=()=>{
        window.scrollTo({top:0,bebaviour:'smooth'})
    }
}
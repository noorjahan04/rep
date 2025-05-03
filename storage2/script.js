// Function to change the theme dynamically and store in sessionStorage
function changeTheme() {
    const theme = document.getElementById("theme").value;
    document.body.className = theme;
    sessionStorage.setItem("selectedTheme", theme);
}
// Function to apply the stored theme on page reload
window.onload = function() {
    const savedTheme = sessionStorage.getItem("selectedTheme") || "light"; // Default to light theme
    document.body.className = savedTheme;
    document.getElementById("theme").value = savedTheme;
};
// Apply styles dynamically based on selected theme
const styles = {
    light: { background: "#ffffff", color: "#000000" },
    dark: { background: "#333333", color: "#ffffff" },
    blue: { background: "#0073e6", color: "#ffffff" }
};
// Observer function to update styles when theme changes
function applyThemeStyles() {
    const theme = document.body.className;
    document.body.style.backgroundColor = styles[theme].background;
    document.body.style.color = styles[theme].color;
}
// Listen for changes and apply styles
document.getElementById("theme").addEventListener("change", applyThemeStyles);
window.onload = applyThemeStyles;
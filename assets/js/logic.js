const darkModeToggle = document.querySelector("#dark-mode-toggle");
const backButton = document.getElementById("back"); // Get the back button element

// Function to enable dark mode
const enableDarkMode = () => {
    document.body.classList.add("darkMode");
    localStorage.setItem("darkMode", "enabled");
   
}

// Function to disable dark mode
const disableDarkMode = () => {
    document.body.classList.remove("darkMode");
    localStorage.setItem("darkMode", null);
    
}

// Event listener for dark mode toggle
darkModeToggle.addEventListener("click", () => {
    const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
    if (!darkModeEnabled) {
        enableDarkMode();
        darkModeToggle.classList.add("bxs-star");
    } else {
        disableDarkMode();
        darkModeToggle.classList.remove("bxs-star");
    }
});

// Check if current page is blog.html and show the back button
const currentPage = window.location.pathname.split("/").pop();
if (currentPage === "blog.html") {
    backButton.style.display = "block";
} else {
    backButton.style.display = "none";
}

// Event listener for back button click
backButton.addEventListener("click", () => {
    window.location.href = "index.html"; // Navigate back to index.html
});
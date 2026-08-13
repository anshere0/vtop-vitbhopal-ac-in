document.addEventListener("DOMContentLoaded", () => {
    // Check authentication on load
    if (typeof checkAuth === 'function') {
        checkAuth();
    }

    // Timer functionality
    let timeRemaining = 19 * 60 + 23; // Start at 19m 23s to match the screenshot
    const timerDisplay = document.getElementById("session-timer");
    
    if (timerDisplay) {
        setInterval(() => {
            timeRemaining--;
            if (timeRemaining <= 0) {
                if (typeof logout === 'function') {
                    logout();
                } else {
                    window.location.href = "login.html";
                }
            } else {
                const minutes = Math.floor(timeRemaining / 60);
                const seconds = timeRemaining % 60;
                timerDisplay.textContent = `${minutes}m ${seconds}s`;
            }
        }, 1000);
    }

    // Profile Dropdown Toggle
    const profileToggle = document.getElementById("profile-toggle");
    const profileDropdown = document.getElementById("profile-dropdown");
    
    if (profileToggle && profileDropdown) {
        profileToggle.addEventListener("click", (e) => {
            // Prevent click from bubbling to document and immediately closing
            e.stopPropagation();
            profileDropdown.classList.toggle("show");
        });
        
        // Prevent clicking inside dropdown from closing it
        profileDropdown.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        // Click outside to close
        document.addEventListener("click", () => {
            profileDropdown.classList.remove("show");
        });
    }

    // Logout button
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            if (typeof logout === 'function') {
                logout();
            }
        });
    }
});

// Accordion toggle function for profile page
window.toggleAccordion = function(element) {
    const item = element.parentElement;
    item.classList.toggle("active");
};

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('mainHeader');
    const headerTitle = document.getElementById('headerTitle');
    const appName = "NutriTales";
    
    // 1. Get the dynamic title from the HTML data attribute
    // It looks for the attribute on the 'policyStart' header element.
    const policyHeader = document.getElementById('policyStart');
    const dynamicScrollTitle = policyHeader ? policyHeader.getAttribute('data-scroll-title') : null;

    // Check if we have a scroll title; if not, exit or default to appName
    if (!dynamicScrollTitle) {
        console.warn("data-scroll-title attribute is missing. Dynamic title feature disabled.");
        return; // Stop the script if the required attribute isn't found
    }

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        // Header Shadow Logic
        if (scrollPosition > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Dynamic Title Change Logic (scroll > 100px)
        if (scrollPosition > 100) {
            // Use the value retrieved from the HTML
            if (headerTitle.textContent !== dynamicScrollTitle) {
                headerTitle.textContent = dynamicScrollTitle;
            }
        } else {
            // Always revert to the App Name when near the top
            if (headerTitle.textContent !== appName) {
                headerTitle.textContent = appName;
            }
        }
    });
});


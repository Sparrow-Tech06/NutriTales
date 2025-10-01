
         document.addEventListener('DOMContentLoaded', () => {
            const header = document.getElementById('mainHeader');
            const headerTitle = document.getElementById('headerTitle');
            const appName = "NutriTales";
            const policyTitle = "Privacy Policy";

            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY;

                // 1. Header Shadow Logic (scroll > 10px)
                if (scrollPosition > 10) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }

                // 2. Dynamic Title Change Logic (scroll > 100px)
                if (scrollPosition > 100) {
                    // Change to "Privacy Policy"
                    if (headerTitle.textContent !== policyTitle) {
                        headerTitle.textContent = policyTitle;
                    }
                } else {
                    // Change back to "NutriTales"
                    if (headerTitle.textContent !== appName) {
                        headerTitle.textContent = appName;
                    }
                }
            });
        });

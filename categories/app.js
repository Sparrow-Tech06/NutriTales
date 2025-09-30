// --- Utility Function: Image load hone ke baad skeleton ko hide karne ke liye ---
function showImage(img) {
    const skeleton = img.previousElementSibling;
    if (skeleton) {
      // Skeleton div ko hide karein
      skeleton.style.display = "none";
    }
    // Image ko show karein
    img.style.display = "block";
}
// Note: showImage function ko global scope mein hona zaroori hai taaki 'onload="showImage(this)"' use kar sakein.


// --- Main Function: Fruit list ko dynamically render karna ---
function renderFruitList() {
    const fruitListContainer = document.getElementById('fruitList');
    if (!fruitListContainer) return; // Container nahi mila toh exit

    let htmlContent = '';

    fruitData.forEach(fruit => {
        // Template Literal (backticks ``) ka use karke poora HTML string banaya gaya hai.
        const fruitHTML = `
            <article class="card card-${fruit.slug} d-flex align-items-center" data-fruit="${fruit.slug}">
                <div class="d-flex align-items-center w-100">
                    <div class="me-3">
                        <div class="skeleton"></div>
                        <img src="${fruit.imagePath}" class="fruit-img" 
                             onload="showImage(this)" draggable="false" style="display: none;">
                    </div>
                    <div class="flex-grow-1">
                        <hgroup>
                            <h6 class="mb-1"> ${fruit.name} </h6>
                            <p class="text-muted small mb-2">${fruit.description}</p>
                        </hgroup>
                        <a href="${fruit.storyLink}" class="btn explore-btn btn-${fruit.slug}">Explore Now</a>
                    </div>
                </div>
            </article>
        `;
        htmlContent += fruitHTML;
    });

    // Saara HTML ek baar mein DOM mein daalna (Performance ke liye behtar)
    fruitListContainer.innerHTML = htmlContent;
}


// Jab poora DOM load ho jaaye, tab list ko render karein
document.addEventListener('DOMContentLoaded', renderFruitList);



document.addEventListener("DOMContentLoaded", () => {
  const langSwitcher = document.getElementById("langSwitcher");
  const animalName = document.getElementById("animalName");
  const animalDesc = document.getElementById("animalDesc");
  const animalLife = document.getElementById("animalLife");
  const animalSpeed = document.getElementById("animalSpeed");
  const animalImage = document.getElementById("animalImage");

  // Detect current folder name (lion.html → folder = lion)
  const pathParts = location.pathname.split("/");
  const folder = pathParts[pathParts.length - 2]; // "lion"
  const jsonFile = `${folder}.json`; // "lion.json"

  fetch(`${folder}/${jsonFile}`)
    .then(res => res.json())
    .then(animal => {
      let currentLang = langSwitcher.value;

      function updateUI(lang) {
        animalName.textContent = animal[lang].name;
        animalDesc.textContent = animal[lang].desc;
        animalLife.textContent = animal[lang].life;
        animalSpeed.textContent = animal[lang].speed;
        animalImage.src = animal.image;
      }

      // Default Load
      updateUI(currentLang);

      // Language Switcher Change
      langSwitcher.addEventListener("change", () => {
        updateUI(langSwitcher.value);
      });
    })
    .catch(err => console.error("Error loading JSON:", err));
});

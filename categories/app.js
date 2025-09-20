
  function showImage(img) {
    const skeleton = img.previousElementSibling;
    if (skeleton) {
      skeleton.style.display = "none";  // Hide skeleton
    }
    img.style.display = "block";      // Show image
  }

  // Real-time search filter
  document.getElementById('searchInput').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const fruitCards = document.querySelectorAll('#fruitList .card');
    
    fruitCards.forEach(card => {
      const fruitName = card.getAttribute('data-fruit');
      if (fruitName.includes(filter)) {
        card.style.display = 'flex'; // Show card
      } else {
        card.style.display = 'none'; // Hide card
      }
    });
  });

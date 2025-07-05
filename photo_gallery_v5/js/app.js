// Initialize lightbox
baguetteBox.run('.gallery');

// Custom search filter
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search');
  const galleryItems = document.querySelectorAll('.gallery a');

  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    galleryItems.forEach(item => {
      const caption = item.getAttribute('data-caption').toLowerCase();
      item.style.display = caption.includes(searchTerm) || !searchTerm ? '' : 'none';
    });
  });
});
class Filter {
  constructor(inputId, attribute, debounceTime = 300) {
    this.input = document.getElementById(inputId);
    this.attribute = attribute;
    this.items = [];
    this.debounceTime = debounceTime;
    this.debounceTimeout = null;

    this.setupAccessibility();
    this.init();
  }

  setupAccessibility() {
    if (!this.input.getAttribute('aria-label')) {
      this.input.setAttribute('aria-label', 'Search photos');
    }
  }

  init() {
    this.items = [...document.querySelectorAll('.gallery a')];
    this.input.addEventListener('input', () => {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        this.filterItems();
      }, this.debounceTime);
    });
  }

  filterItems() {
    const query = this.input.value.trim().toLowerCase();
    this.items.forEach(item => {
      const caption = item.getAttribute(this.attribute).toLowerCase();
      if (caption.includes(query)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }
}

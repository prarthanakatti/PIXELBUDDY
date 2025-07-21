// Light/Dark Toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Pet Theme Switcher
const petCards = document.querySelectorAll('.pet-card');

petCards.forEach(card => {
  card.addEventListener('click', () => {
    const theme = card.getAttribute('data-theme');

    // Clear old theme classes
    document.body.className = '';
    document.body.classList.add(`${theme}-theme`);

    // Update greeting text
    document.querySelector('.greeting').textContent = buddyGreeting(theme);
  });
});

// Buddy Greetings
function buddyGreeting(theme) {
  switch (theme) {
    case 'pikachu':
      return '⚡ Pikachu is here to zap those bad habits!';
    case 'bulbasaur':
      return '🌿 Bulbasaur is rooting for your growth!';
    case 'charmander':
      return '🔥 Charmander says we’re on fire today!';
    case 'squirtle':
      return '💧 Squirtle reminds you to flow, not scroll.';
    default:
      return 'Ready to break a habit today?';
  }
}

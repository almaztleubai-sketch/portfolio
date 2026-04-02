// ── AOS INIT ──
AOS.init({
  duration: 800,
  easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  once: true,
  offset: 60,
});

// ── FILTER ──
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');
const noResults = document.getElementById('no-results');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    // update active tab
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // show / hide cards
    let visible = 0;
    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
      if (match) visible++;
    });

    noResults.classList.toggle('visible', visible === 0);
  });
});

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

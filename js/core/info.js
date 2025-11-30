// Info Modal Handler
const infoBtn = document.getElementById('infoBtn');
const infoModal = document.getElementById('infoModal');
const infoClose = document.getElementById('infoClose');

// Open modal
infoBtn.addEventListener('click', () => {
  infoModal.classList.add('active');
});

// Close modal
infoClose.addEventListener('click', () => {
  infoModal.classList.remove('active');
});

// Close on background click
infoModal.addEventListener('click', (e) => {
  if (e.target === infoModal) {
    infoModal.classList.remove('active');
  }
});

// Close on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && infoModal.classList.contains('active')) {
    infoModal.classList.remove('active');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const allLinks = document.querySelectorAll('a[href]');
  allLinks.forEach(link => {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
const allLinks = document.querySelectorAll('a[href]');
allLinks.forEach(function(link) {
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
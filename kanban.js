const kanban=document.querySelector(".kanban-box")

kanban.onclick=()=>{
  kanban.classList.toggle("hide")
}

   const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

   function createRipple(x, y) {
  const ripple = document.createElement('span');
  ripple.className = 'ripple-global';

  const size = 80;

  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (x - size / 2) + 'px';
  ripple.style.top = (y - size / 2) + 'px';

  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 500);
}

document.addEventListener('pointerdown', function(e) {
  createRipple(e.clientX, e.clientY);
});
document.addEventListener('DOMContentLoaded', () => {
  // 判断页面是否有目标特征类名
  const isTargetPage = document.body.classList.contains('link-break-iframe');

  // 非目标页面不执行任何操作
  if (!isTargetPage) return;

  // 所有链接 新标签页打开及安全属性
  const allLinks = document.querySelectorAll('a[href]');
  allLinks.forEach(link => {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

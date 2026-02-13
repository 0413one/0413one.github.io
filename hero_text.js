const el = document.getElementById("hero-line");
el.style.transition = "opacity 3s"; // 淡入淡出时间

function pickRandomSentence() {
  const index = Math.floor(Math.random() * HERO_SENTENCES.length);
  return HERO_SENTENCES[index];
}

function updateSentence() {
  el.style.opacity = 0; // 先淡出
  setTimeout(() => {
    el.textContent = "🍥 " + pickRandomSentence(); // 更新文字
    el.style.opacity = 1; // 再淡入
  }, 1000); // 等待淡出时间结束
}

setInterval(updateSentence, 5000);
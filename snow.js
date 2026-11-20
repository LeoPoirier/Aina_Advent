(function () {
  const EMOJIS = ["❄️", "🎄", "🎅", "🔔", "⭐", "🎁", "☃️"];
  const container = document.createElement("div");
  container.id = "snow-container";
  document.body.appendChild(container);

  const count = window.innerWidth < 600 ? 16 : window.innerWidth > 1400 ? 45 : 28;
  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.className = "snowflake";
    span.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    span.style.left = Math.random() * 100 + "vw";
    const duration = 9 + Math.random() * 10;
    const delay = Math.random() * duration;
    span.style.animationDuration = duration + "s";
    span.style.animationDelay = "-" + delay + "s";
    span.style.fontSize = 14 + Math.random() * 16 + "px";
    span.style.opacity = 0.45 + Math.random() * 0.45;
    container.appendChild(span);
  }
})();

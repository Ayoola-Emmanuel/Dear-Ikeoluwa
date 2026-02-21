document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     🎵 MUSIC (FADE IN)
  ========================== */
  const loveSong = document.getElementById("loveSong");

  function fadeInMusic(audio, duration = 3000) {
    audio.volume = 0;
    audio.play().catch(() => {});
    const step = 0.02;
    const interval = duration / (1 / step);

    const fade = setInterval(() => {
      if (audio.volume < 0.4) {
        audio.volume += step;
      } else {
        clearInterval(fade);
      }
    }, interval);
  }

  /* =========================
     ✉️ ENVELOPE → LETTER
  ========================== */
  const envelope = document.getElementById("openEnvelope");
  const envelopeScreen = document.getElementById("envelopeScreen");
  const letter = document.getElementById("loveMessages");

  if (envelope) {
    envelope.addEventListener("click", () => {
      envelope.classList.add("open");
      fadeInMusic(loveSong);

      setTimeout(() => {
        envelopeScreen.classList.add("fade-out");
      }, 900);

      setTimeout(() => {
        envelopeScreen.remove();
        letter.classList.remove("hidden");
        document.body.style.overflowY = "auto";

        // Smooth scroll into letter
        letter.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 2000);
    });
  }

  /* =========================
     💕 FLOATING HEARTS
  ========================== */
  const heartsContainer = document.querySelector(".hearts");

  if (heartsContainer) {
    for (let i = 0; i < 28; i++) {
      const heart = document.createElement("span");
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 4 + 6 + "s";
      heart.style.opacity = Math.random();
      heartsContainer.appendChild(heart);
    }
  }
});

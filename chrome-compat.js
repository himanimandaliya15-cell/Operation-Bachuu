
/*
 * Chrome / GitHub Pages compatibility layer.
 * Keeps optional audio from breaking page logic when a file is unavailable
 * or Chrome blocks autoplay before a user gesture.
 */
(() => {
  const originalPlay = HTMLMediaElement.prototype.play;
  HTMLMediaElement.prototype.play = function () {
    try {
      const p = originalPlay.call(this);
      if (p && typeof p.catch === "function") {
        p.catch(() => {});
      }
      return p;
    } catch (_) {
      return Promise.resolve();
    }
  };

  window.safePlayAudio = function (audio) {
    if (!audio) return Promise.resolve(false);
    try {
      const p = audio.play();
      if (p && typeof p.then === "function") {
        return p.then(() => true).catch(() => false);
      }
      return Promise.resolve(true);
    } catch (_) {
      return Promise.resolve(false);
    }
  };

  // Unlock media after the first real user interaction.
  const unlock = () => {
    document.querySelectorAll("audio").forEach(a => {
      try {
        a.load();
      } catch (_) {}
    });
    window.removeEventListener("pointerdown", unlock, true);
    window.removeEventListener("touchstart", unlock, true);
    window.removeEventListener("keydown", unlock, true);
  };
  window.addEventListener("pointerdown", unlock, true);
  window.addEventListener("touchstart", unlock, true);
  window.addEventListener("keydown", unlock, true);
})();

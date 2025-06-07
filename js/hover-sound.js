window.addEventListener('DOMContentLoaded', () => {
  const soundCache = {};

  // === Inteligentna detekcja ścieżki ===
  // Sprawdza, ile razy trzeba się cofnąć, by dotrzeć do katalogu głównego
  const getRelativePathToRoot = () => {
    const depth = window.location.pathname
      .replace(/\/$/, '') // usuń końcowy slash
      .split('/')
      .filter(part => part !== '').length - 1;

    return '../'.repeat(depth);
  };

  const basePath = getRelativePathToRoot(); // np. '', '../', '../../'
  const soundFolder = `${basePath}sound/`;

  // === Wstępne ładowanie dźwięków ===
  document.querySelectorAll('.with-sound').forEach(link => {
    const soundName = link.dataset.sound;
    if (soundName && !soundCache[soundName]) {
      const audio = new Audio(`${soundFolder}${soundName}.mp3`);
      audio.preload = 'auto';
      audio.volume = 0.2;
      soundCache[soundName] = audio;
    }
  });

  // === Odtwarzanie przy najechaniu ===
  document.querySelectorAll('.with-sound').forEach(link => {
    link.addEventListener('mouseenter', () => {
      const soundName = link.dataset.sound;
      const audio = soundCache[soundName];
      if (audio) {
        audio.currentTime = 0;
        audio.play().catch(err => {
          console.warn("Nie udało się odtworzyć dźwięku:", err);
        });
      }
    });
  });
});
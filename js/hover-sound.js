window.addEventListener('DOMContentLoaded', () => {
  const soundCache = {};
  const soundFolder = '../sound/'; // stała ścieżka - zawsze jeden poziom wyżej

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

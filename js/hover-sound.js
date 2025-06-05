window.addEventListener('DOMContentLoaded', () => {
  const sound = document.getElementById('hoverSound');
  if (sound) {
    sound.volume = 0.2;

    document.querySelectorAll('.with-sound').forEach(link => {
      link.addEventListener('mouseenter', () => {
        sound.currentTime = 0;
        sound.play();
      });
    });
  }
});
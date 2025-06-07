document.addEventListener("DOMContentLoaded", () => {
  const textBox = document.getElementById("text-box");
  const textContent = document.getElementById("text-content");

  const fullText = textBox.dataset.text || "";
  const typingSpeed = 40;

  let charIndex = 0;
  let isTyping = true;
  let typingInterval;

  function startTyping() {
    typingInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        textContent.textContent += fullText.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        isTyping = false;
      }
    }, typingSpeed);
  }

  textBox.addEventListener("click", () => {
    if (isTyping) {
      clearInterval(typingInterval);
      textContent.textContent = fullText;
      isTyping = false;
    } else {
      // Tu możesz dodać przejście do kolejnego tekstu
    }
  });

  startTyping();
});

document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".question");
  
    questions.forEach((question) => {
      question.addEventListener("click", function () {
        const answer = question.nextElementSibling;
        const faqQuestion = question.parentElement;
  
        if (faqQuestion.classList.contains("open")) {
          faqQuestion.classList.remove("open");
        } else {
          faqQuestion.classList.add("open");
        }
      });
    });
  });

  
  const backgroundContainer = document.getElementById('background-container');

  window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const offsetY = -scrollY * 0.5; // Adjust the parallax effect by changing the multiplier
  
      backgroundContainer.style.transform = `translateY(${offsetY}px)`;
  });
  
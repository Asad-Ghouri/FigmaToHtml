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
  

 
  function playAnimation() {
    const section = document.querySelector('.animated-section');
    section.classList.add('animate');
}

// Listen for the "DOMContentLoaded" event to ensure the page is fully loaded
document.addEventListener('DOMContentLoaded', playAnimation);

// Set the date we're counting down to
const countdownDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = countdownDate - currentDate;

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        document.querySelector(".timer").innerHTML = "Countdown expired!";
        document.querySelector(".progress").style.width = "100%";
    } else {
        const totalMilliseconds = 7 * 24 * 60 * 60 * 1000;
        const progressPercentage = (((totalMilliseconds - timeLeft) / totalMilliseconds) * 100)+30;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.querySelector(".days").textContent = formatTime(days);
        document.querySelector(".hours").textContent = formatTime(hours);
        document.querySelector(".minutes").textContent = formatTime(minutes);
        document.querySelector(".seconds").textContent = formatTime(seconds);

        document.querySelector(".progress").style.width = progressPercentage + "%";
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Initial update
updateCountdown();

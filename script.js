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
      const offsetY = -scrollY * 0.1; // Adjust the parallax effect by changing the multiplier
  
      backgroundContainer.style.transform = `translateY(${offsetY}px)`;
  });
  

  // Get references to the buttons and pricing elements
     // Get references to the buttons and pricing elements
     const yearlyButton = document.querySelector('.p-button1');
     const quarterlyButton = document.querySelector('.p-button2');
     const monthlyButton = document.querySelector('.p-button3');
 
     const silverPrice = document.querySelector('.pricingVal .money');
     const goldPrice = document.querySelector('.pricingVal1 .money');
 
     // Define the pricing values for each package
     const prices = {
       silver: {
         monthly: '$40',
         quarterly: '$120',
         yearly: '$480',
       },
       gold: {
         monthly: '$70',
         quarterly: '$200',
         yearly: '$800',
       },
     };
 
     // Function to update pricing values based on the selected duration
     function updatePricing(duration) {
       silverPrice.textContent = prices.silver[duration];
       goldPrice.textContent = prices.gold[duration];
     }
 
     // Add click event listeners to the buttons
     yearlyButton.addEventListener('click', () => {
       updatePricing('yearly');
       yearlyButton.classList.add('active');
       quarterlyButton.classList.remove('active');
       monthlyButton.classList.remove('active');
     });
 
     quarterlyButton.addEventListener('click', () => {
       updatePricing('quarterly');
       yearlyButton.classList.remove('active');
       quarterlyButton.classList.add('active');
       monthlyButton.classList.remove('active');
       
     });
 
     monthlyButton.addEventListener('click', () => {
       updatePricing('monthly');
       yearlyButton.classList.remove('active');
      quarterlyButton.classList.remove('active');
      monthlyButton.classList.add('active');
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




// script.js
document.addEventListener("DOMContentLoaded", function () {
  const overlayImages = document.querySelectorAll(".overlay-image");
  const videoModal = document.getElementById("videoModal");
  const closeModal = document.getElementById("closeModal");
  const iframe = videoModal.querySelector("iframe");

  overlayImages.forEach((image, index) => {
      image.addEventListener("click", function () {
          videoModal.style.display = "block";
          // Replace this URL with the actual video URL you want to display
          iframe.src = `https://www.youtube.com/embed/VIDEO_ID${index + 1}`;
      });
  });

  closeModal.addEventListener("click", function () {
      videoModal.style.display = "none";
      // Stop the video when the modal is closed
      iframe.src = "";
  });

  window.addEventListener("click", function (event) {
      if (event.target === videoModal) {
          videoModal.style.display = "none";
          iframe.src = "";
      }
  });
});

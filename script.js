let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

// Play video on hover, pause when not

// document.querySelectorAll('.project-video').forEach(video => {
//   video.addEventListener('mouseenter', () => {
//     video.play();
//   });

//   video.addEventListener('mouseleave', () => {
//     video.pause();
//     video.currentTime = 0; 
//   });
// });
// Smooth scroll with offset for navbar links
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = 5; // Adjust this to match navbar height

    const topPos = target.offsetTop - offset;
    window.scrollTo({
      top: topPos,
      behavior: 'smooth'
    });
  });
});

  const titles = ["Software Developer", "Game Developer", "Unity Enthusiast", "Tech Explorer", "Freelancer"];
  let currentIndex = 0;
  let charIndex = 0;
  const typingElement = document.querySelector(".typing-text");

  function type() {
    if (charIndex < titles[currentIndex].length) {
      typingElement.textContent += titles[currentIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // Typing speed
    } else {
      setTimeout(erase, 2000); // Wait before erasing
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingElement.textContent = titles[currentIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50); // Erase speed
    } else {
      currentIndex = (currentIndex + 1) % titles.length;
      setTimeout(type, 500); // Wait before typing new word
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (titles.length > 0) type();
  });

document.querySelectorAll('.copy-text').forEach(elem => {
  elem.style.cursor = "pointer";
  elem.title = "Click to copy";
  elem.addEventListener('click', () => {
    navigator.clipboard.writeText(elem.dataset.copy).then(() => {
      elem.innerHTML = `${elem.dataset.copy} ✅`;
      setTimeout(() => {
        elem.innerHTML = elem.dataset.copy;
      }, 2000);
    });
  });
});


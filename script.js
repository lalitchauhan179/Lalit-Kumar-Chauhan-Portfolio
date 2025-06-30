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
document.querySelectorAll('.btn-group a[href^="#"]').forEach(anchor => {
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

window.addEventListener('resize', () => {
  document.querySelectorAll('*').forEach(el => {
    if (el.scrollWidth > document.documentElement.clientWidth) {
      console.warn('Overflowing element:', el);
    }
  });
});

// Dark/Light Theme Toggle with system preference
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
}

document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

(function () {
  const stored = localStorage.getItem("theme");
  if (stored) {
    setTheme(stored);
  } else {
    const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
    setTheme(systemPref);
  }
})();


  const canvas = document.getElementById('starfall');
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector('.resume').offsetHeight;
  }

  function createStars() {
    stars = [];
    for (let i = 0; i < 80; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.5
      });
    }
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function animateStars() {
    stars.forEach(star => {
      star.y += star.speed;
      if (star.y > canvas.height) star.y = 0;
    });
    drawStars();
    requestAnimationFrame(animateStars);
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
    createStars();
  });

  resizeCanvas();
  createStars();
  animateStars();
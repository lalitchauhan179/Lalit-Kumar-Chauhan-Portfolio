tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  particles: {
    number: {
      value: 50,
      density: { enable: true, area: 800 }
    },
    color: { value: "#4285F4" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: "bounce"
    },
    links: {
      enable: true,
      distance: 120,
      color: "#4285F4",
      opacity: 0.4,
      width: 1
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { quantity: 4 }
    }
  },
  background: {
    color: "transparent"
  }
});

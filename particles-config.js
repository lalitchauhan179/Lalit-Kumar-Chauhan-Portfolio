tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  particles: {
    number: {
      value: 50,
      density: { enable: true, area: 800 }
    },
    color: { value: "#ea580c" },
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
      color: "#ea580c",
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

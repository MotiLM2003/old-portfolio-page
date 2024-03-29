particlesJS('particles', {
  particles: {
    number: { value: 55, density: { enable: true, value_area: 900 } },
    color: { value: '#fff' },
    shape: {
      type: 'polygon',
      stroke: { width: 1, color: '#fff', opacity: 0 },
      polygon: { nb_sides: 15 },
      image: { src: 'img/github.svg', width: 100, height: 100 },
    },
    opacity: {
      value: 0.4,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 1,
      random: true,
      anim: { enable: false, speed: 180, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 151,
      color: '#034f84',
      opacity: 0.2,
      width: 12,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: {
        distance: 1090.909090909091,
        size: 339.6603396603397,
        duration: 7.432567432567433,
        opacity: 8,
        speed: 3,
      },
      repulse: { distance: 103.89610389610391, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

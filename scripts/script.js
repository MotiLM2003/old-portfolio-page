$(function () {
  AOS.init({
    delay: 100,
    duration: 1200,
    once: true,
    mirror: false,
  });

  particlesJS.load('particles', 'particles.json', function () {});

  //  edge support for smooth scrolling
  $('.link-item').click(function () {
    const me = $(this);
    let id = 'navigation';
    switch (me.attr('id')) {
      case 'header-link': {
        id = 'header';
        break;
      }
      case 'projects-link': {
        id = 'projects';
        break;
      }
      case 'tech-container-link': {
        id = 'tech-container';
        break;
      }
    }
    if (id === '') return;
    console.log('here');
    $('html, body').animate(
      {
        scrollTop: $(`#${id}`).offset().top,
      },
      1000
    );
  });
});

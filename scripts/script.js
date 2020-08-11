$(function () {
  console.log('here');
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
    console.log('moving');
    $('html, body').animate(
      {
        scrollTop: $(`#${id}`).offset().top,
      },
      1000
    );
  });
});

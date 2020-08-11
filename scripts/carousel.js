let isScrolling = true;
const sections = document.querySelectorAll('section');
const options = {
  root: null,
  threshold: 0,
  rootMargin: '-50px',
};
const obs = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    const item = entry.target;

    if (entry.isIntersecting) {
      // item.style.backgroundColor = 'black';
    }
  });
}, options);

sections.forEach((section) => {
  obs.observe(section);
});
var carousel = document.querySelector('.carousel');
var cells = carousel.querySelectorAll('.carousel__cell');
var cellCount; // cellCount set from cells-range input value
var selectedIndex = 3;
var cellWidth = carousel.offsetWidth;
var cellHeight = carousel.offsetHeight;
var isHorizontal = true;
var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
var radius, theta;
let lastId = 6;
let firstId = 0;

const skipToButtonContainer = document.querySelector('.carousel-skip-to');

cells.forEach((item, index) => {
  const span = document.createElement('span');
  span.addEventListener('click', (e) => {
    //selectedIndex = index;
    const id = parseInt(e.target.id);
    if (selectedIndex > id) {
      selectedIndex = id;
    } else if (selectedIndex < id) {
      selectedIndex = selectedIndex + (id - selectedIndex);
    }
    setActiveButton(selectedIndex);
    rotateCarousel();
  });
  span.innerHTML = '&nbsp;';
  span.id = index;
  span.classList.add('carousel-skip-to__item');
  skipToButtonContainer.appendChild(span);
});

carousel.addEventListener('mouseover', () => {
  isScrolling = false;
});

carousel.addEventListener('mouseout', () => {
  isScrolling = true;
});
function rotateCarousel() {
  //if (selectedIndex > 7) selectedIndex = 0;
  var angle = theta * selectedIndex * -1;
  carousel.style.transform =
    'translateZ(' + -radius + 'px) ' + rotateFn + '(' + angle + 'deg)';

  setActiveButton(selectedIndex);
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener('click', function () {
  selectedIndex--;
  if (selectedIndex < firstId) {
    rebuildIds(0);
  }
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', function () {
  selectedIndex++;
  if (selectedIndex > lastId) {
    rebuildIds(1);
  }
  rotateCarousel();
});

function rebuildIds(direction) {
  let items = document.querySelectorAll('.carousel-skip-to__item');
  items = Array.from(items);

  let newId = parseInt(selectedIndex);

  items.forEach((item, index) => {
    if (index === 0) {
      firstId = item.id;
    }
    if (direction === 1) {
      item.id = newId++;
    } else {
      if (direction === 0) {
        item.id = newId--;
      }
      selectedIndex = item.id;
    }
    lastId = item.id;
  });

  setActiveButton(selectedIndex);
}

function changeCarousel() {
  cellCount = 7; // cellsRange.value;
  theta = 360 / cellCount;
  var cellSize = isHorizontal ? cellWidth : cellHeight;
  radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i];
    if (i < cellCount) {
      // visible cell
      cell.style.opacity = 1;
      var cellAngle = theta * i;
      cell.style.transform =
        rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
    } else {
      // hidden cell
      cell.style.opacity = 0;
      cell.style.transform = 'none';
    }
  }

  rotateCarousel();
}

var orientationRadios = document.querySelectorAll('input[name="orientation"]');
(function () {
  for (var i = 0; i < orientationRadios.length; i++) {
    var radio = orientationRadios[i];
    radio.addEventListener('change', onOrientationChange);
  }
})();

function onOrientationChange() {
  var checkedRadio = document.querySelector(
    'input[name="orientation"]:checked'
  );
  isHorizontal = true; //checkedRadio.value == 'horizontal';
  rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
  changeCarousel();
}

function setActiveButton(itemIndex) {
  let items = document.querySelectorAll('.carousel-skip-to__item');
  items = Array.from(items);
  items.forEach((item, index) => {
    item.classList.remove('carousel-skip-to--active');
    if (parseInt(item.id) === parseInt(itemIndex)) {
      item.classList.add('carousel-skip-to--active');
    }
  });
}

// set initials
onOrientationChange();

const timeout = setInterval(() => {
  if (!isScrolling) return;
  // selectedIndex++;
  //setActiveButton(selectedIndex);

  // rotateCarousel();
}, 5000);

// for the menu

const button = document.getElementById('menu-button');
const menuUL = document.getElementById('menu-UL');

button.addEventListener('click', function(){
  if (menuUL.classList.contains('is-active')) {
    menuUL.classList.remove('is-active')
  } else menuUL.classList.add('is-active');
});

// for the press carousel

window.onload = function () {
  const container = document.getElementById('press')
  const slides = document.getElementsByClassName('slide')

  let i = 1

  setInterval(() => {
    const slideWidth = (slides[0].clientWidth / 94 * 100);
    if (i === slides.length) {
      container.scrollLeft -= (slideWidth * (slides.length - 1))
      i = 1
    }
    else {
      container.scrollLeft += slideWidth;
      i++
    }
  }, 10000)
}

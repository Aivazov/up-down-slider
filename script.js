const refs = {
  upBtn: document.querySelector('.up-button'),
  downBtn: document.querySelector('.down-button'),
  sidebar: document.querySelector('.sidebar'),
  mainSlide: document.querySelector('.main-slide'),
  container: document.querySelector('.container'),
};

const slidesCount = refs.mainSlide.querySelectorAll('div').length;
let activeSlideIndex = 0;

refs.sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

refs.upBtn.addEventListener('click', () => {
  changeSlide('up');
});

refs.downBtn.addEventListener('click', () => {
  changeSlide('down');
});

function changeSlide(direction) {
  if (direction === 'up') {
    console.log('activeSlideIndex: ', activeSlideIndex);
    activeSlideIndex += 1;
    if (activeSlideIndex === slidesCount) {
      console.log(slidesCount);
      activeSlideIndex = 0;
    } else if (direction === 'down') {
      activeSlideIndex === slidesCount - 1;
    }
  }

  if (direction === 'down') {
    console.log('activeSlideIndex: ', activeSlideIndex);
    activeSlideIndex -= 1;
    if (activeSlideIndex === -1) {
      console.log('down', slidesCount);
      activeSlideIndex = 3;
    } else if (direction === 'up') {
      activeSlideIndex === slidesCount + 1;
    }
  }

  const heigthOfContainer = refs.container.clientHeight;

  refs.mainSlide.style.transform = `translateY(-${
    activeSlideIndex * heigthOfContainer
  }px)`;
  refs.sidebar.style.transform = `translateY(${
    activeSlideIndex * heigthOfContainer
  }px)`;
}

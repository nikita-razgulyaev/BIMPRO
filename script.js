const service = document.getElementById('service');
const dropdownMenu = document.getElementById('dropdownMenu');

service.addEventListener('mouseover', () => {
  dropdownMenu.style.display = 'block'
  
  service.addEventListener('mouseout', () => {
  dropdownMenu.style.display = 'none'
  });

  dropdownMenu.addEventListener('mouseover', () => {
    dropdownMenu.style.display = 'block'
  });

  dropdownMenu.addEventListener('mouseout', () => {
    dropdownMenu.style.display = 'none'
  });

});

function scrollToHome() {
  const section = document.getElementById('home');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY; // Получаем позицию секции относительно верхней части страницы

  function windowReload() {
    location.reload()
  }

  function checkElementVisibility(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
  
    if (rect.top >= 0 && rect.top <= windowHeight) {
      windowReload()
    } else {
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
      
      window.addEventListener('scroll', () => {
        const target = document.getElementById('home');
        const rect = target.getBoundingClientRect();
    
        if (rect.top <= 0 && rect.bottom >= 0) {
          setTimeout(windowReload, 300);
        }
      });
    }
  }
  checkElementVisibility(section);
}

function scrollToServices() {
  const section = document.getElementById('services');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 100;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToServiceOne() {
  const section = document.getElementById('service-1');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 50;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToServiceTwo() {
  const section = document.getElementById('service-2');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 50;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToServiceThree() {
  const section = document.getElementById('service-3');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 50;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToServiceFour() {
  const section = document.getElementById('service-4');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 50;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToServiceFive() {
  const section = document.getElementById('service-5');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 50;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToServiceSix() {
  const section = document.getElementById('service-6');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 50;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToAdvantage() {
  const section = document.getElementById('advantages');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 120;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToProjects() {
  const section = document.getElementById('projects');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition + 20;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToTeam() {
  const section = document.getElementById('team');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 30;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToGuarantee() {
  const section = document.getElementById('guarantee');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 50;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToContacts() {
  const section = document.getElementById('contacts');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - 50;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

let currentSlide = 0;
const slides = document.querySelectorAll('.start-page__slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('start-page__slide--active'));
    
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }
    
    slides[currentSlide].classList.add('start-page__slide--active');
}

document.getElementById('nextBtn').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

showSlide(currentSlide);

let currentScrollThumb = 0;
const scrollThumb = document.getElementById('scrollThumb');
const totalSlides = 6;
const slideWidth = 42.33;

function updateScrollThumbPosition() {
  scrollThumb.style.left = `${currentScrollThumb * slideWidth}px`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
  currentScrollThumb++;
  if (currentScrollThumb >= totalSlides) {
    currentScrollThumb = 0;
  }
  updateScrollThumbPosition();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentScrollThumb--;
  if (currentScrollThumb < 0) {
    currentScrollThumb = totalSlides - 1;
  }
  updateScrollThumbPosition();
});

updateScrollThumbPosition();

function showPercent() {
  let count = 1;
  const percent = document.getElementById('percent');
  
  const counter = setInterval(() => {
      if (count <= 20) {
        percent.textContent = `+${count}`;
        count++;
      } else {
          clearInterval(counter);
      }
  }, 75);
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const percentElement = document.getElementById('percent');
  const fillingElement = document.querySelector('.speed-sales__figure-filling');

  if (isElementInViewport(percentElement)) {
    showPercent();
    
    if (fillingElement) {
      fillingElement.style.animation = 'show-percent 1.5s';
    }

    window.removeEventListener('scroll', handleScroll);
  }
}

window.addEventListener('scroll', handleScroll);

document.querySelectorAll('.answers-to-questions__question').forEach(block => {
  block.addEventListener('click', () => {
    document.querySelectorAll('.answers-to-questions__question').forEach(item => {
      item.classList.remove('active');
    });
    block.classList.add('active');
  });
});

let isFunctionRunning = false;

function addActiveClass() {
  if (isFunctionRunning) {
    return;
  }

  isFunctionRunning = true;

  for (let i = 1; i <= 3; i++) {
    const questionElement = document.querySelector(`.answers-to-questions__question.--${i}`);
    const answerElement = document.querySelector(`.answers-to-questions__answers.--${i}`);

    if (questionElement && answerElement) {
      questionElement.addEventListener('click', function() {
        for (let j = 1; j <= 3; j++) {
          const otherAnswerElement = document.querySelector(`.answers-to-questions__answers.--${j}`);
          if (otherAnswerElement) {
            otherAnswerElement.classList.remove('active');
            otherAnswerElement.classList.remove('content-active');
          }
        }
        answerElement.classList.add('active');
        setTimeout(() => {
          answerElement.classList.add('content-active');
          isFunctionRunning = false;
        }, 950);
      });
    }
  }
}

addActiveClass();

document.querySelectorAll('.answers-to-questions__answer.--1').forEach(block => {
  block.addEventListener('click', () => {
    document.querySelectorAll('.answers-to-questions__answer.--1').forEach(item => {
        item.classList.remove('active');
    });
    block.classList.add('active');
  });
});

document.querySelectorAll('.answers-to-questions__answer.--2').forEach(block => {
  block.addEventListener('click', () => {
    document.querySelectorAll('.answers-to-questions__answer.--2').forEach(item => {
        item.classList.remove('active');
    });
    block.classList.add('active');
  });
});

document.querySelectorAll('.answers-to-questions__answer.--3').forEach(block => {
  block.addEventListener('click', () => {
    document.querySelectorAll('.answers-to-questions__answer.--3').forEach(item => {
        item.classList.remove('active');
    });
    block.classList.add('active');
  });
});

const questionElements = document.querySelectorAll('.service__answer-to-question');
let isProcessing = false;

questionElements.forEach(element => {
  element.addEventListener('click', () => {
    if (isProcessing) return;

    isProcessing = true;

    const isActive = element.classList.contains('active');

    if (isActive) {
      isProcessing = false;
      return;
    }

    questionElements.forEach(el => {
      el.classList.remove('active');
      el.classList.remove('content-active');
    });

    element.classList.add('active');

    setTimeout(() => {
      element.classList.add('content-active');
      isProcessing = false;
    }, 950);
  });
});

const image1 = document.querySelector('.service__image.--1');
const image2 = document.querySelector('.service__image.--2');
const scrollThumb1 = document.querySelector('.services__scroll-thumb.--1');

let currentImage1 = 1;

function updateImageDisplay1() {
  if (currentImage1 === 1) {
    image1.style.display = 'block';
    image2.style.display = 'none';
    scrollThumb1.style.marginLeft = '33px';
  } else {
    image1.style.display = 'none';
    image2.style.display = 'block';
    scrollThumb1.style.marginLeft = '159.5px';
  }
}

document.querySelector('.services__prev-button.--1').addEventListener('click', () => {
  currentImage1 = currentImage1 === 1 ? 2 : 1;
  updateImageDisplay1();
});

document.querySelector('.services__next-button.--1').addEventListener('click', () => {
  currentImage1 = currentImage1 === 1 ? 2 : 1;
  updateImageDisplay1();
});

updateImageDisplay1();


const image3 = document.querySelector('.service__image.--3');
const image4 = document.querySelector('.service__image.--4');
const scrollThumb2 = document.querySelector('.services__scroll-thumb.--2');

let currentImage2 = 1;

function updateImageDisplay2() {
  if (currentImage2 === 1) {
    image3.style.display = 'block';
    image4.style.display = 'none';
    scrollThumb2.style.marginLeft = '33px';
  } else {
    image3.style.display = 'none';
    image4.style.display = 'block';
    scrollThumb2.style.marginLeft = '159.5px';
  }
}

document.querySelector('.services__prev-button.--2').addEventListener('click', () => {
  currentImage2 = currentImage2 === 1 ? 2 : 1;
  updateImageDisplay2();
});

document.querySelector('.services__next-button.--2').addEventListener('click', () => {
  currentImage2 = currentImage2 === 1 ? 2 : 1;
  updateImageDisplay2();
});

updateImageDisplay2();


const image5 = document.querySelector('.service__image.--5');
const image6 = document.querySelector('.service__image.--6');
const scrollThumb3 = document.querySelector('.services__scroll-thumb.--3');

let currentImage3 = 1;

function updateImageDisplay3() {
  if (currentImage3 === 1) {
    image5.style.display = 'block';
    image6.style.display = 'none';
    scrollThumb3.style.marginLeft = '33px';
  } else {
    image5.style.display = 'none';
    image6.style.display = 'block';
    scrollThumb3.style.marginLeft = '159.5px';
  }
}

document.querySelector('.services__prev-button.--3').addEventListener('click', () => {
  currentImage3 = currentImage3 === 1 ? 2 : 1;
  updateImageDisplay3();
});

document.querySelector('.services__next-button.--3').addEventListener('click', () => {
  currentImage3 = currentImage3 === 1 ? 2 : 1;
  updateImageDisplay3();
});

updateImageDisplay3();


const image7 = document.querySelector('.service__image.--7');
const image8 = document.querySelector('.service__image.--8');
const scrollThumb4 = document.querySelector('.services__scroll-thumb.--4');

let currentImage4 = 1;

function updateImageDisplay4() {
  if (currentImage4 === 1) {
    image7.style.display = 'block';
    image8.style.display = 'none';
    scrollThumb4.style.marginLeft = '33px';
  } else {
    image7.style.display = 'none';
    image8.style.display = 'block';
    scrollThumb4.style.marginLeft = '159.5px';
  }
}

document.querySelector('.services__prev-button.--4').addEventListener('click', () => {
    currentImage4 = currentImage4 === 1 ? 2 : 1;
    updateImageDisplay4();
});

document.querySelector('.services__next-button.--4').addEventListener('click', () => {
    currentImage4 = currentImage4 === 1 ? 2 : 1;
    updateImageDisplay4();
});

updateImageDisplay4();


const image9 = document.querySelector('.service__image.--9');
const image10 = document.querySelector('.service__image.--10');
const scrollThumb5 = document.querySelector('.services__scroll-thumb.--5');

let currentImage5 = 1;

function updateImageDisplay5() {
  if (currentImage5 === 1) {
    image9.style.display = 'block';
    image10.style.display = 'none';
    scrollThumb5.style.marginLeft = '33px';
  } else {
    image9.style.display = 'none';
    image10.style.display = 'block';
    scrollThumb5.style.marginLeft = '159.5px';
  }
}

document.querySelector('.services__prev-button.--5').addEventListener('click', () => {
    currentImage5 = currentImage5 === 1 ? 2 : 1;
    updateImageDisplay5();
});

document.querySelector('.services__next-button.--5').addEventListener('click', () => {
    currentImage5 = currentImage5 === 1 ? 2 : 1;
    updateImageDisplay5();
});

updateImageDisplay5();

const image11 = document.querySelector('.service__image.--11');
const image12 = document.querySelector('.service__image.--12');
const scrollThumb6 = document.querySelector('.services__scroll-thumb.--6');

let currentImage6 = 1;

function updateImageDisplay6() {
    if (currentImage6 === 1) {
        image11.style.display = 'block';
        image12.style.display = 'none';
        scrollThumb6.style.marginLeft = '33px';
    } else {
        image11.style.display = 'none';
        image12.style.display = 'block';
        scrollThumb6.style.marginLeft = '159.5px';
    }
}

document.querySelector('.services__prev-button.--6').addEventListener('click', () => {
    currentImage6 = currentImage6 === 1 ? 2 : 1;
    updateImageDisplay6();
});

// Обработчик клика на кнопку "Следующий"
document.querySelector('.services__next-button.--6').addEventListener('click', () => {
    currentImage6 = currentImage6 === 1 ? 2 : 1;
    updateImageDisplay6();
});

updateImageDisplay6();

const popupOne = document.getElementById('popupOne');
const body = document.body;

const openPopupOne = document.getElementById('openPopupOne');
const closePopupOne = document.getElementById('closePopupOne');
const overlay = document.getElementById('overlay');

overlay.addEventListener('click', () => {
  bodyContainer.style.marginLeft = '0px';
});

openPopupOne.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupOne.style.display = 'block';
  body.classList.add('no-scroll');
  bodyContainer.style.marginLeft = '-21px';
});

closePopupOne.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupOne.style.display = 'none';
  body.classList.remove('no-scroll');
  bodyContainer.style.marginLeft = '0';
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupOne.style.display = 'none';
  body.classList.remove('no-scroll');
});

const openPopupTwo = document.getElementById('openPopupTwo');
const closePopupTwo = document.getElementById('closePopupTwo');
const popupTwo = document.getElementById('popupTwo');

openPopupTwo.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupTwo.style.display = 'block';
  body.classList.add('no-scroll');
  bodyContainer.style.marginLeft = '-21px';
});

closePopupTwo.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupTwo.style.display = 'none';
  body.classList.remove('no-scroll');
  bodyContainer.style.marginLeft = '0';
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupTwo.style.display = 'none';
  body.classList.remove('no-scroll');
});

const firstOpenPopupTSOne = document.getElementById('firstOpenPopupTSOne');
const secondOpenPopupTSOne = document.getElementById('secondOpenPopupTSOne');
const closePopupTSOne = document.getElementById('closePopupTSOne');
const popupTSOne = document.getElementById('popupTSOne');

firstOpenPopupTSOne.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupTSOne.style.display = 'block';
  body.classList.add('no-scroll');
  bodyContainer.style.marginLeft = '-21px';
});

secondOpenPopupTSOne.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupTSOne.style.display = 'block';
  body.classList.add('no-scroll');
  bodyContainer.style.marginLeft = '-21px';
});

closePopupTSOne.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupTSOne.style.display = 'none';
  body.classList.remove('no-scroll');
  bodyContainer.style.marginLeft = '0';
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupTSOne.style.display = 'none';
  body.classList.remove('no-scroll');
});

const firstOpenPopupTSTwo = document.getElementById('firstOpenPopupTSTwo');
const secondOpenPopupTSTwo = document.getElementById('secondOpenPopupTSTwo');
const closePopupTSTwo = document.getElementById('closePopupTSTwo');
const popupTSTwo = document.getElementById('popupTSTwo');

firstOpenPopupTSTwo.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupTSTwo.style.display = 'block';
  body.classList.add('no-scroll');
  bodyContainer.style.marginLeft = '-21px';
});

secondOpenPopupTSTwo.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupTSTwo.style.display = 'block';
  body.classList.add('no-scroll');
  bodyContainer.style.marginLeft = '-21px';
});

closePopupTSTwo.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupTSTwo.style.display = 'none';
  body.classList.remove('no-scroll');
  bodyContainer.style.marginLeft = '0';
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupTSTwo.style.display = 'none';
  body.classList.remove('no-scroll');
});

const firstOpenPopupTSThree = document.getElementById('firstOpenPopupTSThree');
const secondOpenPopupTSThree = document.getElementById('secondOpenPopupTSThree');
const closePopupTSThree = document.getElementById('closePopupTSThree');
const popupTSThree = document.getElementById('popupTSThree');

firstOpenPopupTSThree.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupTSThree.style.display = 'block';
  body.classList.add('no-scroll');
  bodyContainer.style.marginLeft = '-21px';
});

secondOpenPopupTSThree.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupTSThree.style.display = 'block';
  body.classList.add('no-scroll');
  bodyContainer.style.marginLeft = '-21px';
});

closePopupTSThree.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupTSThree.style.display = 'none';
  body.classList.remove('no-scroll');
  bodyContainer.style.marginLeft = '0';
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupTSThree.style.display = 'none';
  body.classList.remove('no-scroll');
});

const firstOpenPopupTSFour = document.getElementById('firstOpenPopupTSFour');
const closePopupTSFour = document.getElementById('closePopupTSFour');
const popupTSFour = document.getElementById('popupTSFour');

firstOpenPopupTSFour.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupTSFour.style.display = 'block';
  body.classList.add('no-scroll');
  bodyContainer.style.marginLeft = '-21px';
});

closePopupTSFour.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupTSFour.style.display = 'none';
  body.classList.remove('no-scroll');
  bodyContainer.style.marginLeft = '0';
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupTSFour.style.display = 'none';
  body.classList.remove('no-scroll');
});

const firstOpenPopupTSFive = document.getElementById('firstOpenPopupTSFive');
const secondOpenPopupTSFive = document.getElementById('secondOpenPopupTSFive');
const thirdOpenPopupTSFive = document.getElementById('thirdOpenPopupTSFive');
const fourthOpenPopupTSFive = document.getElementById('fourthOpenPopupTSFive');
const closePopupTSFive = document.getElementById('closePopupTSFive');
const popupTSFive = document.getElementById('popupTSFive');

firstOpenPopupTSFive.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupTSFive.style.display = 'block';
  body.classList.add('no-scroll');
  bodyContainer.style.marginLeft = '-21px';
});

secondOpenPopupTSFive.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupTSFive.style.display = 'block';
  body.classList.add('no-scroll');
  bodyContainer.style.marginLeft = '-21px';
});

thirdOpenPopupTSFive.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupTSFive.style.display = 'block';
  body.classList.add('no-scroll');
  bodyContainer.style.marginLeft = '-21px';
});

fourthOpenPopupTSFive.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupTSFive.style.display = 'block';
  body.classList.add('no-scroll');
  bodyContainer.style.marginLeft = '-21px';
});

closePopupTSFive.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupTSFive.style.display = 'none';
  body.classList.remove('no-scroll');
  bodyContainer.style.marginLeft = '0';
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupTSFive.style.display = 'none';
  body.classList.remove('no-scroll');
});

const tags = document.querySelectorAll('.projects__tag');
const cards = document.querySelectorAll('.projects__item');
const resetButton = document.getElementById('resetTagButton');

tags.forEach(tag => {
  tag.addEventListener('click', () => {
    tag.classList.toggle('active');
    filterCards();
  });
});

resetButton.addEventListener('click', () => {
  tags.forEach(tag => tag.classList.remove('active'));
  filterCards();
});

function filterCards() {
  const activeTags = Array.from(tags)
    .filter(tag => tag.classList.contains('active'))
    .map(tag => tag.getAttribute('data-tag'));

  cards.forEach(card => {
    const cardTags = card.getAttribute('data-tag').split(' ');
    const isVisible = activeTags.length === 0 || activeTags.every(tag => cardTags.includes(tag));
    card.style.display = isVisible ? 'flex' : 'none';
  });
}


function checkAndBalanceColumns() {
  const column1 = document.getElementById('column1');
  const column2 = document.getElementById('column2');

  Array.from(column1.children).forEach(card => {
    const cardId = parseInt(card.id.replace('card', ''));
    if (cardId % 2 === 0) {
      moveCard(card, column2);
    }
  });

  sortCardsInColumn(column2);
}

function moveCard(cardToMove, toColumn) {
  if (cardToMove) {
    toColumn.appendChild(cardToMove);
  }
}

function sortCardsInColumn(column) {
  const cards = Array.from(column.children);
  cards.sort((a, b) => {
      return parseInt(a.id.replace('card', '')) - parseInt(b.id.replace('card', ''));
  });

  column.innerHTML = '';
  cards.forEach(card => column.appendChild(card));
}

document.addEventListener('DOMContentLoaded', checkAndBalanceColumns);

tags.forEach(tag => {
  tag.addEventListener('click', checkAndBalanceColumns);
});

if (resetButton) {
  resetButton.addEventListener('click', checkAndBalanceColumns);
}

document.querySelectorAll('.working-with-us__question').forEach(block => {
  block.addEventListener('click', () => {
    document.querySelectorAll('.working-with-us__question').forEach(item => {
      item.classList.remove('active');
    });
    block.classList.add('active');
  });
});

function addActiveClassTwo() {
  for (let i = 1; i <= 3; i++) {
     
    const questionElement = document.querySelector(`.working-with-us__question.--${i}`);
    const answerElement = document.querySelector(`.working-with-us__answers.--${i}`);

    if (questionElement && answerElement) {
      questionElement.addEventListener('click', function() {
        for (let j = 1; j <= 3; j++) {
          const otherAnswerElement = document.querySelector(`.working-with-us__answers.--${j}`);
          if (otherAnswerElement) {
            otherAnswerElement.classList.remove('active');
          }
        }
        answerElement.classList.add('active');
      });
    }
  }
}

addActiveClassTwo();

const MediaCards = document.querySelectorAll('.mass-media__slide');
let currentIndex = 0;
const cardsPerPage = 4;
const totalCards = MediaCards.length;
const totalGroups = Math.ceil(totalCards / cardsPerPage);
const counter = document.getElementById('MediaSlideNumber');
const mediaSlide = document.querySelectorAll('.mass-media__line')

function updateCards() {
  MediaCards.forEach(card => {
      card.style.display = 'none';
  });

  for (let i = currentIndex; i < currentIndex + cardsPerPage; i++) {
      if (MediaCards[i]) {
        MediaCards[i].style.display = 'grid';
    }
  }
  updateCounter();
}

function updateCounter() {
  counter.textContent = `${(currentIndex / cardsPerPage) + 1}/${totalGroups}`;
}

const allMediaLine = document.querySelectorAll('.mass-media__line');
const firstMediaLine = document.querySelector('.mass-media__line.--1');
const secondMediaLine = document.querySelector('.mass-media__line.--2');

document.getElementById('nextMediaSlide').addEventListener('click', () => {
    if (currentIndex < totalCards - cardsPerPage) {
        currentIndex += cardsPerPage;
        updateCards();
    }

    allMediaLine.forEach(line => {
        line.classList.remove('active');
    });

    secondMediaLine.classList.add('active');
});

document.getElementById('prevMediaSlide').addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= cardsPerPage;
      updateCards();
    }

    allMediaLine.forEach(line => {
      line.classList.remove('active');
    });

    firstMediaLine.classList.add('active');
});

updateCards();

const newsCards = document.querySelectorAll('.news__slide');
let currentIndexNews = 0;
const cardsPerNewsPage = 4;
const totalCardsNews = newsCards.length;
const totalGroupsNews = Math.ceil(totalCardsNews / cardsPerNewsPage);
const newsCounter = document.getElementById('newsSlideNumber');
const newsSlide = document.querySelectorAll('.news__line');

function updateCardsNews() {
  newsCards.forEach(card => {
    card.style.display = 'none';
  });

  for (let i = currentIndexNews; i < currentIndexNews + cardsPerNewsPage; i++) {
    if (newsCards[i]) {
      newsCards[i].style.display = 'grid';
    }
  }
  updateCounterNews();
}

function updateCounterNews() {
  newsCounter.textContent = `${(currentIndexNews / cardsPerNewsPage) + 1}/${totalGroupsNews}`;
}

const allNewsLine = document.querySelectorAll('.news__line');
const firstNewsLine = document.querySelector('.news__line.--1');
const secondNewsLine = document.querySelector('.news__line.--2');

document.getElementById('nextNewsSlide').addEventListener('click', () => {
    if (currentIndexNews < totalCardsNews - cardsPerNewsPage) {
      currentIndexNews = Math.min(totalCardsNews - cardsPerNewsPage, currentIndexNews + cardsPerNewsPage);
      updateCardsNews();
    }

    allNewsLine.forEach(line => {
      line.classList.remove('active');
    });

    secondNewsLine.classList.add('active');
});

document.getElementById('prevNewsSlide').addEventListener('click', () => {
    if (currentIndexNews > 0) {
      currentIndexNews = Math.max(0, currentIndexNews - cardsPerNewsPage);
      updateCardsNews();
    }

    allNewsLine.forEach(line => {
        line.classList.remove('active');
    });

    firstNewsLine.classList.add('active');
});

updateCardsNews();

const feedbackFormOverlay = document.getElementById('feedbackFormOverlay');
const closeFeedbackForm = document.getElementById('closeFeedbackForm');
const feedbackForm = document.getElementById('feedbackForm');
const bodyContainer = document.getElementById('bodyContainer');

function activeForm() {
  feedbackFormOverlay.style.display = 'block';
  feedbackForm.style.display = 'block';
  body.classList.add('no-scroll');
  bodyContainer.style.marginLeft = '-21px';
};

const feedbackButton1 = document.getElementById('feedbackButton1');
const feedbackButton2 = document.getElementById('feedbackButton2');
const feedbackButton3 = document.getElementById('feedbackButton3');
const feedbackButton4 = document.getElementById('feedbackButton4');
const feedbackButton5 = document.getElementById('feedbackButton5');
const feedbackButton6 = document.getElementById('feedbackButton6');
const feedbackButton7 = document.getElementById('feedbackButton7');
const feedbackButton8 = document.getElementById('feedbackButton8');
const feedbackButton9 = document.getElementById('feedbackButton9');
const feedbackButton10 = document.getElementById('feedbackButton10');
const feedbackButton11 = document.getElementById('feedbackButton11');

feedbackButton1.addEventListener('click', activeForm);
feedbackButton2.addEventListener('click', activeForm);
feedbackButton3.addEventListener('click', activeForm);
feedbackButton4.addEventListener('click', activeForm);
feedbackButton5.addEventListener('click', activeForm);
feedbackButton6.addEventListener('click', activeForm);
feedbackButton7.addEventListener('click', activeForm);
feedbackButton8.addEventListener('click', activeForm);
feedbackButton9.addEventListener('click', activeForm);
feedbackButton10.addEventListener('click', activeForm);
feedbackButton11.addEventListener('click', activeForm);

closeFeedbackForm.addEventListener('click', () => {
  feedbackFormOverlay.style.display = 'none';
  feedbackForm.style.display = 'none';
  body.classList.remove('no-scroll');
  bodyContainer.style.marginLeft = '0px';
});

feedbackFormOverlay.addEventListener('click', () => {
  feedbackFormOverlay.style.display = 'none';
  feedbackForm.style.display = 'none';
  body.classList.remove('no-scroll');
  bodyContainer.style.marginLeft = '0px';
});

const firstFramefeedbackForm = document.getElementById('firstFramefeedbackForm');
const secondFramefeedbackForm = document.getElementById('secondFramefeedbackForm');
const thirdFramefeedbackForm = document.getElementById('thirdFramefeedbackForm');

const inputs = document.querySelectorAll('.feedback-form__input');
const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');

document.getElementById('InputButton').addEventListener('click', function() {
  let allFilled = true;

  inputs.forEach(function(input) {
    if (input.value.trim() === '') {
        allFilled = false;
        input.classList.add('error');
    } else {
        input.classList.remove('error');
    }
  });

  if (allFilled) {
    inputs.forEach(function(input) {
      input.value = '';
    });

    firstFramefeedbackForm.style.display = 'none';
    secondFramefeedbackForm.style.display = 'flex';
    
    function showSuccessfulSending() {
      secondFramefeedbackForm.style.display = 'none';
      thirdFramefeedbackForm.style.display = 'grid';
    }

    setTimeout(showSuccessfulSending, 1500);
  }
});

closeFeedbackForm.addEventListener('click', () => {
  firstFramefeedbackForm.style.display = 'grid';
  secondFramefeedbackForm.style.display = 'none';
  thirdFramefeedbackForm.style.display = 'none';

  inputs.forEach(function(input) {
    input.value = '';
  });

  inputOne.classList.remove('error');
  inputTwo.classList.remove('error');
});

feedbackFormOverlay.addEventListener('click', () => {
  firstFramefeedbackForm.style.display = 'grid';
  secondFramefeedbackForm.style.display = 'none';
  thirdFramefeedbackForm.style.display = 'none';

  inputs.forEach(function(input) {
    input.value = '';
  });
  
  inputOne.classList.remove('error');
  inputTwo.classList.remove('error');
});

function projectButtonText() {
  alert('На данный момент больше проектов нет');
}
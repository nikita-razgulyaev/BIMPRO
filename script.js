const selectors = {
  service: 'service',
  dropdownMenu: 'dropdownMenu',
  sections: {
    home: 'home',
    services: 'services',
    serviceOne: 'service-1',
    serviceTwo: 'service-2',
    serviceThree: 'service-3',
    serviceFour: 'service-4',
    serviceFive: 'service-5',
    serviceSix: 'service-6',
    advantages: 'advantages',
    projects: 'projects',
    team: 'team',
    guarantee: 'guarantee',
    contacts: 'contacts'
  },
  slides: '.start-page__slide',
  nextBtn: 'nextBtn',
  prevBtn: 'prevBtn',
  scrollThumb: 'scrollThumb',
  percent: 'percent',
  questions: '.answers-to-questions__question',
  answers: '.answers-to-questions__answer',
  serviceQuestions: '.service__answer-to-question',
  serviceImages: '.service__image',
  servicePrev: '.services__prev-button',
  serviceNext: '.services__next-button',
  serviceThumb: '.services__scroll-thumb',
  popups: {
    one: { id: 'popupOne', open: ['openPopupOne'], close: 'closePopupOne' },
    two: { id: 'popupTwo', open: ['openPopupTwo'], close: 'closePopupTwo' },
    tsOne: { id: 'popupTSOne', open: ['firstOpenPopupTSOne', 'secondOpenPopupTSOne'], close: 'closePopupTSOne' },
    tsTwo: { id: 'popupTSTwo', open: ['firstOpenPopupTSTwo', 'secondOpenPopupTSTwo'], close: 'closePopupTSTwo' },
    tsThree: { id: 'popupTSThree', open: ['firstOpenPopupTSThree', 'secondOpenPopupTSThree'], close: 'closePopupTSThree' },
    tsFour: { id: 'popupTSFour', open: ['firstOpenPopupTSFour'], close: 'closePopupTSFour' },
    tsFive: { id: 'popupTSFive', open: ['firstOpenPopupTSFive', 'secondOpenPopupTSFive', 'thirdOpenPopupTSFive', 'fourthOpenPopupTSFive'], close: 'closePopupTSFive' }
  },
  overlay: 'overlay',
  bodyContainer: 'bodyContainer',
  projects: {
    tags: '.projects__tag',
    items: '.projects__item',
    reset: 'resetTagButton',
    column1: 'column1',
    column2: 'column2'
  },
  workingQuestions: '.working-with-us__question',
  workingAnswers: '.working-with-us__answers',
  media: {
    slides: '.mass-media__slide',
    counter: 'MediaSlideNumber',
    lines: '.mass-media__line',
    line1: '.mass-media__line.--1',
    line2: '.mass-media__line.--2',
    next: 'nextMediaSlide',
    prev: 'prevMediaSlide'
  },
  news: {
    slides: '.news__slide',
    counter: 'newsSlideNumber',
    lines: '.news__line',
    line1: '.news__line.--1',
    line2: '.news__line.--2',
    next: 'nextNewsSlide',
    prev: 'prevNewsSlide'
  },
  feedback: {
    overlay: 'feedbackFormOverlay',
    form: 'feedbackForm',
    close: 'closeFeedbackForm',
    buttons: ['feedbackButton1', 'feedbackButton2', 'feedbackButton3', 'feedbackButton4', 'feedbackButton5', 
              'feedbackButton6', 'feedbackButton7', 'feedbackButton8', 'feedbackButton9', 'feedbackButton10', 'feedbackButton11'],
    frames: {
      first: 'firstFramefeedbackForm',
      second: 'secondFramefeedbackForm',
      third: 'thirdFramefeedbackForm'
    },
    inputs: '.feedback-form__input',
    inputOne: 'inputOne',
    inputTwo: 'inputTwo',
    submit: 'InputButton'
  }
};

// Generic scroll function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const screenHeightOffset = window.innerHeight * 0.14;
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY - screenHeightOffset;
    window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
  }
}

// Home scroll with reload logic
function scrollToHome() {
  const section = document.getElementById(selectors.sections.home);
  if (section) {
    const screenHeightOffset = window.innerHeight * 0.14;
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY - screenHeightOffset;

    function windowReload() {
      location.reload();
    }

    function checkElementVisibility(element) {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        windowReload();
      } else {
        window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
        window.addEventListener('scroll', () => {
          const target = document.getElementById(selectors.sections.home);
          const rect = target.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom >= 0) {
            setTimeout(windowReload, 300);
          }
        }, { once: true });
      }
    }
    checkElementVisibility(section);
  }
}

// Dropdown menu
const service = document.getElementById(selectors.service);
const dropdownMenu = document.getElementById(selectors.dropdownMenu);
service.addEventListener('mouseover', () => dropdownMenu.style.display = 'block');
service.addEventListener('mouseout', () => dropdownMenu.style.display = 'none');
dropdownMenu.addEventListener('mouseover', () => dropdownMenu.style.display = 'block');
dropdownMenu.addEventListener('mouseout', () => dropdownMenu.style.display = 'none');

// Slides
let currentSlide = 0;
const slides = document.querySelectorAll(selectors.slides);

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('start-page__slide--active'));
  currentSlide = index < 0 ? slides.length - 1 : index >= slides.length ? 0 : index;
  slides[currentSlide].classList.add('start-page__slide--active');
}

document.getElementById(selectors.nextBtn).addEventListener('click', () => {
  showSlide(currentSlide + 1);
  updateScrollThumb();
});
document.getElementById(selectors.prevBtn).addEventListener('click', () => {
  showSlide(currentSlide - 1);
  updateScrollThumb();
});

// Scroll thumb
let currentScrollThumb = 0;
const scrollThumb = document.getElementById(selectors.scrollThumb);
const totalSlides = 6;
const slideWidth = 42.33;

function updateScrollThumb() {
  currentScrollThumb = currentSlide;
  scrollThumb.style.left = `${currentScrollThumb * slideWidth}px`;
}
showSlide(currentSlide);
updateScrollThumb();

// Percent counter
function showPercent() {
  let count = 1;
  const percent = document.getElementById(selectors.percent);
  const counter = setInterval(() => {
    if (count <= 20) {
      percent.textContent = `+${count++}`;
    } else {
      clearInterval(counter);
    }
  }, 75);
}

function handleScroll() {
  const percentElement = document.getElementById(selectors.percent);
  const fillingElement = document.querySelector('.speed-sales__figure-filling');
  if (isElementInViewport(percentElement)) {
    showPercent();
    if (fillingElement) fillingElement.style.animation = 'show-percent 1.5s';
    window.removeEventListener('scroll', handleScroll);
  }
}
window.addEventListener('scroll', handleScroll);

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Questions and answers
function setupToggle(elements, className, activeClass = 'active', contentClass = 'content-active') {
  let isProcessing = false;
  elements.forEach(block => {
    block.addEventListener('click', () => {
      if (isProcessing && contentClass) return;
      isProcessing = true;
      elements.forEach(item => {
        item.classList.remove(activeClass);
        if (contentClass) item.classList.remove(contentClass);
      });
      block.classList.add(activeClass);
      if (contentClass) {
        setTimeout(() => {
          block.classList.add(contentClass);
          isProcessing = false;
        }, 950);
      } else {
        isProcessing = false;
      }
    });
  });
}

[1, 2, 3].forEach(i => {
  setupToggle(document.querySelectorAll(`${selectors.questions}.--${i}`), `answers-to-questions__answer.--${i}`);
  setupToggle(document.querySelectorAll(`${selectors.workingQuestions}.--${i}`), `working-with-us__answers.--${i}`);
});
setupToggle(document.querySelectorAll(selectors.serviceQuestions), 'service__answer-to-question', 'active', 'content-active');

// Image sliders
function setupImageSlider(index) {
  const images = [document.querySelector(`${selectors.serviceImages}.--${index*2-1}`), 
                  document.querySelector(`${selectors.serviceImages}.--${index*2}`)];
  const scrollThumb = document.querySelector(`${selectors.serviceThumb}.--${index}`);
  let currentImage = 1;

  function updateImageDisplay() {
    images[0].style.display = currentImage === 1 ? 'block' : 'none';
    images[1].style.display = currentImage === 2 ? 'block' : 'none';
    scrollThumb.style.marginLeft = currentImage === 1 ? '33px' : '159.5px';
  }

  document.querySelector(`${selectors.servicePrev}.--${index}`).addEventListener('click', () => {
    currentImage = currentImage === 1 ? 2 : 1;
    updateImageDisplay();
  });
  document.querySelector(`${selectors.serviceNext}.--${index}`).addEventListener('click', () => {
    currentImage = currentImage === 1 ? 2 : 1;
    updateImageDisplay();
  });

  updateImageDisplay();
}
[1, 2, 3, 4, 5, 6].forEach(setupImageSlider);

// Popups
function setupPopup(popupConfig) {
  const popup = document.getElementById(popupConfig.id);
  const overlay = document.getElementById(selectors.overlay);
  const body = document.body;
  const bodyContainer = document.getElementById(selectors.bodyContainer);

  function openPopup() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
    body.classList.add('no-scroll');
    bodyContainer.style.marginLeft = '-21px';
  }

  function closePopup() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
    body.classList.remove('no-scroll');
    bodyContainer.style.marginLeft = '0';
  }

  popupConfig.open.forEach(id => {
    const openBtn = document.getElementById(id);
    if (openBtn) openBtn.addEventListener('click', openPopup);
  });
  const closeBtn = document.getElementById(popupConfig.close);
  if (closeBtn) closeBtn.addEventListener('click', closePopup);
  overlay.addEventListener('click', closePopup);
}

Object.values(selectors.popups).forEach(setupPopup);

// Projects
const tags = document.querySelectorAll(selectors.projects.tags);
const cards = document.querySelectorAll(selectors.projects.items);
const resetButton = document.getElementById(selectors.projects.reset);

function filterCards() {
  const activeTags = Array.from(tags)
    .filter(tag => tag.classList.contains('active'))
    .map(tag => tag.getAttribute('data-tag'));
  cards.forEach(card => {
    const cardTags = card.getAttribute('data-tag').split(' ');
    card.style.display = activeTags.length === 0 || activeTags.every(tag => cardTags.includes(tag)) ? 'flex' : 'none';
  });
  checkAndBalanceColumns();
}

tags.forEach(tag => tag.addEventListener('click', () => {
  tag.classList.toggle('active');
  filterCards();
}));
if (resetButton) resetButton.addEventListener('click', () => {
  tags.forEach(tag => tag.classList.remove('active'));
  filterCards();
});

function checkAndBalanceColumns() {
  const column1 = document.getElementById(selectors.projects.column1);
  const column2 = document.getElementById(selectors.projects.column2);
  Array.from(column1.children).forEach(card => {
    if (parseInt(card.id.replace('card', '')) % 2 === 0) {
      column2.appendChild(card);
    }
  });
  sortCardsInColumn(column2);
}

function sortCardsInColumn(column) {
  const cards = Array.from(column.children).sort((a, b) => 
    parseInt(a.id.replace('card', '')) - parseInt(b.id.replace('card', '')));
  column.innerHTML = '';
  cards.forEach(card => column.appendChild(card));
}

document.addEventListener('DOMContentLoaded', checkAndBalanceColumns);

// Media and News sliders
function setupSlider(sliderConfig, cardsSelector, counterId, line1Selector, line2Selector, nextId, prevId) {
  const cards = document.querySelectorAll(cardsSelector);
  let currentIndex = 0;
  const cardsPerPage = 4;
  const totalGroups = Math.ceil(cards.length / cardsPerPage);
  const counter = document.getElementById(counterId);
  const line1 = document.querySelector(line1Selector);
  const line2 = document.querySelector(line2Selector);

  function updateCards() {
    cards.forEach(card => card.style.display = 'none');
    for (let i = currentIndex; i < currentIndex + cardsPerPage; i++) {
      if (cards[i]) cards[i].style.display = 'grid';
    }
    counter.textContent = `${(currentIndex / cardsPerPage) + 1}/${totalGroups}`;
  }

  document.getElementById(nextId).addEventListener('click', () => {
    if (currentIndex < cards.length - cardsPerPage) {
      currentIndex += cardsPerPage;
      updateCards();
      line1.classList.remove('active');
      line2.classList.add('active');
    }
  });

  document.getElementById(prevId).addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= cardsPerPage;
      updateCards();
      line2.classList.remove('active');
      line1.classList.add('active');
    }
  });

  updateCards();
}

setupSlider(selectors.media, selectors.media.slides, selectors.media.counter, 
           selectors.media.line1, selectors.media.line2, selectors.media.next, selectors.media.prev);
setupSlider(selectors.news, selectors.news.slides, selectors.news.counter, 
           selectors.news.line1, selectors.news.line2, selectors.news.next, selectors.news.prev);

// Feedback form
const feedbackFormOverlay = document.getElementById(selectors.feedback.overlay);
const feedbackForm = document.getElementById(selectors.feedback.form);
const body = document.body;
const bodyContainer = document.getElementById(selectors.feedback.bodyContainer);

function activeForm() {
  feedbackFormOverlay.style.display = 'block';
  feedbackForm.style.display = 'block';
  body.classList.add('no-scroll');
  bodyContainer.style.marginLeft = '-21px';
}

selectors.feedback.buttons.forEach(id => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener('click', activeForm);
});

function closeFeedbackForm() {
  feedbackFormOverlay.style.display = 'none';
  feedbackForm.style.display = 'none';
  body.classList.remove('no-scroll');
  bodyContainer.style.marginLeft = '0px';
  resetForm();
}

document.getElementById(selectors.feedback.close).addEventListener('click', closeFeedbackForm);
feedbackFormOverlay.addEventListener('click', closeFeedbackForm);

const frames = {
  first: document.getElementById(selectors.feedback.frames.first),
  second: document.getElementById(selectors.feedback.frames.second),
  third: document.getElementById(selectors.feedback.frames.third)
};
const inputs = document.querySelectorAll(selectors.feedback.inputs);
const inputOne = document.getElementById(selectors.feedback.inputOne);
const inputTwo = document.getElementById(selectors.feedback.inputTwo);

function resetForm() {
  frames.first.style.display = 'grid';
  frames.second.style.display = 'none';
  frames.third.style.display = 'none';
  inputs.forEach(input => input.value = '');
  inputOne.classList.remove('error');
  inputTwo.classList.remove('error');
}

document.getElementById(selectors.feedback.submit).addEventListener('click', () => {
  let allFilled = true;
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      allFilled = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  if (allFilled) {
    inputs.forEach(input => input.value = '');
    frames.first.style.display = 'none';
    frames.second.style.display = 'flex';
    setTimeout(() => {
      frames.second.style.display = 'none';
      frames.third.style.display = 'grid';
    }, 1500);
  }
});

function projectButtonText() {
  alert('На данный момент больше проектов нет');
}

// Expose scroll functions
window.scrollToHome = scrollToHome;
window.scrollToServices = () => scrollToSection(selectors.sections.services);
window.scrollToServiceOne = () => scrollToSection(selectors.sections.serviceOne);
window.scrollToServiceTwo = () => scrollToSection(selectors.sections.serviceTwo);
window.scrollToServiceThree = () => scrollToSection(selectors.sections.serviceThree);
window.scrollToServiceFour = () => scrollToSection(selectors.sections.serviceFour);
window.scrollToServiceFive = () => scrollToSection(selectors.sections.serviceFive);
window.scrollToServiceSix = () => scrollToSection(selectors.sections.serviceSix);
window.scrollToAdvantage = () => scrollToSection(selectors.sections.advantages);
window.scrollToProjects = () => scrollToSection(selectors.sections.projects);
window.scrollToTeam = () => scrollToSection(selectors.sections.team);
window.scrollToGuarantee = () => scrollToSection(selectors.sections.guarantee);
window.scrollToContacts = () => scrollToSection(selectors.sections.contacts);
window.projectButtonText = projectButtonText;
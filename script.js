/*Выпадающее меню*/
const service = document.getElementById('service')
const dropdownMenu = document.getElementById('dropdownMenu')

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

/*Скролл до Главная*/

function scrollToHome() {
  const section = document.getElementById('home');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY; // Получаем позицию секции относительно верхней части страницы

  function windowReload() {
    location.reload()
  }

  function checkElementVisibility(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
  
    // Проверяем, находится ли верх элемента в пределах видимости
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
    
        // Проверяем, достигли ли мы верхней границы элемента
        if (rect.top <= 0 && rect.bottom >= 0) {
          setTimeout(windowReload, 300);
        }
      });
    }
  }

  checkElementVisibility(section);

}

/*Скролл до Услуги*/
function scrollToServices() {
  const section = document.getElementById('services');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY; // Получаем позицию секции относительно верхней части страницы
  const offsetPosition = sectionPosition - 50; // Учитываем поправку на -50px

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToServiceOne() {
  const section = document.getElementById('service-1');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY; // Получаем позицию секции относительно верхней части страницы
  const offsetPosition = sectionPosition - 50; // Учитываем поправку на -50px

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToServiceTwo() {
  const section = document.getElementById('service-2');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY; // Получаем позицию секции относительно верхней части страницы
  const offsetPosition = sectionPosition - 50; // Учитываем поправку на -50px

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToServiceThree() {
  const section = document.getElementById('service-3');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY; // Получаем позицию секции относительно верхней части страницы
  const offsetPosition = sectionPosition - 50; // Учитываем поправку на -50px

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToServiceFour() {
  const section = document.getElementById('service-4');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY; // Получаем позицию секции относительно верхней части страницы
  const offsetPosition = sectionPosition - 50; // Учитываем поправку на -50px

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToServiceFive() {
  const section = document.getElementById('service-5');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY; // Получаем позицию секции относительно верхней части страницы
  const offsetPosition = sectionPosition - 50; // Учитываем поправку на -50px

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function scrollToServiceSix() {
  const section = document.getElementById('service-6');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY; // Получаем позицию секции относительно верхней части страницы
  const offsetPosition = sectionPosition - 50; // Учитываем поправку на -50px

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

/*Скролл до примущества*/

function scrollToAdvantage() {
  const section = document.getElementById('advantages');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY; // Получаем позицию секции относительно верхней части страницы
  const offsetPosition = sectionPosition - 50; // Учитываем поправку на -50px

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

/*Скролл до проекты*/

function scrollToProjects() {
  const section = document.getElementById('projects');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY; // Получаем позицию секции относительно верхней части страницы
  const offsetPosition = sectionPosition + 20; // Учитываем поправку на -50px

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

/*Скролл до команда*/

function scrollToTeam() {
  const section = document.getElementById('team');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY; // Получаем позицию секции относительно верхней части страницы
  const offsetPosition = sectionPosition - 30; // Учитываем поправку на -50px

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

/*Скролл до гарантии*/

function scrollToGuarantee() {
  const section = document.getElementById('guarantee');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY; // Получаем позицию секции относительно верхней части страницы
  const offsetPosition = sectionPosition - 50; // Учитываем поправку на -50px

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

/*Скролл до контакты*/

function scrollToContacts() {
  const section = document.getElementById('contacts');
  const sectionPosition = section.getBoundingClientRect().top + window.scrollY; // Получаем позицию секции относительно верхней части страницы
  const offsetPosition = sectionPosition - 50; // Учитываем поправку на -50px

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}


/*Слайдер*/

let currentSlide = 0; // Индекс текущего слайда
const slides = document.querySelectorAll('.start-page__slide'); // Получаем все слайды

function showSlide(index) {
    // Скрываем все слайды
    slides.forEach(slide => slide.classList.remove('start-page__slide--active'));
    
    // Обновляем индекс
    if (index < 0) {
        currentSlide = slides.length - 1; // Переключаем с последнего на первый
    } else if (index >= slides.length) {
        currentSlide = 0; // Переключаем с первого на последний
    } else {
        currentSlide = index; // Устанавливаем текущий индекс
    }
    
    // Отображаем текущий слайд
    slides[currentSlide].classList.add('start-page__slide--active');
}

document.getElementById('nextBtn').addEventListener('click', () => {
    showSlide(currentSlide + 1); // Переход к следующему слайду
});

document.getElementById('prevBtn').addEventListener('click', () => {
    showSlide(currentSlide - 1); // Переход к предыдущему слайду
});

showSlide(currentSlide); // Инициализируем слайдер с первым слайдом

let currentScrollThumb = 0; // Индекс текущего слайда
const scrollThumb = document.getElementById('scrollThumb'); // Получаем элемент scrollThumb
const totalSlides = 6; // Общее количество слайдов
const slideWidth = 42.18; // Ширина одного слайда в пикселях

// Функция для обновления позиции scrollThumb
function updateScrollThumbPosition() {
  scrollThumb.style.left = `${currentScrollThumb * slideWidth}px`;
}

// Обработчик клика на кнопку "Следующий"
document.getElementById('nextBtn').addEventListener('click', () => {
  currentScrollThumb++;
  if (currentScrollThumb >= totalSlides) {
    currentScrollThumb = 0; // Переходим на первый слайд
  }
  updateScrollThumbPosition();
});

// Обработчик клика на кнопку "Предыдущий"
document.getElementById('prevBtn').addEventListener('click', () => {
  currentScrollThumb--;
  if (currentScrollThumb < 0) {
    currentScrollThumb = totalSlides - 1; // Переходим на последний слайд
  }
  updateScrollThumbPosition();
});

// Инициализируем слайдер с первым слайдом
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

function addActiveClass() {
  for (let i = 1; i <= 3; i++) {
     
    const questionElement = document.querySelector(`.answers-to-questions__question.--${i}`);
    const answerElement = document.querySelector(`.answers-to-questions__answers.--${i}`);

    if (questionElement && answerElement) {
      questionElement.addEventListener('click', function() {
        for (let j = 1; j <= 3; j++) {
          const otherAnswerElement = document.querySelector(`.answers-to-questions__answers.--${j}`);
          if (otherAnswerElement) {
            otherAnswerElement.classList.remove('active');
          }
        }
        answerElement.classList.add('active');
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

const questionElements = document.querySelectorAll(`.service__answer-to-question`);

questionElements.forEach(element => {
    element.addEventListener('click', () => {
        questionElements.forEach(el => el.classList.remove('active'));
        
        element.classList.add('active');
    });
});

// Получаем элементы изображений и scroll-thumb
const image1 = document.querySelector('.service__image.--1');
const image2 = document.querySelector('.service__image.--2');
const scrollThumb1 = document.querySelector('.services__scroll-thumb.--1');

// Переменная для отслеживания текущего изображения
let currentImage1 = 1;

// Функция для обновления видимости изображений и позиции scroll-thumb
function updateImageDisplay1() {
    if (currentImage1 === 1) {
        image1.style.display = 'block'; // Показываем первое изображение
        image2.style.display = 'none';   // Скрываем второе изображение
        scrollThumb1.style.marginLeft = '33px';  // Возвращаем scroll-thumb на исходное положение
    } else {
        image1.style.display = 'none';    // Скрываем первое изображение
        image2.style.display = 'block';    // Показываем второе изображение
        scrollThumb1.style.marginLeft = '159.5px'; // Смещаем scroll-thumb вправо
    }
}

// Обработчик клика на кнопку "Предыдущий"
document.querySelector('.services__prev-button.--1').addEventListener('click', () => {
    currentImage1 = currentImage1 === 1 ? 2 : 1; // Переключаем изображение
    updateImageDisplay1(); // Обновляем видимость изображений и позицию scroll-thumb
});

// Обработчик клика на кнопку "Следующий"
document.querySelector('.services__next-button.--1').addEventListener('click', () => {
    currentImage1 = currentImage1 === 1 ? 2 : 1; // Переключаем изображение
    updateImageDisplay1(); // Обновляем видимость изображений и позицию scroll-thumb
});

// Инициализируем отображение изображений и позицию scroll-thumb
updateImageDisplay1();


const image3 = document.querySelector('.service__image.--3');
const image4 = document.querySelector('.service__image.--4');
const scrollThumb2 = document.querySelector('.services__scroll-thumb.--2');

// Переменная для отслеживания текущего изображения
let currentImage2 = 1;

// Функция для обновления видимости изображений и позиции scroll-thumb
function updateImageDisplay2() {
    if (currentImage2 === 1) {
        image3.style.display = 'block'; // Показываем первое изображение
        image4.style.display = 'none';   // Скрываем второе изображение
        scrollThumb2.style.marginLeft = '33px';  // Возвращаем scroll-thumb на исходное положение
    } else {
        image3.style.display = 'none';    // Скрываем первое изображение
        image4.style.display = 'block';    // Показываем второе изображение
        scrollThumb2.style.marginLeft = '159.5px'; // Смещаем scroll-thumb вправо
    }
}

// Обработчик клика на кнопку "Предыдущий"
document.querySelector('.services__prev-button.--2').addEventListener('click', () => {
    currentImage2 = currentImage2 === 1 ? 2 : 1; // Переключаем изображение
    updateImageDisplay2(); // Обновляем видимость изображений и позицию scroll-thumb
});

// Обработчик клика на кнопку "Следующий"
document.querySelector('.services__next-button.--2').addEventListener('click', () => {
    currentImage2 = currentImage2 === 1 ? 2 : 1; // Переключаем изображение
    updateImageDisplay2(); // Обновляем видимость изображений и позицию scroll-thumb
});

// Инициализируем отображение изображений и позицию scroll-thumb
updateImageDisplay2();


const image5 = document.querySelector('.service__image.--5');
const image6 = document.querySelector('.service__image.--6');
const scrollThumb3 = document.querySelector('.services__scroll-thumb.--3');

// Переменная для отслеживания текущего изображения
let currentImage3 = 1;

// Функция для обновления видимости изображений и позиции scroll-thumb
function updateImageDisplay3() {
    if (currentImage3 === 1) {
        image5.style.display = 'block'; // Показываем первое изображение
        image6.style.display = 'none';   // Скрываем второе изображение
        scrollThumb3.style.marginLeft = '33px';  // Возвращаем scroll-thumb на исходное положение
    } else {
        image5.style.display = 'none';    // Скрываем первое изображение
        image6.style.display = 'block';    // Показываем второе изображение
        scrollThumb3.style.marginLeft = '159.5px'; // Смещаем scroll-thumb вправо
    }
}

// Обработчик клика на кнопку "Предыдущий"
document.querySelector('.services__prev-button.--3').addEventListener('click', () => {
    currentImage3 = currentImage3 === 1 ? 2 : 1; // Переключаем изображение
    updateImageDisplay3(); // Обновляем видимость изображений и позицию scroll-thumb
});

// Обработчик клика на кнопку "Следующий"
document.querySelector('.services__next-button.--3').addEventListener('click', () => {
    currentImage3 = currentImage3 === 1 ? 2 : 1; // Переключаем изображение
    updateImageDisplay3(); // Обновляем видимость изображений и позицию scroll-thumb
});

// Инициализируем отображение изображений и позицию scroll-thumb
updateImageDisplay3();


const image7 = document.querySelector('.service__image.--7');
const image8 = document.querySelector('.service__image.--8');
const scrollThumb4 = document.querySelector('.services__scroll-thumb.--4');

// Переменная для отслеживания текущего изображения
let currentImage4 = 1;

// Функция для обновления видимости изображений и позиции scroll-thumb
function updateImageDisplay4() {
    if (currentImage4 === 1) {
        image7.style.display = 'block'; // Показываем первое изображение
        image8.style.display = 'none';   // Скрываем второе изображение
        scrollThumb4.style.marginLeft = '33px';  // Возвращаем scroll-thumb на исходное положение
    } else {
        image7.style.display = 'none';    // Скрываем первое изображение
        image8.style.display = 'block';    // Показываем второе изображение
        scrollThumb4.style.marginLeft = '159.5px'; // Смещаем scroll-thumb вправо
    }
}

// Обработчик клика на кнопку "Предыдущий"
document.querySelector('.services__prev-button.--4').addEventListener('click', () => {
    currentImage4 = currentImage4 === 1 ? 2 : 1; // Переключаем изображение
    updateImageDisplay4(); // Обновляем видимость изображений и позицию scroll-thumb
});

// Обработчик клика на кнопку "Следующий"
document.querySelector('.services__next-button.--4').addEventListener('click', () => {
    currentImage4 = currentImage4 === 1 ? 2 : 1; // Переключаем изображение
    updateImageDisplay4(); // Обновляем видимость изображений и позицию scroll-thumb
});

// Инициализируем отображение изображений и позицию scroll-thumb
updateImageDisplay4();


const image9 = document.querySelector('.service__image.--9');
const image10 = document.querySelector('.service__image.--10');
const scrollThumb5 = document.querySelector('.services__scroll-thumb.--5');

// Переменная для отслеживания текущего изображения
let currentImage5 = 1;

// Функция для обновления видимости изображений и позиции scroll-thumb
function updateImageDisplay5() {
    if (currentImage5 === 1) {
        image9.style.display = 'block'; // Показываем первое изображение
        image10.style.display = 'none';   // Скрываем второе изображение
        scrollThumb5.style.marginLeft = '33px';  // Возвращаем scroll-thumb на исходное положение
    } else {
        image9.style.display = 'none';    // Скрываем первое изображение
        image10.style.display = 'block';    // Показываем второе изображение
        scrollThumb5.style.marginLeft = '159.5px'; // Смещаем scroll-thumb вправо
    }
}

// Обработчик клика на кнопку "Предыдущий"
document.querySelector('.services__prev-button.--5').addEventListener('click', () => {
    currentImage5 = currentImage5 === 1 ? 2 : 1; // Переключаем изображение
    updateImageDisplay5(); // Обновляем видимость изображений и позицию scroll-thumb
});

// Обработчик клика на кнопку "Следующий"
document.querySelector('.services__next-button.--5').addEventListener('click', () => {
    currentImage5 = currentImage5 === 1 ? 2 : 1; // Переключаем изображение
    updateImageDisplay5(); // Обновляем видимость изображений и позицию scroll-thumb
});

// Инициализируем отображение изображений и позицию scroll-thumb
updateImageDisplay5();

const image11 = document.querySelector('.service__image.--11');
const image12 = document.querySelector('.service__image.--12');
const scrollThumb6 = document.querySelector('.services__scroll-thumb.--6');

// Переменная для отслеживания текущего изображения
let currentImage6 = 1;

// Функция для обновления видимости изображений и позиции scroll-thumb
function updateImageDisplay6() {
    if (currentImage6 === 1) {
        image11.style.display = 'block'; // Показываем первое изображение
        image12.style.display = 'none';   // Скрываем второе изображение
        scrollThumb6.style.marginLeft = '33px';  // Возвращаем scroll-thumb на исходное положение
    } else {
        image11.style.display = 'none';    // Скрываем первое изображение
        image12.style.display = 'block';    // Показываем второе изображение
        scrollThumb6.style.marginLeft = '159.5px'; // Смещаем scroll-thumb вправо
    }
}

// Обработчик клика на кнопку "Предыдущий"
document.querySelector('.services__prev-button.--6').addEventListener('click', () => {
    currentImage6 = currentImage6 === 1 ? 2 : 1; // Переключаем изображение
    updateImageDisplay6(); // Обновляем видимость изображений и позицию scroll-thumb
});

// Обработчик клика на кнопку "Следующий"
document.querySelector('.services__next-button.--6').addEventListener('click', () => {
    currentImage6 = currentImage6 === 1 ? 2 : 1; // Переключаем изображение
    updateImageDisplay6(); // Обновляем видимость изображений и позицию scroll-thumb
});

// Инициализируем отображение изображений и позицию scroll-thumb
updateImageDisplay6();

const popupOne = document.getElementById('popupOne');
const body = document.body;

const openPopupOne = document.getElementById('openPopupOne');
const closePopupOne = document.getElementById('closePopupOne');
const overlay = document.getElementById('overlay');

openPopupOne.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupOne.style.display = 'block';
  body.classList.add('no-scroll');
});

closePopupOne.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupOne.style.display = 'none';
  body.classList.remove('no-scroll');
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
});

closePopupTwo.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupTwo.style.display = 'none';
  body.classList.remove('no-scroll');
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
});

secondOpenPopupTSOne.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupTSOne.style.display = 'block';
  body.classList.add('no-scroll');
});

closePopupTSOne.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupTSOne.style.display = 'none';
  body.classList.remove('no-scroll');
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
});

secondOpenPopupTSTwo.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupTSTwo.style.display = 'block';
  body.classList.add('no-scroll');
});

closePopupTSTwo.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupTSTwo.style.display = 'none';
  body.classList.remove('no-scroll');
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
});

secondOpenPopupTSThree.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupTSThree.style.display = 'block';
  body.classList.add('no-scroll');
});

closePopupTSThree.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupTSThree.style.display = 'none';
  body.classList.remove('no-scroll');
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
});

closePopupTSFour.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupTSFour.style.display = 'none';
  body.classList.remove('no-scroll');
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
});

secondOpenPopupTSFive.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupTSFive.style.display = 'block';
  body.classList.add('no-scroll');
});

thirdOpenPopupTSFive.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupTSFive.style.display = 'block';
  body.classList.add('no-scroll');
});

fourthOpenPopupTSFive.addEventListener('click', () => {
  overlay.style.display = 'block';
  popupTSFive.style.display = 'block';
  body.classList.add('no-scroll');
});

closePopupTSFive.addEventListener('click', () => {
  overlay.style.display = 'none';
  popupTSFive.style.display = 'none';
  body.classList.remove('no-scroll');
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
    tags.forEach(tag => tag.classList.remove('active')); // Сброс активных тегов
    filterCards(); // Обновление отображения карточек
});

function filterCards() {
    const activeTags = Array.from(tags)
        .filter(tag => tag.classList.contains('active'))
        .map(tag => tag.getAttribute('data-tag'));

    cards.forEach(card => {
        const cardTags = card.getAttribute('data-tag').split(' '); // Получаем теги карточки
        const isVisible = activeTags.length === 0 || activeTags.every(tag => cardTags.includes(tag)); // Проверяем, что все активные теги присутствуют
        card.style.display = isVisible ? 'flex' : 'none'; // Отображаем или скрываем карточку
    });
}


function checkAndBalanceColumns() {
  const column1 = document.getElementById('column1');
  const column2 = document.getElementById('column2');

  // Перемещаем четные карточки из первой колонки во вторую
  Array.from(column1.children).forEach(card => {
      const cardId = parseInt(card.id.replace('card', ''));
      if (cardId % 2 === 0) { // Проверяем, четный ли ID
          moveCard(card, column2);
      }
  });

  // Сортируем карточки во второй колонке по ID
  sortCardsInColumn(column2);
}

function moveCard(cardToMove, toColumn) {
  if (cardToMove) {
      // Вставляем карточку в конец второй колонки
      toColumn.appendChild(cardToMove);
  }
}

function sortCardsInColumn(column) {
  const cards = Array.from(column.children);
  // Сортируем карточки по ID
  cards.sort((a, b) => {
      return parseInt(a.id.replace('card', '')) - parseInt(b.id.replace('card', ''));
  });

  // Очищаем колонку и добавляем отсортированные карточки
  column.innerHTML = '';
  cards.forEach(card => column.appendChild(card));
}

// Вызываем функцию при загрузке страницы
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
  // Скрываем все карточки
  MediaCards.forEach(card => {
      card.style.display = 'none';
  });

  // Показываем только текущие карточки
  for (let i = currentIndex; i < currentIndex + cardsPerPage; i++) {
      if (MediaCards[i]) {
        MediaCards[i].style.display = 'grid'; // Показываем карточку
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

    // Удаляем класс active у всех элементов
    allMediaLine.forEach(line => {
        line.classList.remove('active');
    });

    // Добавляем класс active ко второму элементу
    secondMediaLine.classList.add('active');
});

document.getElementById('prevMediaSlide').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= cardsPerPage;
        updateCards();
    }

    // Удаляем класс active у всех элементов
    allMediaLine.forEach(line => {
        line.classList.remove('active');
    });

    // Добавляем класс active к первому элементу
    firstMediaLine.classList.add('active');
});

// Инициализация слайдера
updateCards();

const newsCards = document.querySelectorAll('.news__slide');
let currentIndexNews = 0;
const cardsPerNewsPage = 4;
const totalCardsNews = newsCards.length;
const totalGroupsNews = Math.ceil(totalCardsNews / cardsPerNewsPage);
const newsCounter = document.getElementById('newsSlideNumber');
const newsSlide = document.querySelectorAll('.news__line');

function updateCardsNews() {
  // Скрываем все карточки
  newsCards.forEach(card => {
      card.style.display = 'none';
  });

  // Показываем только текущие карточки
  for (let i = currentIndexNews; i < currentIndexNews + cardsPerNewsPage; i++) {
      if (newsCards[i]) {
        newsCards[i].style.display = 'grid'; // Показываем карточку
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

    // Удаляем класс active у всех элементов
    allNewsLine.forEach(line => {
        line.classList.remove('active');
    });

    // Добавляем класс active ко второму элементу
    secondNewsLine.classList.add('active');
});

document.getElementById('prevNewsSlide').addEventListener('click', () => {
    if (currentIndexNews > 0) {
      currentIndexNews = Math.max(0, currentIndexNews - cardsPerNewsPage);
      updateCardsNews();
    }

    // Удаляем класс active у всех элементов
    allNewsLine.forEach(line => {
        line.classList.remove('active');
    });

    // Добавляем класс active к первому элементу
    firstNewsLine.classList.add('active');
});

// Инициализация слайдера
updateCardsNews();

const feedbackFormOverlay = document.getElementById('feedbackFormOverlay');
const closeFeedbackForm = document.getElementById('closeFeedbackForm');
const feedbackForm = document.getElementById('feedbackForm');

function activeForm() {
  feedbackFormOverlay.style.display = 'block';
  feedbackForm.style.display = 'block';
  body.classList.add('no-scroll');
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

closeFeedbackForm.addEventListener('click', () => {
  feedbackFormOverlay.style.display = 'none';
  feedbackForm.style.display = 'none';
  body.classList.remove('no-scroll');
});

feedbackFormOverlay.addEventListener('click', () => {
  feedbackFormOverlay.style.display = 'none';
  feedbackForm.style.display = 'none';
  body.classList.remove('no-scroll');
});

const firstFramefeedbackForm = document.getElementById('firstFramefeedbackForm');
const secondFramefeedbackForm = document.getElementById('secondFramefeedbackForm');
const thirdFramefeedbackForm = document.getElementById('thirdFramefeedbackForm');

const inputs = document.querySelectorAll('.feedback-form__input');
const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');

document.getElementById('InputButton').addEventListener('click', function() {
  let allFilled = true;

  // Проверяем, заполнены ли все input
  inputs.forEach(function(input) {
    if (input.value.trim() === '') {
        allFilled = false;
        input.classList.add('error');
    } else {
        input.classList.remove('error');
    }
  });

  // Если все input заполнены
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
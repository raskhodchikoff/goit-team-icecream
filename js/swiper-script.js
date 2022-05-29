const swiper = new Swiper('.swiper', {
  // Пагинация
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    // Булеты
    clickable: true,
  },
  // Чувствительность свайпа
  touchRatio: 1,
  // Угол срабатывания свайпа
  touchAngle: 45,
  // Курсор перетаскивания
  grabCursor: true,
  // Управление с помощью клавиатуры и колеса мыши
  keyboard: {
    // Включить/Выключить
    enabled: true,
    // Включить/Выключить только когда слайдер в пределах вьюпорта
    OnlyInViewport: true,
  },
  // Управление колесом мыши
  mousewheel: {
    // Чувствительность колеса мыши
    sensitivity: 1,
  },
  // Бесконечный слайдер
  loop: true,
  // Автопрокрутка
  autoplay: {
    // Пауза между прокруткой
    delay: 4000,
    // Отключить после ручного переключения
    disableOnInteraction: true,
  },
  // Скорость прокрутки
  speed: 500,
  // Эффект переключение слайдов - Смена прозрачности
  // effect: 'fade',
  // // Дополнение к fade
  // fadeEffect: {
  //   // Параллельная смена прозрачности
  //   crossFade: true,
  // },
});

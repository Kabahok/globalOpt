


const slider = tns({
    container: '.carousel_inner',
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  })

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

  const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuItem1 = document.querySelector('.header_link-item_1')
      menuItem2 = document.querySelector('.header_link-item_2')
      menuItem3 = document.querySelector('.header_link-item_3')
      menuItem4 = document.querySelector('.header_link-item_4')
      menuItem5 = document.querySelector('.header_link-item_5')
      menuItem6 = document.querySelector('.header_link-item_6')

hamburger.addEventListener('click', () => {
  menu.classList.toggle('menu_active');
  hamburger.classList.toggle('hamburger_active')
});

menuItem1.addEventListener('click', () => {
  menu.classList.toggle('menu_active');
  hamburger.classList.toggle('hamburger_active')
})

menuItem2.addEventListener('click', () => {
  menu.classList.toggle('menu_active');
  hamburger.classList.toggle('hamburger_active')
})

menuItem3.addEventListener('click', () => {
  menu.classList.toggle('menu_active');
  hamburger.classList.toggle('hamburger_active')
})

menuItem4.addEventListener('click', () => {
  menu.classList.toggle('menu_active');
  hamburger.classList.toggle('hamburger_active')
})

menuItem5.addEventListener('click', () => {
  menu.classList.toggle('menu_active');
  hamburger.classList.toggle('hamburger_active')
})

menuItem6.addEventListener('click', () => {
  menu.classList.toggle('menu_active');
  hamburger.classList.toggle('hamburger_active')
})

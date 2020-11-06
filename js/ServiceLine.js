let d = document
let menuButton = d.getElementById('hamburger'),
    menu = d.getElementById('menu')

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active')
  menu.classList.toggle('active')
})

$('.slogan_list').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 500,
  fade: true,
  speed: 500,
});

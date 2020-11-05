// $(document).ready(function() {
// var sloganList = $('.slogan_list'),
//     sloganItem = $('.slogan_item'),
//     active = $('sloganActive'),
//     request = $('.request'),
//     slider = $('.slider'),
//     t = 0

                                // Slider #1

// var timer = setInterval(feedback, 5000)
// function feedback(){
//     sloganList.css({'margin-left' : '-=100%',
//                     'transition' : '.5s'})
//   sloganItem[t].classList.remove('sloganActive')
//     t++

//   if (t == 1) {
//     slider.css({"background" : "url('../images/slider2.jpeg') 0 0 no-repeat",
//                 "background-size": "cover",
//                 "transition" : "1.3s",
//                 "background-position" : "bottom"})
//   }
//   else if (t == 2) {
//     sloganList.css({'margin-left' : '-=200%',
//                       'transition' : '.5s'})
//     slider.css({"background" : "url('../images/slider3.jpeg') 0 0 no-repeat",
//                 "background-size" : "cover",
//                 "transition" : "1.3s",
//                 })
//   }
//   else {
//     slider.css({"background" : "url('../images/slider1.jpeg') 0 0 no-repeat",
//                 "background-size" : "cover",
//                 "transition" : "1.3s"})
//   }

//     if (t >= sloganItem.length) {
//         sloganList.css({'margin-left' : '0',
//                         'transition' : '1s'})
//                t = 0
//     }
//   sloganItem[t].classList.add('sloganActive')
// }
// })

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
  autoplaySpeed: 2000,
  fade: true,
  speed: 500,
});

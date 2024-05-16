
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});


const arr = [
  {
    name: 'Giorgi',
    users: [
      {
        name: 'Rolandi',
        users: [
          {
            name: 'Givi'
          }
        ]
      }
    ]
  }
]

const asdas ='as'

const test = (arr) => {
  arr.forEach(user => {
    alert(user.name)
    if(user.users) {
      test(user.users)
    }
  })


}
asdasd


test(arr)

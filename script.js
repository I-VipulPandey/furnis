
document.querySelector('.home').addEventListener('click', function (e) {
  e.preventDefault()

  document.querySelector('#page1').scrollIntoView({ behavior: "smooth" })

})


document.querySelector('.shop').addEventListener('click', function (e) {
  e.preventDefault()

  document.querySelector('#page3').scrollIntoView({ behavior: "smooth" })

})

document.querySelector('.blog').addEventListener('click', function (e) {
  e.preventDefault()

  document.querySelector('#page5').scrollIntoView({ behavior: "smooth" })

})

document.querySelector('.contact').addEventListener('click', function (e) {
  e.preventDefault()

  document.querySelector('footer').scrollIntoView({ behavior: "smooth" })

})

function OpenCloseButton() {

  var menu = document.querySelector("#menu");
  var full = document.querySelector("#fullscreen-nav");
  var line1 = document.querySelector("#line1");
  var line2 = document.querySelector("#line2"); 

  var clickCounter = 1;

  menu.addEventListener("click", function () {
    if (clickCounter === 1) {

      full.style.transform = `translateX(0%)`;


      line1.style.transform = `rotate(45deg) translate(-1px, 10px)`;
      line2.style.transform = `rotate(-45deg) translate(-1px, -10px)`;
       

      clickCounter = 0;
    } else {
      full.style.transform = `translateX(-100%)`;
      line1.style.transform = `initial`;
      line2.style.transform = `initial`;

      clickCounter = 1;
    }

  })

}

OpenCloseButton()
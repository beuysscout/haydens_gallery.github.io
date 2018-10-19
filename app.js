var mailList = document.querySelector(".mail-list")
var introScreen = document.querySelector(".intro")
var mailScreen = document.querySelector(".mail-screen")
var thankyouText = document.querySelector(".thank-screen")
var emailForm = document.querySelector('#mc-embedded-subscribe-form')
var date = document.querySelector(".date")
var opening = document.querySelector(".opening")
var opening2 = document.querySelector(".opening2")


mailList.addEventListener('click', () => {
  mailList.classList.toggle('fadeOut')
  introScreen.classList.toggle('fadeOut')




  setTimeout(() => {
    mailScreen.classList.toggle('hidden')
    mailScreen.classList.toggle('fadeIn')
    mailList.classList.toggle('hidden')
    introScreen.classList.toggle('hidden')
  }, 1000);
})

emailForm.addEventListener('submit', () => {
    mailScreen.classList.toggle('fadeOut')
    setTimeout(() => {
      mailScreen.classList.toggle('hidden')
      introScreen.classList.toggle('hidden')
      introScreen.classList.toggle('fadeOut')
      introScreen.classList.toggle('fadeIn')
      date.classList.toggle('fadeIn')
      opening.classList.toggle('fadeIn')
      opening2.classList.toggle('fadeIn')




    }, 1000);
})

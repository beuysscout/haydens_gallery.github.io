var mailList = document.querySelector(".mail-list")
var introScreen = document.querySelector(".intro")
var mailScreen = document.querySelector(".mail-screen")
var thankyouText = document.querySelector(".thankyou")
var emailForm = document.querySelector('#mc-embedded-subscribe-form')
var date = document.querySelector(".date")

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
      date.classList.toggle('hidden')
      thankyouText.classList.toggle('hidden')
      thankyouText.classList.toggle('fadeIn')
    }, 1000);
})

var mailList = document.querySelector(".mail-list")
var introScreen = document.querySelector(".intro")

mailList.addEventListener('click', e => {
  mailList.classList.toggle('hidden')
  introScreen.classList.toggle('hidden')
})
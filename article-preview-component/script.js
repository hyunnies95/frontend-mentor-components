const shareBtn = document.querySelector('.share-btn')
const socialPanel = document.querySelector('.social')

shareBtn.addEventListener('click', () => {
  socialPanel.classList.toggle('open')
  shareBtn.classList.toggle('open')
})
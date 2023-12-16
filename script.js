let iconPlus = document.querySelectorAll('.iconplus')
let iconMin = document.querySelectorAll('.iconminus')

iconMin.forEach(iconMin => {
   iconMin.addEventListener('click', () => {
      iconMin.parentElement.nextElementSibling.style.display = "none"
      iconMin.previousElementSibling.style.display = "block"
      iconMin.style.display = 'none'
   })
})

iconPlus.forEach(iconPlus => {
   iconPlus.addEventListener('click', () => {
      iconPlus.parentElement.nextElementSibling.style.display = "block"
      iconPlus.nextElementSibling.style.display = "block"
      iconPlus.style.display = 'none'
   })
})
const menuButton = document.querySelector('.menu-btn')
const navBar = document.querySelector('.nav-bar')

menuButton.addEventListener('click', () => {
  let navOpen = navBar.classList.contains('active')
  if (!navOpen) {
    navBar.classList.add('active')
    menuButton.classList.add('active')
  } else {
    navBar.classList.remove('active')
    menuButton.classList.remove('active')
  }
})
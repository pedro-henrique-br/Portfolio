const menuHamburguer = document.getElementById("menu-hamburguer")
const sideNav = document.getElementById("side-nav")
const closeIcon = document.getElementById("close-icon")





menuHamburguer.addEventListener("click", () => {
  sideNav.style.display = "flex"
  sideNav.style.animationName = "showMenu"
})

closeIcon.addEventListener("click", () => {
  sideNav.style.display = "none"
  sideNav.style.animationName = "closeMenu"
})
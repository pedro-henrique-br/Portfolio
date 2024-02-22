const menuHamburguer = document.getElementById("menu-hamburguer")
const sideNav = document.getElementById("side-nav")
const closeIcon = document.getElementById("close-icon")

const knowMeBtn = document.getElementById("know-me")
const toolsBtn = document.getElementById("tools-i-use")

const infoContainer = document.getElementById("info-container")

knowMeBtn.addEventListener("click", () => {
  infoContainer.innerHTML = `<h1>know who i am </h1>
  <p>
    As a young programmer passionate about creating interactive designs, I dive headfirst into the world of programming with enthusiasm and creativity. Since my childhood, I've been fascinated by the magic of transforming lines of code into dynamic and engaging visual experiences. My eyes light up when exploring new technologies and design techniques, always eager to experiment and innovate.
  </p>`
})
toolsBtn.addEventListener("click", () => {
  infoContainer.classList.toggle("active")
  infoContainer.innerHTML = `<h1>Tools i use</h1>
  <p>
  As a front-end developer, I utilize HTML, CSS, and JavaScript to craft interactive user interfaces. Additionally, I work with React to build reusable components and dynamic single-page applications. I leverage Bootstrap for streamlined responsive development and styling. For version control and team collaboration, I rely on Git.
  </p>
  <div class="icon-container">
  <img src="/assets/html-5.png">
  <img src="/assets/icons8-css-48.png">
  <img src="/assets/icons8-js-48.png">
  <img src="/assets/icons8-react-native-48.png">
  <img src="/assets/icons8-bootstrap-a-free-and-open-source-css-framework-48.png">
  <img src="/assets/icons8-git-48.png">
  <img src="/assets/icons8-linux-48.png">
  </div>`
})


menuHamburguer.addEventListener("click", () => {
  sideNav.style.display = "flex"
  sideNav.style.animationName = "showMenu"
})

closeIcon.addEventListener("click", () => {
  sideNav.style.display = "none"
  sideNav.style.animationName = "closeMenu"
})


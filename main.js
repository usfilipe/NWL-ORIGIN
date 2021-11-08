/* abre e fecha menu */
const nav = document.querySelector('header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* fecha menu quando clikar nos links de menu */
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

/* mudar header da pagina (sombra) quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

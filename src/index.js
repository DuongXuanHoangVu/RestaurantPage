const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const content = $('#content')
const menuItem = $$('.menu-item')

menuItem.forEach(item => {
    item.onclick = function () {
        $('.menu-item.active').classList.remove('active')
        item.classList.add('active')
        if (item.id === 'home') {
            content.removeChild(content.lastElementChild)
            displayHomePage()
        } else if (item.id === 'contact') {
            content.removeChild(content.lastElementChild)
            displayContactPage()
        } else if (item.id === 'menu') {
            content.removeChild(content.lastElementChild)
            displayMenuPage()
        }
    }
})

function displayHomePage () {
    const div = document.createElement('div')
    div.className = 'tab-content'
    div.innerHTML = 'Home page'
    const newh1 = document.createElement('h1')
    newh1.innerHTML = 'Home page Heading'
    div.appendChild(newh1)
    content.appendChild(div)
}
function displayMenuPage () {
    const div = document.createElement('div')
    div.className = 'tab-content'
    div.innerHTML = 'Menu page'
    content.appendChild(div)
}
function displayContactPage () {
    const div = document.createElement('div')
    div.className = 'tab-content'
    div.innerHTML = 'Contact page'
    content.appendChild(div)
}

displayHomePage()

const btn = document.querySelector('.button')

btn.addEventListener('click', showScreenSize)

function showScreenSize() {
    let screenWidth = window.screen.width
    let screenHeight = window.screen.height
    alert(`Ширина экрана: ${screenWidth}, высота экрана:${screenHeight} `)
}

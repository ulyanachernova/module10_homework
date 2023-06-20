
const buttonChange = document.querySelector('.button-change')
const buttonIcon = document.querySelector('.button-icon')

const iconFirst = document.querySelector('.bi-arrow-down-left-circle')
const iconSecond = document.querySelector('.bi-arrow-down-left-circle-fill')

buttonChange.addEventListener('click', letChangeIcon)

function letChangeIcon(icons) {
    let aaa = buttonIcon.querySelector(".non-active")
        aaa.classList.remove("non-active");

    let bbb = buttonIcon.querySelector('.active')
        bbb.classList.add("non-active");
        bbb.classList.remove("active");

    aaa.classList.add("active");
}

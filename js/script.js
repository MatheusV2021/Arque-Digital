


// 
const colors = {
    color1: "#d61c4e",
    color2: "#b93160",
    color3: "#ff6d28",
    color4: "#fedb39"
};
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const about = document.getElementById("about")
const content = "Um projeto apaixonado pelo propósito de transformar a comunidade do Pilar."
async function typing() {
    await sleep(400)
    for (char of content) {
        about.innerHTML += char
        await sleep(45)
    }
}
typing()

const title = document.getElementById("title")
async function titleEffect() {
    while (true) {
        for (span of title.children) {
            span.animate([
                { filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, .5))', opacity: 1, offset: 0.5 }
            ], { duration: 3000 })
            await sleep(100)
        }
        await sleep(2000)
    }
}
titleEffect()

const playButton = document.getElementById('playButton')
const videoContainer = document.getElementById('video-container')
const clickArea = document.getElementById('clickarea')

playButton.addEventListener('click', () => {
    videoContainer.classList.toggle('shown')
    document.body.classList.toggle('noscroll')
    videoContainer.children[1].play()
})

clickArea.addEventListener('click', () => {
    videoContainer.classList.toggle('shown')
    document.body.classList.toggle('noscroll')
    videoContainer.children[1].pause()
})

const nav = document.querySelector('.navbar')
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }
})





const box = document.querySelector('section#sobre .box')
const shadow = document.querySelector('section#sobre .shadow')
box.addEventListener('mouseover', () => {
    box.style.transform = 'perspective(1000px) translateZ(70px)'
    shadow.style.opacity = 0.3
})
box.addEventListener('mousemove', () => {
    const rect = box.getBoundingClientRect()
    const posX = event.clientX - rect.left
    const posY = event.clientY - rect.top
    shadow.style.left = `${posX}px`
    shadow.style.top = `${posY}px`
    const rotateX = -10 * ((posY - (box.clientHeight / 2)) / (box.clientHeight / 2))
    const rotateY = 10 * ((posX - (box.clientWidth / 2)) / (box.clientWidth / 2))
    box.style.transform = `perspective(1000px) translateZ(70px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
})
box.addEventListener('mouseout', () => {
    shadow.style.opacity = ''
    box.style.background = ''
    box.style.transform = 'perspective(1000px)'
})





const navbarList = document.querySelector('.navbar-links').children[1]
for (const li of navbarList.children) {
    console.log(String(li.getAttribute('to')))
    li.children[0].addEventListener('click', () => scrollToSection(li.getAttribute('to')))
}

const dot = document.querySelector('.dot')
let last = 'inicio'
document.addEventListener('scroll', () => {
    let scrolled = []
    for (child of document.body.children) {
        if (child.tagName == 'SECTION') {
            if ((child.offsetTop - 300) < window.pageYOffset) {
                scrolled.push(child)
            }
        }
    }
    let active = scrolled[scrolled.length - 1]
    for (const li of navbarList.children) {
        if (li.getAttribute('to') == active.id) {
            if (last != active.id) {
                const liRect = li.getBoundingClientRect()
                dot.style.left = `${li.offsetLeft + liRect.width / 2}px`
                dot.animate([
                    { width: '5px', height: '5px', opacity: 0.5, offset: 0.5 }
                ], { duration: 400 })
                last = active.id
            }
        }
    }
})

function scrollToSection(id) {
    console.log(typeof id)
    const section = document.getElementById(id)
    window.scrollTo({
        top: section.offsetTop - nav.offsetHeight,
        behavior: 'smooth'
    })
}

var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});
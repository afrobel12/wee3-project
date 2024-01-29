let slide = document.querySelectorAll('.slide')
let thumbContainer = document.getElementById('thumb-container')
const announcer = document.getElementById('announcer')
let current = 0;

const imageArray = [
    './images/sunset.jpg',
    './images/wild.jpg',
    './images/city.jpg'
    
]

function cls() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none'
    }
}

function updateDisplayImage(image) {
    cls();
    slide[current].style.display = 'block'
}

function displayThumb(index) {
    thumbContainer.innerHTML = ''

    for (let i = 0; i < slide.length; i++) {
        let img = document.createElement('img')
        img.src = imageArray[i]
        img.classList.add('thumbnail-img')
        img.addEventListener('click', function () {
            current = i
            updateDisplayImage(current)
        })
        thumbContainer.appendChild(img)
    }
}

function next() {
    cls();
    if (current === slide.length - 1) current = -1
    current++
    updateDisplayImage(current)
    displayThumb(current)
}

function prev() {
    cls();
    if (current === 0) current = slide.length
    current--
    updateDisplayImage(current)
    displayThumb(current)
}

function start() {
    cls()
    updateDisplayImage(current)
    displayThumb(current)
}

start()

document.addEventListener('keydown', function(event){
    if (event.key ==='ArrowRight') {
        next()
    } else if ( event.key === 'ArrowLeft') {
        prev()
    } 
})


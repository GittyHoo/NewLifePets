console.log('Hello')

// const slider = document.querySelector('.slide-container'),
//     slides = Array.from(document.querySelectorAll('.slide'))

// let isDragging = false,
//     startPos = 0,
//     currentTranslate = 0,
//     prevTranslate = 0,
//     animationID = 0
//     currentIndex = 0

//     slides.forEach((slide, index) => {
//         const slideImage = slide.querySelector('img')
//         slideImage.addEventListener('dragstart', (e) => 
//         e.preventDefault())

//         //touch events
//         slide.addEventListener('touchstart', touchStart(index))
//         slide.addEventListener('touchend', touchEnd)
//         slide.addEventListener('touchmove', touchMove)

//         //mouse events
//         slide.addEventListener('mousedown', touchStart(index))
//         slide.addEventListener('mouseup', touchEnd)
//         slide.addEventListener('mouseleave', touchEnd)
//         slide.addEventListener('mousemove', touchMove)
//     })

//     // disable context menu
//     window.oncontextmenu = function(event) {
//         event.preventDefault()
//         event.stopPropagation()
//         return false
//     }

//     function touchStart(index) {
//         return function(event) {
//             currentIndex = index
//             console.log(event.type.includes('mouse'))
//             isDragging = true
//         }
//     }

//     function touchEnd() {
//         isDragging = false
//     }

//     function touchMove() {
//         if(isDragging) {
//             console.log('move')
//         }
//     }
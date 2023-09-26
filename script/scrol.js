const sessaos = document.querySelector('.sessaos-um')
const sessaosDois = document.querySelector('.sessaos-dois')
const sessaosTres = document.querySelector('.sessaos-tres')

sessaos.addEventListener('click', () => {
    scrollTo(0, 50)
})

sessaosDois.addEventListener('click', () => {
    scrollTo(0, 820)
})

sessaosTres.addEventListener('click', () => {
    scrollTo(0, 1630)
})
const gif = document.querySelector('.theory__image');
const gif2 = document.querySelector('.theory__image2');

gif.style.width = '400px'
gif2.style.width = '400px'

gif.onclick = () => {
    gif.style.display = 'none'
    gif2.style.display = 'block'
}
gif2.onclick = () => {
    gif2.style.display = 'none'
    gif.style.display = 'block'
}

// const element= document.querySelector('div')
// const elements= document.querySelectorAll('div')

// console.dir(elements)
// elements.forEach((element, index, array) => {
//     console.log(element)
//     console.log(index)
//     console.log(array)
// })

// for (let i=0; i < elements.length; i++){
//     console.log(elements[i])
// }

const contents = document.querySelectorAll('.program-line__content')
contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__title')
    const descr = elem.querySelector('.program-line__descr')

    // title.onclick=() => {
    //     console.log(title)
    // }
    //  title.onclick=() => {
    //     console.log('click2')
    // } -----> это старый вариант, сейчас так  не делают, т.к. нижний onclick перезаписывает верхний и в консоли будет выводиться только 'click2'

    title.addEventListener('click', () => {
        descr.classList.toggle('active')
        
    })
})
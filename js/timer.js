const blockDays = document.querySelector('.timer__days')
const blockHours = document.querySelector('.timer__hours')
const blockMinutes = document.querySelector('.timer__minutes')
const blockSeconds = document.querySelector('.timer__seconds')


let interval

const numWord = (value, words) =>{
    value = Math.abs(value) % 100

    const lasNum = value % 10

    if(value > 10 & value<20) return words[2]
    if(lasNum > 1 & lasNum < 5) return words[1]
    if(lasNum === 1) return words[0]
    return words[2]
//  return 'dsh'
}

const updateTimer = () => {
    const date = new Date()
    const dateDeadline = new Date('24 April 2026').getTime()
    const timeRemaining = (dateDeadline - date) / 1000

    const days = Math.floor(timeRemaining / 60 / 60 / 24)
    const hours = Math.floor((timeRemaining / 60 / 60) % 24)
    const minutes = Math.floor((timeRemaining / 60) % 60)
    const seconds = Math.floor(timeRemaining % 60)

    const fDays = days < 10 ? '0' + days : days
    const fHours = hours < 10 ? '0' + hours : hours
    const fMinutes = minutes < 10 ? '0' + minutes : minutes
    const fSeconds = seconds < 10 ? '0' + seconds : seconds

    blockSeconds.nextElementSibling.textContent = numWord(24, ['секунда', 'секунды', 'секунд'])

    blockDays.textContent = fDays
    blockHours.textContent = fHours
    blockMinutes.textContent = fMinutes
    blockSeconds.textContent = fSeconds

    if (timeRemaining <= 0){
        clearInterval(interval)
        blockDays.textContent = '00'
        blockHours.textContent = '00'
        blockMinutes.textContent = '00'
        blockSeconds.textContent = '00'

    }
}

updateTimer()
interval = setInterval(updateTimer, 500)

// const date = new Date().getTime()
// const dateDeadline = new Date('24 April 2022').getTime()
// console.log(date)
// console.log(dateDeadline)
// console.log(dateDeadline - date)




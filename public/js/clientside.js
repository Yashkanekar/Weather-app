const form = document.querySelector('form')
const input = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = input.value

    messageOne.textContent = 'Getting Weather info...'
    messageTwo.textContent = ''
    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})
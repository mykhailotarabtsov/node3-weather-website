const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = search.value

  messageOne.textContent = ''
  messageTwo.textContent = ''
  messageOne.textContent = 'Loading...'

  fetch(`/weather?address=${location}`)
    .then(res => {
      messageOne.textContent = ''
      return res.json()
    })
    .then(data => {
      if (data.error) {
        console.log(data.error)
        messageOne.textContent = data.error
      } else {
        console.log(data)
        messageOne.textContent = data.location
        messageTwo.textContent = `Temperature - ${data.forecast.temperature} °C. Feels like - ${data.forecast.feelsLike} °C`
      }
    })
})
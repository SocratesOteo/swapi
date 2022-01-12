//const axios = require('axios')



const residentsButton = document.querySelector("#residents")
const button = document.querySelector = ("button")

function buttonClicked(){
    console.log('button has been clicked')
    alert('button has been clicked')
    axios.get('https://swapi.dev/api/planets/2')
    .then(() => {
    console.log()
    })

}
residentsButton.addEventListener('click',buttonClicked )
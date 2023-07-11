//grab the input element and others element 
const affircher = document.querySelector('.result')
const input = document.querySelector('input')
const result = document.querySelector('.result')
//function that fetch api
async function rechercher(valeur){
    try{
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=ff300c87200a4c74ab0160002231007&q=${valeur}&days=1&aqi=no&alerts=no`,{mode: 'cors'})
        const donnee = await response.json()
        const name = document.createElement('div')
        name.textContent=donnee.location.name
        const country = document.createElement('div')
        country.textContent=donnee.location.country
        const localtime = document.createElement('div')
        localtime.textContent=donnee.location.localtime
        const tz_id = document.createElement('div')
        tz_id.textContent=donnee.location.tz_id
        const parent = document.createElement('div')
        parent.classList.add('parent')
        const temperature = document.createElement('div')
        temperature.textContent=donnee.current.temp_c
        temperature.classList.add('temperature')
        parent.append(name,country,localtime,tz_id)
        result.append(temperature,parent)
        input.value=''
    }
    catch(error){
        console.log(error)
    }   
}
//call the rechercher function when hitting on submit button
const button = document.querySelector('form button')
button.addEventListener('click',(e)=>{
    e.preventDefault()
    rechercher(input.value)
    result.textContent=''
})
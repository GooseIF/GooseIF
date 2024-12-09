

/*async function fetchLocation(city) {
const key = "5d0b38825ba9e80dee5e6947e69e6ef4"
const url = "http://api.openweathermap.org/geo/1.0/direct"

const promise = new Promise ((resolve) => {     
    fetch(`${url}?q=${city}&limit=1&appid=${key}`)
    
    })
    console.log(promise)
}



export default fetchLocation*/
function fetchLocation (city) {
   return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=5d0b38825ba9e80dee5e6947e69e6ef4`)
}

export default fetchLocation
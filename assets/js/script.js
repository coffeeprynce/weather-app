var button = document.querySelector('#searchbtn')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var display = document.querySelector('.display');



button.addEventListener('click', function(event){
event.preventDefault()


    fetch('https://api.openweathermap.org/geo/1.0/direct?q=city,country&limit=5&appid=4b947dbc2156a16f9a132f38ab81ae8a')
    .then(response => response.json())
    .then(data => console.log(data))
    
    

    //lat = 'http://api.openweathermap.org/geo/1.0/direct?q=' + inputValue + '&format=' + display
    //lon = 'http://api.openweathermap.org/geo/1.0/direct?q=' + inputValue + '&format=' + display

    .then(data => { fetch('https://api.openweathermap.org/data/2.5/forecast?lat=lat&lon=lon&appid=4b947dbc2156a16f9a132f38ab81ae8a')
    .then(response => response.json())
    .then(data => console.log(data))})




.catch(err => alert("Wrong city name!"))  

})

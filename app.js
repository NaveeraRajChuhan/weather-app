let Weather = prompt("enter your weather")

let sunnyWeather ="sunny"
let windyWeather ="windy"
let hotWeather ="hot"
let coldWeather ="cold"
let cloudyWeather ="cloudy"
let rainyWeather ="rainy"
let stormyWeather ="stormy"
let snoweyWeather ="snowey"


if(Weather == 'sunny'){
    document.write("<h1>" + sunnyWeather + "</h1>" + "<img src='./images/sunny.webp' alt=''>")
}else if (Weather == 'windy'){
    document.write("<h1>" + windyWeather + "</h1>" + "<img src='./images/windy.jpg' alt=''>")
   
    
}else if (Weather == 'hot'){
    document.write("<h1>" + hotWeather + "</h1>" + "<img src='./images/hot.png' alt=''>")
   
    
}else if (Weather == 'cold'){
    document.write("<h1>" + coldWeather + "</h1>" + "<img src='./images/cold.jpg' alt=''>")

    
}else if (Weather == 'cloudy'){
    document.write("<h1>" + cloudyWeather + "</h1>" + "<img src='./images/cloudy.jpg' alt=''>")

}else if (Weather == 'rainy'){
    document.write("<h1>" + rainyWeather + "</h1>" + "<img src='./images/rainy.jpg' alt=''>")

}else if (Weather == 'stormy'){
    document.write("<h1>" + stormyWeather + "</h1>" + "<img src='' alt=''>")

}else if (Weather == 'snowey'){
    document.write("<h1>" + snoweyWeather + "</h1>" + "<img src='' alt=''>")

}else{
    document.write("<h1>" + "sorry we cant understand" + "</h1>")
}
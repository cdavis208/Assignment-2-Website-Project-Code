function myFunction(){

  let arr;
  let xmlhttp = new XMLHttpRequest();
  let weatherinfo = document.getElementById("weatherinfo");
  
  
  let url = "http://api.openweathermap.org/data/2.5/forecast/city?id=2639996&APPID=b200771efab9b77265a6c326873a3598";

  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let myArr = JSON.parse(this.responseText);
      gatherData(myArr);
      
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  

  function gatherData(arr) {

    this.arr = arr;
    let i;
    
    
    for(i = 0; i < arr.weatherData.length; i++) {
    
      weatherinfo.innerHTML = arr.weatherData[0].weather;
    
    }
  }
}

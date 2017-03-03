function myFunction(){

  let arr;
  let xmlhttp = new XMLHttpRequest();
  let weatherinfo = document.getElementById("weatherinfo");
  
  
  let url = "http://api.openweathermap.org/data/2.5/weather?q=Portsmouth,uk&units=metric&APPID=2c6f6a451968770732993eb4e86f7219";

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
  
    
      weatherinfo.innerHTML = arr.main.temp + "c";
    
    
  }
}

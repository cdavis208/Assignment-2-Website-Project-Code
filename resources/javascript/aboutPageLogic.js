(function(){

  let xmlhttp = new XMLHttpRequest();
  
  let url = "https://raw.githubusercontent.com/cdavis208/Assignment-2-Website-Project-Code/master/resources/data/data.json";

  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let myArr = JSON.parse(this.responseText);
      gatherData(myArr);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  let demoJSON = document.getElementById("sel");

  function gatherData(arr) {
    let theData = "";
     
    let i;
    
    for(i = 0; i < arr.length; i++) {
      
      theData += `<option>${arr.getElementById.title}</option>`;
     
    }
    demoJSON.innerHTML = theData;
   
  }

}());

(function(){

  let xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let myArr = JSON.parse(this.responseText);
      gatherData(myArr);
    }
  };
  xmlhttp.open("GET", "resources/data/data.json", true);
  xmlhttp.send();

  let feedJSONdata = document.getElementById("sel");

  function gatherData(arr) {
    let theData = "";
    
    let i;
    for(i = 0; i < arr.length; i++) {
      theData += `<option>${arr.getElementById.title}</option>`;
    }
    feedJSONdata.innerHTML = theData;
  }
}());

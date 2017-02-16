function myFunction(){

  let arr;
  let xmlhttp = new XMLHttpRequest();
  let aboutTitle = document.getElementById("aboutPageSub");
  
  let url = "https://raw.githubusercontent.com/cdavis208/Assignment-2-Website-Project-Code/master/resources/data/data.json";

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

    let feedJSONdata = document.getElementById("sel");
    let selectedVal = feedJSONdata.selectedIndex;
   
    let comboBoxData = "";
    let i;
    
    
    for(i = 0; i < arr.aboutPage.length; i++) {
      
      comboBoxData += `<option>${arr.aboutPage[i].title}</option>`;
      aboutTitle.innerHTML = arr.aboutPage[0].title;
     
    
    }
   feedJSONdata.innerHTML = comboBoxData;
  }

}

function updateAboutTitles() {

 let feedJSONdata = document.getElementById("sel");
 
 let selectedVal = feedJSONdata.selectedIndex;
    let subTitleData = "";
    let reason1Data = "";
    let reason2Data = "";
    let reason3Data = "";
    let aboutTitle = document.getElementById("aboutPageSub");

    

   
     if (selectedVal == 0){
aboutTitle.innerHTML = arr.aboutPage[0].title;

    } else 
    if (selectedVal == 1){
aboutTitle.innerHTML = arr.aboutPage[1].title;
    } else 

     if (selectedVal == 2){
aboutTitle.innerHTML = arr.aboutPage[2].title;
    }

    if (selectedVal == 3){
aboutTitle.innerHTML = arr.aboutPage[3].title;
    }

}

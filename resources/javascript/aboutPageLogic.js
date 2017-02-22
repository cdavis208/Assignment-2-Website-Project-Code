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
    let box1Text = document.getElementById("box1Txt");
    let box2Text = document.getElementById("box2Txt");
    let box3Text = document.getElementById("box3Txt");
    let box1Img = document.getElementById("box1img");
    let box2Img = document.getElementById("box2img");
    let box3Img = document.getElementById("box3img");
    let aboutTitle = document.getElementById("aboutPageSub");

    

   
     if (selectedVal == 0){
aboutTitle.innerHTML = arr.aboutPage[0].title;
box1Text.innerHTML = "sdfdsfsdfsdfdsfdsdf";
box2Text.innerHTML = "sdfdsfsdfsdfdsfdsdf";
box3Text.innerHTML = "sdfdsfsdfsdfdsfdsdf";
box1Img.src="resources/images/aboutPageIcons/jsonicon.jpg"
box2Img.src="resources/images/aboutPageIcons/dropdownmenu.gif"
box3Img.src="resources/images/aboutPageIcons/mobilefirsticon.png"

    } else 
    if (selectedVal == 1){
aboutTitle.innerHTML = arr.aboutPage[1].title;
box1Text.innerHTML = "zzzzzzzzzzzzzzzzzzzz";
box2Text.innerHTML = "zzzzzzzzzzzzzzzzzzzz";
box3Text.innerHTML = "zzzzzzzzzzzzzzzzzzzz";
    } else 

     if (selectedVal == 2){
aboutTitle.innerHTML = arr.aboutPage[2].title;
box1Text.innerHTML = "vvvvvvvvvvvvvvvvvvvv";
box2Text.innerHTML = "vvvvvvvvvvvvvvvvvvvv";
box3Text.innerHTML = "vvvvvvvvvvvvvvvvvvvv";
    }

    if (selectedVal == 3){
aboutTitle.innerHTML = arr.aboutPage[3].title;
box1Text.innerHTML = "pppppppppppppppppppppp";
box2Text.innerHTML = "pppppppppppppppppppppp";
box3Text.innerHTML = "pppppppppppppppppppppp";
    }

}

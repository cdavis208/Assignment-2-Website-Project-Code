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
box1Text.innerHTML = "This web page makes use of JSON data to manipulate the DOM. A drop down box is populated with JSON data parsed as a XMLHTTP request. JSON data is interesting because it can be kept in a form which is not local to the user thus creating securer web applications. I first used JSON data in one of the labs and ever since, I've wanted to incorporate it in someway, so I tested it with comboboxes, allowing this webpage to be possible.";
box2Text.innerHTML = "A combobox can be found in the top left of this page. This drop down box makes use of the JSON data discussed in the previous section. You can select the choices: about this page, motivations for this website, technologies used, and about me. When selecting another option, the page will be dynamically updated using javascript and sub-categories headers from the JSON data. The combobox will always be defaulted to the first option of the array of items. An event listener checks for onselect through the HTML5.";
box3Text.innerHTML = "This webpage and website makes use of @media queries designed to make the website mobile, tablet, and desktop friendly. Screen resolutions found commonly on all of these devices have been used. Responsive design for images and text sizes can be found also making using of percentages instead of absolute pixels. Relative screen positioning has been used to ensure screen resizing can hold elements the way they were designed to. This webpage in particular resizes the font and reorganizes the paragraphs to be more mobile friendly.";
box1Img.src="resources/images/aboutPageIcons/jsonicon.jpg";
box2Img.src="resources/images/aboutPageIcons/dropdownmenu.gif";
box3Img.src="resources/images/aboutPageIcons/mobilefirsticon.png";

    } else 
    if (selectedVal == 1){
aboutTitle.innerHTML = arr.aboutPage[1].title;
box1Text.innerHTML = "zzzzzzzzzzzzzzzzzzzz";
box2Text.innerHTML = "zzzzzzzzzzzzzzzzzzzz";
box3Text.innerHTML = "zzzzzzzzzzzzzzzzzzzz";
box1Img.src="resources/images/aboutPageIcons/bookicon.png";
box2Img.src="resources/images/aboutPageIcons/futureicon.png";
box3Img.src="resources/images/aboutPageIcons/passionicon.png";
    } else 

     if (selectedVal == 2){
aboutTitle.innerHTML = arr.aboutPage[2].title;
box1Text.innerHTML = "vvvvvvvvvvvvvvvvvvvv";
box2Text.innerHTML = "vvvvvvvvvvvvvvvvvvvv";
box3Text.innerHTML = "vvvvvvvvvvvvvvvvvvvv";
box1Img.src="resources/images/aboutPageIcons/html5icon.png";
box2Img.src="resources/images/aboutPageIcons/css3icon.png";
box3Img.src="resources/images/aboutPageIcons/jsicon.png";
    }

    if (selectedVal == 3){
aboutTitle.innerHTML = arr.aboutPage[3].title;
box1Text.innerHTML = "pppppppppppppppppppppp";
box2Text.innerHTML = "pppppppppppppppppppppp";
box3Text.innerHTML = "pppppppppppppppppppppp";
box1Img.src="resources/images/aboutPageIcons/knowledgeicon.png";
box2Img.src="resources/images/aboutPageIcons/hobbyicon.png";
box3Img.src="resources/images/aboutPageIcons/courseicon.png";
    }

}

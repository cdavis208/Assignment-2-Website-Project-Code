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
box1Text.innerHTML = "I wanted to create a one-stop guide for service submarines currently being used by the nations with the most predominant navies. A place in which I could come back to in the future as a reference for the studies of submarines. Apart from submarine wiki's and random fan pages, an interactive compendium isn't available. I wanted to create something which could act as a compendium, easy to use, and relevant/accurate to current service vessels. This compedium was to also help promote the royal navy submarine museum, with a rich history in British naval expeditions and naval equipment.";
box2Text.innerHTML = "Future developments for this website will be to update the compendium as service submarines change, add extra categories to the compedium for future technologies and past iconic submarines. Expanding the submarine museums to international ones rather than just local ones here in the UK. To update the markup if new iterations of HTML, CSS, or javascript are released to keep the technologies as relevant and up to date as possible. A full animated video of submarine walk arounds would also be a future addition to the compedium under a new subsection called 'submarine walkaround'.";
box3Text.innerHTML = "Being able to make use of technologies learnt in this module will be incredibly beneficial to demonstrate for future employmers and further studies. Having something to look back on and remember the enjoyment taken in making this will be a pleasant reminder of this module. A passion to extended my knowledge and update knowledge previously acquired from modules years prior is an academic motivation in itself.";
box1Img.src="resources/images/aboutPageIcons/bookicon.png";
box2Img.src="resources/images/aboutPageIcons/futureicon.png";
box3Img.src="resources/images/aboutPageIcons/passionicon.png";
    } else 

     if (selectedVal == 2){
aboutTitle.innerHTML = arr.aboutPage[2].title;
box1Text.innerHTML = "This website makes use of HTML5, this mark up language is the fifth and most current version of the HTML standard. HTML5 has conveniences that its predecessors didn't have, such as multimedia tags video, audio, and canvas. New introduction to such tags has allowed this website to make sure of specialised coding standards helping to reduce the amount of div tags. To help enrich the website I have created, nav tags, section tags, header tags, footer tags and many more were used to show the development of my understanding for the use of HTML5.";
box2Text.innerHTML = "This website makes use of CSS3, the latest evolution of cascading style sheets. In this iteration of CSS3, animations, text effects, borders, column layouts and selectors were added. In this website, you can find CSS3 animations on the main menu found in index.html. The nav menu uses css 3 animations, the compendium flag icons use css3 animations and the slider uses css3 transitions helping to seamlessly apply javascript as the slide show changes image. This webpage and the museum webpage makes use of CSS3 gradients also.";
box3Text.innerHTML = "Javascript is an object oriented programming language, even though it may share four characters with another popular programming language, thats where the similarities end. For this website, javascript has been used to dynamically update text on this webpage, the compendium webpage. JSON data is also being pulled through Javascript on another webpage called museum, where third party api data from openweatherAPI is being parsed through my javascript. Javascript was also used in this website to alter the DOM using json data. Appending the json data to an array, iterating through the array to update certain labels and dropdown box.";
box1Img.src="resources/images/aboutPageIcons/html5icon.png";
box2Img.src="resources/images/aboutPageIcons/css3icon.png";
box3Img.src="resources/images/aboutPageIcons/jsicon.png";
    }

    if (selectedVal == 3){
aboutTitle.innerHTML = arr.aboutPage[3].title;
box1Text.innerHTML = "My name is Clark Davis, p-number: 14136400, a final year computer science student. Throughout the duration of the front-end web development module, I have gathered a plethora of new skills and knowledge. This includes: HTML5 syntax implementation, CSS3 usage with animation/ transitions, javascripting from the ground up adding to my collection of programming langages learnt throughout DeMontfort University. During my placement year, I worked as networking engineer for an academy under the close tutoring of a talented network manager, David Norris. ";
box2Text.innerHTML = "When I am not studying or working, motorcycles, cars, boxing, and war memorabilia fill my time. I thoroughly enjoy spending time expanding my programming knowledge making games too in my spare time. Currently, the java3d libraries have come into interest for me, making efficient use of the libraries trying to make fully fledged games as compressed as possible. The developer of minecraft for example made left 4k dead which won this kind of competition.";
box3Text.innerHTML = "In terms of academia, my first IT qualification was the ECDL back in 2005, at the time I was the youngest to pass the qualification. I went onto do the extended national diploma in IT which was made up of 3 A levels. Which brought me onto the BsC Computer Science with a Year In Industry. For my final year at University I chose to take a breadth of modules: Front-end web development, computing ethics, privacy and data protection, functional programming, web application penetration testing, software development methods, and computing project.";
box1Img.src="resources/images/aboutPageIcons/knowledgeicon.png";
box2Img.src="resources/images/aboutPageIcons/hobbyicon.png";
box3Img.src="resources/images/aboutPageIcons/courseicon.png";
    }
}
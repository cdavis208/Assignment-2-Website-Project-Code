# p14136400

Introduction

  Most of the information given about motivations and technologies used can be found in the about page. This readme serves more as a how-to guide and a general overview of everything that has been done. The website is broken up into 5 web pages: index, catelogue, about, howItWorks, and museum. Each page is designed to give the user more insight into the world of submarines as a one-stop guide. More information about my motivations can be found in the 'about the compendium' page. Please note all CSS files are built with mobile ready capability for both 576px and 760px reflecting key sizes for both mobile and desktop.
  
Wireframes, Testing, and Sitemap

  This folder contains the wireframes development stages from earlier on in the project, a series of testing material which include user testing notes & a testing document, and a sitemap which shows the flow of the website. A video was also created but was too large for github so here is the dropbox link to the video of me conducting tests with a user and taking notes which can be found in the same testing folder:

The testing document contains a change log and a series of tests gathered from 20 users. 10 were recorded and shown in this document, these recorded tests were at the end of the project and are relevant to the final product you see today. Suggested changes and comments were taken onboard and the code was altered accordingly as explained in the testing document provided.
  
Index.html
  
  This page makes use of two technologies, HTML5 and CSS3. CSS3 animations provide the hovering effects of the SVG's whereas the HTML5 was used to draw the SVG's. CSS3 is also being used to make this page mobile ready. When using this page, click the icons instead of the bars and the href is attatched to the icons rather than the bars. When the page becomes less than 576px (mobile first) then the bars will switch positions becomes horizontal to the user, thus being more mobile friendly and easier to navigate.
  
compendium.html

  This page serves as the catelogue of submarines. This webpage makes use of HTML5, CSS3, and Javascript. When using this webpage, click a flag icon to load that countries submarine, a transition will load the submarine onto the screen using CSS3 animations. 4 Sections are then updates inside this image, this is done through the means of javascript and setting the innerHTML of the section to feed back important information about the submarines. Please read the test documents provided to show changes to this webpage and suggestions made for the submarine compendium. I chose to leave the change out stated in the document for this webpage due to overcluttering of the user interface.
  
about.html

  This acts as the extended readme file. Here you will find three sub sections relating to four topic in the combobox. The combo box is filled with JSON data that gets parsed by javascript. This page makes use of HTML5, Javascript, and CSS3. A dropdown box is located in the top middle of the screen. The user clicks this box, selects a new JSON item parsed and then the sections are dynamically updated using javascript. This page is mobile first, the sections become stacked and the text size changes becoming more convenient for the user.
  
howitworks.html

  This webpage makes use of HTML5, CSS3, and advanced HTML5 semanctics. A flexbox was used here to test out advanced HTML5, provided was a solution to a problem I had earlier on with development, a mobile ready solution required some form of information being shown so flexboxes were used to hold this information. When you hover over a fact icon, its corresponding animation is printed, each fact has its own fact sheet inside the flex boxes. Each flexbox will say fact one, fact two e.t.c. When shrunk this page will create a column rather than a row of flexboxes, a technique I learnt during labs.
  
museum.html

  This webpage makes use of HTML5, Javascript, CSS3, and 3rd party JSON Api data. The third party json api data used is called openweatherAPI. I created a widget bar which contains a javascript timefunction aswell as parsing the third party json api data to inform the user of the local weather inside portsmouth. WARNING, to be able to see the weather information in my widget bar, you must let unsecure scripts through. You can do this by click the padlock icon or shield icon in the browser bar and allowing them to run. A prompt might appear but this is hard coded for the user to understand. A google API is also used on this webpage pointing at the submarine museum. 
  

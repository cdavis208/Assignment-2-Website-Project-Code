function myFunction() {
    /*
    The purpose of this javascript file is to bring functionality to my widget bar with 3rd party json api
    data and a time widget which is updated through the means of a system clock updated dynmically through
    my javascript. The 3rd party json api is called openweatherAPI.
    */
    let arr; //array to hold the parsed 3rd party json data
    let xmlhttp = new XMLHttpRequest(); //http request to fetch the 3rd party json data
    let weatherinfo = document.getElementById("weatherinfo"); //this is the cloud icon which gets updated to the temperature collected

    //3rd party json API link
    let url = "http://api.openweathermap.org/data/2.5/weather?q=Portsmouth,uk&units=metric&APPID=2c6f6a451968770732993eb4e86f7219";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let myArr = JSON.parse(this.responseText);
            gatherData(myArr);

        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    //warning user to enable unsafe scripts to see the weather widget temperature parsed data from openweatherAPi.
    alert("Please make sure you have unsafe scripts enabled through your browser (usually a little padlock ! OR ! shield symbol in the browser bar to the left or right). The third party json api data will not load otherwise and won't show the weather in the bar below.")


    function gatherData(arr) {

        this.arr = arr; //super array
        weatherinfo.innerHTML = arr.main.temp + "c"; //shows the local temperature is celcius 
    }

    function updateClock() {
        var now = new Date(), // returns the current date
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] //contains a list of all the months;
        time = now.getHours() + ':' + now.getMinutes(), //creates a digital clock

            // a cleaner way than string concatenation
            date = [now.getDate(),
                months[now.getMonth()],
                now.getFullYear()
            ].join(' ');

        // set the content of the element with the ID time to the formatted string
        document.getElementById('time').innerHTML = [date, time].join(' | ');

        // call this function again in 1000ms
        setTimeout(updateClock, 1000); //makes sure the clock is always ticking when minutes change
    }
    updateClock(); // initial call
}

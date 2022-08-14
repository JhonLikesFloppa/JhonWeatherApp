let weather = {
    //API Key Goes Here
    "apiKey": "de99f9bf6f1744e3b55143400221008",
    //Function That Fetches Weather From The API
    fetchWeather: function(city) {
        fetch(
            /*Basically The API URL Is uhh Split Up And Made
            Into Parts So That It Can Be Controlled??? lmao*/
            "https://api.weatherapi.com/v1/current.json?key=" 
            + this.apiKey 
            + "&q="
            + city
            + "&aqi=yes"
        )
            /*This Part Takes The Response From
            The API And Converts It Into JSON*/       
            .then((response) => response.json())
            /*This One Tells The Code To Display Weather
            Based On The Funtion We Created Below*/
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        //Here All The Const Stuff Read The Data From The JSON
        const { name, localtime, country } = data.location;
        const { icon, text, code } = data.current.condition;
        const { temp_c, temp_f, humidity, wind_kph, wind_mph, wind_degree, wind_dir, cloud, is_day, feelslike_c, feelslike_f, vis_km, vis_miles, uv, pressure_mb, pressure_in } = data.current;
        //Console Logging The Data To Make Sure Everything Is All Right
        console.log(`Name: ${name}, Country: ${country}, Icon ID: ${icon}, Weather Description: ${text}, Temperature In Celcius: ${temp_c} Degrees C, Temperature In Fahrenheit: ${temp_f} Degrees F, Humidity: ${humidity}%, Wind Speed In KM/H: ${wind_kph}KM/h, Wind Speed In Miles: ${wind_mph}MP/h, Current Date And Time: ${localtime}, Cloud Percentile: ${cloud}, Weather Code: ${code}, Is It Day Time?: ${is_day}, Wind Direction In Degrees ${wind_degree} Degrees, Wind Direction: ${wind_dir}, Feels Like In C: ${feelslike_c}C, Feels Like In F: ${feelslike_f}F, Visibility In KM: ${vis_km}, Visibility In Miles: ${vis_miles}, UV Index: ${uv}, Pressure In Millibars: ${pressure_mb}, Pressure In Inches: ${pressure_in}`);
        //Selecting Classes From The HTML And Changing Them Based On The Data We Got From The API
        document.querySelector(".name").innerHTML = name;
        document.querySelector(".country").innerHTML = country;
        document.querySelector(".icon").src = "https:" + icon;
        document.querySelector(".datetime").innerHTML = localtime;
        document.querySelector(".condition").innerHTML = text;
        document.querySelector(".temp").innerHTML = temp_c + "&#176;" + "C" + "&nbsp;" + "/" + "&nbsp;" + temp_f + "&#176;" + "F";
        document.querySelector(".cloud").innerHTML = cloud + "%";
        document.querySelector(".humidity").innerHTML = humidity + "%";
        document.querySelector(".wind").innerHTML = wind_kph + "&nbsp;" + "KMph" + "&nbsp;" + "/" + "&nbsp;" + wind_mph + "&nbsp;" + "Mph";
        document.querySelector(".winddeg").innerHTML = wind_degree + "&#176;";
        document.querySelector(".winddir").innerHTML = wind_dir;
        document.querySelector(".feelslike").innerHTML = feelslike_c + "&#176;" + "C" + "&nbsp;" + "/" + "&nbsp;" + feelslike_f + "&#176" + "F";
        document.querySelector(".visib").innerHTML = vis_km + "&nbsp;" + "KM" + "&nbsp;" + "/" + "&nbsp;" + vis_miles + "&nbsp;" + "Miles" ;
        document.querySelector(".uvindex").innerHTML = uv;
        document.querySelector(".pressure").innerHTML = pressure_mb + "mb";
        /*If The Weather Code Matches Whatever We Got From The Response, Change
        The Background Image And Search Button Color. This One Is For Clear Weather*/
        if (code == 1000) {
            document.body.style.backgroundImage = `url(https://i.imgur.com/K2dV3Vj.jpg)`;
            document.body.style.backgroundPosition = "center"
            document.body.style.backgroundSize = "cover"
            document.body.style.backgroundRepeat = "no-repeat"
            document.querySelector(".submit").style.background = "#e5ba92";
            document.body.style.transition = "2s ease";
            // If The Weather Is Night, Use The Night Version Of The Image And A Matching Color For The Button
            if (is_day == "0") {
                document.body.style.backgroundImage = `url(https://i.imgur.com/gkNWpBj.jpg)`;
                document.body.style.backgroundPosition = "center"
                document.body.style.backgroundSize = "cover"
                document.body.style.backgroundRepeat = "no-repeat"
                document.querySelector(".submit").style.background = "#181e27";
                document.body.style.transition = "2s ease";
            }
        } else if (
            //Codes Below For Cloudy Weather
            code == 1003 ||
            code == 1006 ||
            code == 1009 ||
            code == 1030 ||
            code == 1069 ||
            code == 1087 ||
            code == 1135 ||
            code == 1273 ||
            code == 1276 ||
            code == 1279 ||
            code == 1282
        ) {
            document.body.style.backgroundImage = `url(https://i.imgur.com/ShHVG57.jpg)`;
            document.body.style.backgroundPosition = "center"
            document.body.style.backgroundSize = "cover"
            document.body.style.backgroundRepeat = "no-repeat"
            document.querySelector(".submit").style.background = "#fa6d1b";
            document.body.style.transition = "2s ease";
            // If The Weather Is Night, Use The Night Version Of The Image And A Matching Color For The Button
            if (is_day == "0") {
                document.body.style.backgroundImage = `url(https://i.imgur.com/3Y1Ucl5.jpg)`;
                document.body.style.backgroundPosition = "center"
                document.body.style.backgroundSize = "cover"
                document.body.style.backgroundRepeat = "no-repeat"
                document.querySelector(".submit").style.background = "#181e27";
                document.body.style.transition = "2s ease";
            }
        } else if (
            // Rain
            code == 1063 ||
            code == 1069 ||
            code == 1072 ||
            code == 1150 ||
            code == 1153 ||
            code == 1180 ||
            code == 1183 ||
            code == 1186 ||
            code == 1189 ||
            code == 1192 ||
            code == 1195 ||
            code == 1204 ||
            code == 1207 ||
            code == 1240 ||
            code == 1243 ||
            code == 1246 ||
            code == 1249 ||
            code == 1252
        ) {
            document.body.style.backgroundImage = `url(https://i.imgur.com/31RF6jF.jpg)`;
            document.body.style.backgroundPosition = "center"
            document.body.style.backgroundSize = "cover"
            document.body.style.backgroundRepeat = "no-repeat"
            document.querySelector(".submit").style.background = "#647d75";
            document.body.style.transition = "2s ease";
            // If The Weather Is Night, Use The Night Version Of The Image And A Matching Color For The Button
            if (is_day == "0") {
                document.body.style.backgroundImage = `url(https://i.imgur.com/AMhFBEK.jpg)`;
                document.body.style.backgroundPosition = "center"
                document.body.style.backgroundSize = "cover"
                document.body.style.backgroundRepeat = "no-repeat"
                document.querySelector(".submit").style.background = "#325c80";
                document.body.style.transition = "2s ease";
            }
        } else {
            //Snow
            document.body.style.backgroundImage = `url(https://i.imgur.com/6S61O2V.jpg)`;
            document.body.style.backgroundPosition = "center"
            document.body.style.backgroundSize = "cover"
            document.body.style.backgroundRepeat = "no-repeat"
            document.querySelector(".submit").style.background = "#1b1b1b";
            document.body.style.transition = "2s ease";
            // If The Weather Is Night, Use The Night Version Of The Image And A Matching Color For The Button
            if (is_day == "0") {
                document.body.style.backgroundImage = `url(https://i.imgur.com/MBzOIcQ.jpg)`;
                document.body.style.backgroundPosition = "center"
                document.body.style.backgroundSize = "cover"
                document.body.style.backgroundRepeat = "no-repeat"
                document.querySelector(".submit").style.background = "#1b1b1b";
                document.body.style.transition = "2s ease";
            }
        }
    },
    // Function For Searching The Weather
    search: function() {
        // Getting The Search Bar Class From HTML
        this.fetchWeather(document.querySelector(".search").value);
        // If There Is No Text In The Search Bar, Throw An Alert (Error)
        if (document.querySelector(".search").value == 0) {
            alert('Please Type In A City')
        }
    }
};

// When The Search Button Is Clicked, The Function Search For The Value In The Search Bar
document.querySelector(".submit").addEventListener("click", function() {
    weather.search();
});

// When The Enter Key Is Clicked, The Function Search For The Value In The Search Bar
document.querySelector(".search").addEventListener("keyup", function() {
    if (event.key == "Enter") {
        weather.search();
    }
});

// Random Array Of "Top 100 Cities In The World" I Got From (https://www.bestcities.org/rankings/worlds-best-cities/)
var cityNames = [
"LONDON",
"PARIS",
"NEW-YORK",
"MOSCOW",
"DUBAI",
"TOKYO",
"SINGAPORE",
"LOS-ANGELES",
"BARCELONA",
"MADRID",
"ROME",
"DOHA",
"CHICAGO",
"ABU-DHABI",
"SAN-FRANCISCO",
"AMSTERDAM",
"ST-PETERSBURG",
"TORONTO",
"SYDNEY",
"BERLIN",
"LAS-VEGAS",
"WASHINGTON",
"ISTANBUL",
"VIENNA",
"BEIJING",
"PRAGUE",
"MILAN",
"SAN-DIEGO",
"HONG-KONG",
"MELBOURNE",
"BOSTON",
"HOUSTON",
"DUBLIN",
"MIAMI",
"ZURICH",
"SEATTLE",
"BUDAPEST",
"SAO-PAULO",
"MUNICH",
"BANGKOK",
"ORLANDO",
"SEOUL",
"ATLANTA",
"DALLAS",
"FRANKFURT",
"VANCOUVER",
"AUSTIN",
"MONTREAL",
"CALGARY",
"DELHI",
"LISBON",
"NAPLES",
"OSAKA",
"SAN-JOSE",
"RIYADH",
"DENVER",
"PHILADELPHIA",
"TEL-AVIV",
"COPENHAGEN",
"BRUSSELS",
"BRISBANE",
"VALENCIA",
"BUENOS-AIRES",
"TAIPEI",
"RIO-DE-JANEIRO",
"PORTLAND",
"HAMBURG",
"KUWAIT-CITY",
"WARSAW",
"ATHENS",
"PERTH",
"HELSINKI",
"MINNEAPOLIS",
"OSLO",
"SHANGHAI",
"PHOENIX",
"AUCKLAND",
"NEW-ORLEANS",
"JERUSALEM",
"MUSCAT",
"NASHVILLE",
"STOCKHOLM",
"SANTIAGO",
"OTTAWA",
"BALTIMORE",
"EDMONTON",
"LYON",
"MARSEILLE",
"ADELAIDE",
"GOTEBORG",
"BILBAO",
"MEXICO-CITY",
"SALT-LAKE-CITY",
"MUMBAI",
"SACRAMENTO",
"SAN-ANTONIO",
"TUCSON",
"SEVILLE",
"CHARLOTTE",
"NANJING"
]

// Randomly Picks A City From The Array I've Made
function cityRandomSelect(cityNames) {
    return cityNames[Math.floor(Math.random()*cityNames.length)];
}

// When The Weather App Starts Up, It Picks A Random City From The Array And Displays The Weather
weather.fetchWeather(cityRandomSelect(cityNames));
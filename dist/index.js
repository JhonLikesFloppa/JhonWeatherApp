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
        .then((response) => {
            if (!response.ok) {
              alert("City Not Found. You May Have Typed In An Invalid Name Or Left The Search Bar Blank :(");
              throw new Error("City Not Found. You May Have Typed In An Invalid Name Or Left The Search Bar Blank :(");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data))
        .catch(error => {
            console.log(error)
            alert('You Are Disconnected From The Internet, Please Connect To An Internet & Refresh (CTRL + R Or Right Click) For The App To Work')
        })
    },
    displayWeather: function(data) {
        const { name, localtime, country } = data.location;
        const { icon, text, code } = data.current.condition;
        const { temp_c, temp_f, humidity, wind_kph, wind_mph, wind_degree, wind_dir, cloud, is_day, feelslike_c, feelslike_f, vis_km, vis_miles, uv, pressure_mb, pressure_in } = data.current;
        const { co, o3, no2, so2, pm2_5, pm10 } = data.current.air_quality;
        console.log(`Name: ${name}, Country: ${country}, Icon ID: ${icon}, Weather Description: ${text}, Temperature In Celcius: ${temp_c} Degrees C, Temperature In Fahrenheit: ${temp_f} Degrees F, Humidity: ${humidity}%, Wind Speed In KM/H: ${wind_kph}KM/h, Wind Speed In Miles: ${wind_mph}MP/h, Current Date And Time: ${localtime}, Cloud Percentile: ${cloud}, Weather Code: ${code}, Is It Day Time?: ${is_day}, Wind Direction In Degrees ${wind_degree} Degrees, Wind Direction: ${wind_dir}, Feels Like In C: ${feelslike_c}C, Feels Like In F: ${feelslike_f}F, Visibility In KM: ${vis_km}, Visibility In Miles: ${vis_miles}, UV Index: ${uv}, Pressure In Millibars: ${pressure_mb}, Pressure In Inches: ${pressure_in}, Carbon Monoxide: ${co}μg/m3, O3: ${o3}μg/m3, NO2: ${no2}μg/m3, SO2: ${so2}μg/m3, PM2.5: ${pm2_5}μg/m3, PM10: ${pm10}μg/m3`);
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
        document.querySelector(".pressure").innerHTML = pressure_mb + "&nbsp;" + "MB" + "&nbsp;" + "/" + "&nbsp;" + pressure_in + "&nbsp;" + "IN";
        document.querySelector(".carbmonx").innerHTML = Math.trunc(co) + "&nbsp;" + "μg/m3"
        document.querySelector(".ozone").innerHTML = Math.trunc(o3) + "&nbsp;" + "μg/m3"
        document.querySelector(".nitrodiox").innerHTML = Math.trunc(no2) + "&nbsp;" + "μg/m3"
        document.querySelector(".sulphdiox").innerHTML = Math.trunc(so2) + "&nbsp;" + "μg/m3"
        document.querySelector(".pm25").innerHTML = Math.trunc(pm2_5) + "&nbsp;" + "μg/m3"
        document.querySelector(".pm10").innerHTML = Math.trunc(pm10) + "&nbsp;" + "μg/m3"
        if (code == 1000) {
            document.body.style.backgroundImage = `url(https://i.imgur.com/K2dV3Vj.jpg)`;
            document.body.style.backgroundPosition = "center"
            document.body.style.backgroundSize = "cover"
            document.body.style.backgroundRepeat = "no-repeat"
            document.querySelector(".submit").style.background = "#e5ba92";
            document.body.style.transition = "2s ease";
            if (is_day == "0") {
                document.body.style.backgroundImage = `url(https://i.imgur.com/gkNWpBj.jpg)`;
                document.body.style.backgroundPosition = "center"
                document.body.style.backgroundSize = "cover"
                document.body.style.backgroundRepeat = "no-repeat"
                document.querySelector(".submit").style.background = "#181e27";
                document.body.style.transition = "2s ease";
            }
        } else if (
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
            if (is_day == "0") {
                document.body.style.backgroundImage = `url(https://i.imgur.com/3Y1Ucl5.jpg)`;
                document.body.style.backgroundPosition = "center"
                document.body.style.backgroundSize = "cover"
                document.body.style.backgroundRepeat = "no-repeat"
                document.querySelector(".submit").style.background = "#181e27";
                document.body.style.transition = "2s ease";
            }
        } else if (
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
            if (is_day == "0") {
                document.body.style.backgroundImage = `url(https://i.imgur.com/AMhFBEK.jpg)`;
                document.body.style.backgroundPosition = "center"
                document.body.style.backgroundSize = "cover"
                document.body.style.backgroundRepeat = "no-repeat"
                document.querySelector(".submit").style.background = "#325c80";
                document.body.style.transition = "2s ease";
            }
        } else {
            document.body.style.backgroundImage = `url(https://i.imgur.com/6S61O2V.jpg)`;
            document.body.style.backgroundPosition = "center"
            document.body.style.backgroundSize = "cover"
            document.body.style.backgroundRepeat = "no-repeat"
            document.querySelector(".submit").style.background = "#1b1b1b";
            document.body.style.transition = "2s ease";
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
    search: function() {
        this.fetchWeather(document.querySelector(".search").value);
    }
};

document.querySelector(".submit").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search").addEventListener("keyup", function() {
    if (event.key == "Enter") {
        weather.search();
    }
});

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

function cityRandomSelect(cityNames) {
    return cityNames[Math.floor(Math.random()*cityNames.length)];
}

weather.fetchWeather(cityRandomSelect(cityNames));

window.addEventListener("offline",function(){
    alert('You Are Disconnected From The Internet, Please Connect To An Internet & Refresh (CTRL + R Or Right Click) For The App To Work')
})
const {listen} = window.__TAURI__.event;
listen('tauri://update-status', function (res) {
  console.log('New Status: ', res)
});

let weather = {
    "apiKey": "de99f9bf6f1744e3b55143400221008",
    fetchWeather: function(city) {
        fetch(
            "https://api.weatherapi.com/v1/current.json?key=" 
            + this.apiKey 
            + "&q="
            + city
            + "&aqi=yes"
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name, localtime } = data.location;
        const { icon, text, code } = data.current.condition;
        const { temp_c, humidity, wind_kph, cloud, is_day } = data.current;
        console.log(name,icon,text,temp_c,humidity,wind_kph,localtime,cloud,code,is_day);
        document.querySelector(".name").innerHTML = name;
        document.querySelector(".icon").src = "https:" + icon;
        document.querySelector(".datetime").innerHTML = localtime;
        document.querySelector(".condition").innerHTML = text;
        document.querySelector(".temp").innerHTML = temp_c + "&#176;" + "c";
        document.querySelector(".cloud").innerHTML = cloud + "%";
        document.querySelector(".humidity").innerHTML = humidity + "%";
        document.querySelector(".wind").innerHTML = wind_kph + "km/h";
        if (code == 1000) {
            document.body.style.backgroundImage = `url(./images/Day/Clear.jpg)`;
            document.body.style.backgroundPosition = "center"
            document.body.style.backgroundSize = "cover"
            document.body.style.backgroundRepeat = "no-repeat"
            document.querySelector(".submit").style.background = "#e5ba92";
            document.body.style.transition = "2s ease";
            if (is_day == "0") {
                document.body.style.backgroundImage = `url(./images/Night/Clear.jpg)`;
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
            document.body.style.backgroundImage = `url(./images/Day/Cloudy.jpg)`;
            document.body.style.backgroundPosition = "center"
            document.body.style.backgroundSize = "cover"
            document.body.style.backgroundRepeat = "no-repeat"
            document.querySelector(".submit").style.background = "#fa6d1b";
            document.body.style.transition = "2s ease";
            if (is_day == "0") {
                document.body.style.backgroundImage = `url(./images/Night/Cloudy.jpg)`;
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
            document.body.style.backgroundImage = `url(./images/Day/Rainy.jpg)`;
            document.body.style.backgroundPosition = "center"
            document.body.style.backgroundSize = "cover"
            document.body.style.backgroundRepeat = "no-repeat"
            document.querySelector(".submit").style.background = "#647d75";
            document.body.style.transition = "2s ease";
            if (is_day == "0") {
                document.body.style.backgroundImage = `url(./images/Night/Rainy.jpg)`;
                document.body.style.backgroundPosition = "center"
                document.body.style.backgroundSize = "cover"
                document.body.style.backgroundRepeat = "no-repeat"
                document.querySelector(".submit").style.background = "#325c80";
                document.body.style.transition = "2s ease";
            }
        } else {
            document.body.style.backgroundImage = `url(./images/Day/Snowy.jpg)`;
            document.body.style.backgroundPosition = "center"
            document.body.style.backgroundSize = "cover"
            document.body.style.backgroundRepeat = "no-repeat"
            document.querySelector(".submit").style.background = "#1b1b1b";
            document.body.style.transition = "2s ease";
            if (is_day == "0") {
                document.body.style.backgroundImage = `url(./images/Night/Snowy.jpg)`;
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
        if (document.querySelector(".search").value == 0) {
            alert('Please Type In A City')
        }
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
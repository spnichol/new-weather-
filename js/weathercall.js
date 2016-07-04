
var lat;
var long ;
var weatherAPI;
function findNum() {
var weathercode;
var tempout;
var conditionout;

navigator.geolocation.getCurrentPosition(function(position) {

	lat = position.coords.latitude;
	long = position.coords.longitude;
	weatherAPI = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&APPID=5c851ed5fc2dfd7022350b80629e301c"; 
	$.getJSON(weatherAPI, function(data) {
		conditionout = (data.weather[0].description);
		$(".weathertype").html(conditionout);
		tempout = Math.floor((data.main.temp) * (9/5) -(459.67)) + " F";
		tempoutc = Math.floor((data.main.temp) -(273.15)) + " C";

		$(".temperature").html(tempout);

		weathercode = (data.weather[0].id);


		if (weathercode >=200 && weathercode <=232) {
			$("#thunderstorm").removeClass("imghide").addClass("imgshow");
		}
		else if (weathercode >=300 && weathercode <=321) {
			$("#drizzle").removeClass("imghide").addClass("imgshow");
		}

		else if (weathercode >=500 && weathercode <=531) {
			$("#thunderstorm").removeClass("imghide").addClass("imgshow");
		}

		else if (weathercode >=600 && weathercode <=622) {
			$("#snow").removeClass("imghide").addClass("imgshow");
		}

		else if (weathercode >=700 && weathercode <=781) {
			$("#atmospheric").removeClass("imghide").addClass("imgshow");
		}

		else if (weathercode == 800) {
			$("#clear").removeClass("imghide").addClass("imgshow");
		}

		else if (weathercode >= 801 && weathercode <= 804) {
			$("#cloudy").removeClass("imghide").addClass("imgshow");
		}
	

		function changetoCelsius() {
			$(".temperature").html(tempoutc);
		}
		function changebacktoF() {
			$(".temperature").html(tempout);
		}

		$(function(){
			$("#celsius").click(changetoCelsius);
			$("#changeback").click(changebacktoF);
		});

		


		
		



	})






});
}


findNum();



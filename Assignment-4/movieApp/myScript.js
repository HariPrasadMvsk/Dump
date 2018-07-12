var xmlhttp;
            
window.onload = function()
{
	document.getElementById('btnGetInfo').addEventListener('click',getMovieInfo, false);
}

function getMovieInfo(e)
{
	var movieName = document.getElementById('movieName').value;
	var url = "https://api.themoviedb.org/3/search/movie?api_key=d2f3e3c3c35f70eb7d6e51b00585b083&language=en-US&query="+movieName+"&page=1&include_adult=false";
	console.log(url);
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = processData;
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function processData()
{
	if(xmlhttp.readyState==4 && xmlhttp.status== 200) {
		var movieJSON = xmlhttp.responseText;
		movieJSON = JSON.parse(movieJSON);
		var title= movieJSON.results[0].title;
		var release_date = movieJSON.results[0].release_date;
		var rating = movieJSON.results[0].vote_average;
		var posterURL = movieJSON.results[0].poster_path;
		
		document.getElementById('poster').src += posterURL;
		document.getElementById('movieTitle').innerHTML += "<h1>" + title + " ["+ rating +"]</h1>";
		document.getElementById('movieYear').innerHTML += "<h3>" + release_date + "</h3>";
		
		/*document.getElementById('resultContainer').innerHTML += movieJSON.results[0]["title & release_date"].map(function(el){
			console.log("Title: " + el.title + "; Release Date: " + el.release_date);
			var dtTag = "<dt class=\"date\"><span>Date: </span>" + el.title + "</dt>";
			var ddTag = "<dd class=\"value\"><span>Time: </span>" + el.release_date + "</dd>";

			return dtTag + ddTag;
		}).join("");*/
			
	}
}

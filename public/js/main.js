
// search for artist, append search results to dom
$(document).ready(function() {
	$("#getRelatedArtists").on("submit", function(){
		event.preventDefault();
		var searchArtist = $("#searchArtist").val();
		$.get('https://api.spotify.com/v1/search?q=' + searchArtist + '&type=artist').done(function(req, res) {
			var resultsArr = req.artists.items;
			console.log(resultsArr);
			for (var i = 0; i < resultsArr.length; i++) {
				// resArr.push({name: resultsArr[i].name, id: resultsArr[i].id});
				$("#searchResults").append("<div class='col-xs-12 col-sm-6 col-md-3'><input class= 'btn btn-default searchResults' id='" + resultsArr[i].id +"'type= 'submit' value=" + resultsArr[i].name + "> </div>");
				// $("#results").append("<li>" + artistItem[i].images[3].url + "</li>");
			}
		});
	});
	$("#searchResults").on("submit", function() {
		event.preventDefault();
		console.log("preventDefault");
		var chosenArtistId = $this.id;
		console.log(chosenArtistId);
		$.get('https://api.spotify.com/v1/artists' + chosenArtistId).done(function() {
			$("#chosenArtist").append("<div class='col-md-12'><input class= 'btn btn-default' id='" + chosenArtistId +"'type= 'submit' value=" + chosenArtistId + "></div>");
		});
		$.get('https://api.spotify.com/v1/artists' + chosenArtistId + '/related-artists').done(function() {
			$("#chosenArtistRelated").append("<div class='col-md-3'><input class= 'btn btn-default' id='" + chosenArtistId +"'type= 'submit' value=" + chosenArtistId + "></div>");
		});
	});
});

// $(document).ready(function() {
// 	$("#searchResults").on("submit", function() {
// 		event.preventDefault();
// 		console.log("preventDefault");
// 		var chosenArtistId = $(this).attr("id");
// 		console.log(chosenArtistId);
// 		$.get('https://api.spotify.com/v1/artists' + chosenArtistId).done(function() {
// 			$("#chosenArtist").append("<div class='col-md-12'><input class= 'btn btn-default' id='" + chosenArtistId +"'type= 'submit' value=" + chosenArtistId + "></div>");
// 		});
// 		$.get('https://api.spotify.com/v1/artists' + chosenArtistId + '/related-artists').done(function() {
// 			$("#chosenArtistRelated").append("<div class='col-md-3'><input class= 'btn btn-default' id='" + chosenArtistId +"'type= 'submit' value=" + chosenArtistId + "></div>");
// 		});
// 	});
// });

// // on click, 
// make search results dissapear
// reset search box
// get artist related artists, 
// display artist,
// display related artist


// $.get('https://api.spotify.com/v1/artists/' + resObj.artists.items.id + '/related-artists').done(function(response) {
			// $("#results").append("<li>" + response.artists.items.id + "</li>");




// https://api.spotify.com/v1/artists/{id}/related-artists

// search for artist, append search results to page
$(document).ready(function() {
	$("#getRelatedArtists").on("submit", function(){
		event.preventDefault();
		var searchArtist = $("#searchArtist").val();
		$.get('https://api.spotify.com/v1/search?q=' + searchArtist + '&type=artist').done(function(req, res) {
			var resultsArr = req.artists.items;
			// var image = resultsArr[i].images
			console.log(resultsArr[0]);
			for (var i = 0; i < resultsArr.length; i++) {
				$("#searchResultsRow").append("<div class='col-xs-12 col-sm-6 col-md-3 target' id='" + resultsArr[i].id + "' onclick= 'chooseArtist()'>"  + resultsArr[i].name + "</div>");
				// + "<img src='" + resultsArr[i].images[3].url + "'  alt='artist thumbnail'>"
				// console.log(resultsArr[i].images[3].url);
			}
			var chooseArtist = function() {
				console.log("click works");
				console.log(resultsArr[i].id);
				$.get('https://api.spotify.com/v1/artists' + resultsArr[i].id).done(function() {
					$("#chosenArtist").append("<div class='col-md-12'><input class= 'btn btn-default' id='" + resultsArr[i].id +"'type= 'submit' value=" + resultsArr[i].id + "></div>");
				});
				$.get('https://api.spotify.com/v1/artists' + resultsArr[i].id + '/related-artists').done(function() {
					$("#chosenArtistRelated").append("<div class='col-md-3'><input class= 'btn btn-default' id='" + resultsArr[i].id +"'type= 'submit' value=" + resultsArr[i].id + "></div>");
				});
			};
		});
	});
	 //create - fill in form 
});

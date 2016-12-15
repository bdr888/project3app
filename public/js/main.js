
// search for artist, append search results to dom
$(document).ready(function() {
	$("#getRelatedArtists").on("submit", function(){
		event.preventDefault();
		var searchArtist = $("#searchArtist").val();
		$.get('https://api.spotify.com/v1/search?q=' + searchArtist + '&type=artist').done(function(req, res) {
			var resultsArr = req.artists.items;
			console.log(resultsArr[0].name);
			for (var i = 0; i < resultsArr.length; i++) {
				$("#searchResultsRow").append("<div class='col-xs-12 col-sm-6 col-md-3'><input onclick= 'chooseArtist()' class= 'btn btn-default searchResultsItem' id='" + resultsArr[i].id +"'type= 'submit' value=" + resultsArr[i].name + "> </div>");
			}
			var chooseArtist = function() {
				console.log("click works");
				console.log(resultsArr[i].id);
				// console.log(resultsArr[i].id);
				$.get('https://api.spotify.com/v1/artists' + resultsArr[i].id).done(function() {
					$("#chosenArtist").append("<div class='col-md-12'><input class= 'btn btn-default' id='" + resultsArr[i].id +"'type= 'submit' value=" + resultsArr[i].id + "></div>");
				});
				$.get('https://api.spotify.com/v1/artists' + resultsArr[i].id + '/related-artists').done(function() {
					$("#chosenArtistRelated").append("<div class='col-md-3'><input class= 'btn btn-default' id='" + resultsArr[i].id +"'type= 'submit' value=" + resultsArr[i].id + "></div>");
				});
			};
		});
	});
		
});

// // on click, 
// make search results dissapear
// reset search box
// get artist related artists, 
// display artist,
// display related artist

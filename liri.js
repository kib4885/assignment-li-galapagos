require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require('moment');
var Spotify = require('node-spotify-api');
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var search = process.argv.slice(3).join(" ");

//commands
if (command === "concert-this") {

    concertthis();
}

else if (command === "spotify-this-song") {

    spotifythis()
}

else if (command === "movie-this") {
    moviethis();

}

else if (command === "do-what-it-says") {
    dothis()
}

//fuctions
function moviethis() {
// command line argument
    var movie = search
    //user no input default 
    if (movie === "") {
        movie = "Mr Nobody";
    }
//OMDB API call
    axios.get("https://www.omdbapi.com/?t=" + movie + "&y=&type=movie&apikey=4e36d18a").then(

        function (response) {
            var movie = response.data;
            //movie data object
            var movieData = [
                "\n",
                "Title: " + movie.Title,
                "Release Year: " + movie.Year,
                "IMDB Rating: " + movie.imdbRating,
                "Rotten Tomatoes Rating: " + movie.Ratings[1].Value,
                "Country: " + movie.Country,
                "Language: " + movie.Language,
                "Plot: " + movie.Plot,
                "Actors: " + movie.Actors,
            ].join("\n\n")

            fs.appendFile("log.txt", movieData, function (err) {
                if (err)
                    throw err;
            });
            console.log(movieData);
        });
}

function spotifythis() {
    // command line argument
    var song = search;
//user no input default 
    if (song === "") {
        song = "The Sign, Ace of Base";
    }
    console.log("\n");
    //spotify API call, with limit
    spotify.search({ type: 'track', query: song, limit: 6 })
        .then(function (response) {
            var song = response.tracks.items
            // loop for song object//
            for (var i = 0; i < song.length; i++) {
                var songinfo = response.tracks.items[i]
                var artistArray = songinfo.artists;
                //loop for artist oject//
                for (var j = 0; j < artistArray.length; j++) {
                    var artist = artistArray[j].name;
// song object
                    var songData = [
                        "Artist: " + artist,
                        "Song: " + songinfo.name,
                        "Album: " + songinfo.album.name,
                        "Preview Song: " + songinfo.preview_url,
                        "\n____________________________________\n",
                    ].join("\n\n")

                    fs.appendFile("log.txt", songData, function (err) {
                        if (err)
                            throw err;

                    });
                    console.log(songData);
                };
            };
        });
}


function concertthis() {
     // command line argument
    var artist = search;
//Bands in town API,
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            //response event limit
            var eventMax = 6;
            //loop for limit
            for (var i = 0; i < eventMax; i++) {
                var events = response.data[i];
                //moment use to format date
                var eventDate = moment(events.datetime).format('MM/DD/YYYY');
                var venue = events.venue;
                var location = venue.city + ", " + venue.region;
                //concert object
                var concertData = [
                    "\n____________________________________\n",
                    "Venue Name: " + venue.name,
                    "Venue Location: " + location,
                    "Concert Date: " + eventDate,
                ].join("\n\n")

                fs.appendFile("log.txt", concertData, function (err) {
                    if (err)
                        throw err;
                });
                console.log(concertData);
            };
        });
}


function dothis() {

    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }
        var output = data.split(",");
        // console.log(output[0]);

//arguments for inside of random.txt
        //run command
        command = output[0];
        //search command
        search = output[1];
        //function
        spotifythis()

    });

}
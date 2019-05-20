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

    var movie = search
    if (movie === "") {
        movie = "Mr Nobody";
    }

    axios.get("https://www.omdbapi.com/?t=" + movie + "&y=&type=movie&apikey=4e36d18a").then(

        function (response) {
            var movie = response.data;
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
    var song = search;

    if (song === "") {
        song = "The Sign, Ace of Base";
    }
    console.log("\n");
    spotify.search({ type: 'track', query: song, limit: 5 })
        .then(function (response) {
            var song = response.tracks.items
            for (var i = 0; i < song.length; i++) {
                var songinfo = response.tracks.items[i]
                var artistArray = songinfo.artists;
                for (var j = 0; j < artistArray.length; j++) {
                    var unknown = artistArray[j].name;
                    var songData = [
                        "Artist: " + unknown,
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
    var artist = search;

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            var eventMax = 6;
            for (var i = 0; i < eventMax; i++) {
                var events = response.data[i];
                var eventDate = moment(events.datetime).format('MM/DD/YYYY');
                var venue = events.venue;
                var location = venue.city + ", " + venue.region;
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
        console.log(output[0]);


        command = output[0];
        search = output[1];
        spotifythis()

    });

}
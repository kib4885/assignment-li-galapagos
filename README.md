# assignment-li-galapagos - LIRI APP

## **OVERVIEW**

In this assignment, I was tasked with creating a LIRI App. LIRI Is the Language Interpretation and Recognition Interface. I will be using LIRI at the node app command line, where it will take parameters (listed below) and return data. 

## **TECHNOLOGIES USED**

### **JavaScript:**
#### **Platforms:**
* Node.js – used to run commands for Liri program
* Moment.js – used to convert dates and time
#### **Interfaces:**
* Spotify API – via Node and NPM, used to get song data
* OMDB – via Axios, used to get movie data
* Bands In Town API – via Axios, used to get concert data

### **APP FUNCTION**
#### **Allowed commands:**
**concert-this**
   * User Input: “Artist”
   * Uses Bands In Town API to get the following data:
     - Name of Venue
     - Venue Location
     - Date of the Event (used moment to format)
**spotify-this-song**
   * User Input: “Song Title”
   * Uses Spotify API to get the following data:
     - Artist(s)
     - The song's name
     - A preview link of the song from Spotify
     - The album that the song is from
     - If user doesn’t input song title, will search default “The Sign” By Ace of Base
**movie-this**
   * User Input: “movie title”
   * Uses OMDB API to get the following data:
     - Title of the movie.
     - Year the movie came out.
     - IMDB Rating of the movie.
  


# assignment-li-galapagos - LIRI APP

## **LINK TO APP VIDEO**

## **OVERVIEW**

In this assignment, I was tasked with creating a LIRI App. LIRI Is the Language Interpretation and Recognition Interface. I will be using LIRI at the node app command line, where it will take parameters (listed below) and return data. 

## **TECHNOLOGIES USED**

### **JavaScript:**
#### **Platforms:**
* Node – used to run commands for Liri program
* Moment.js – used to convert dates and time
#### **Interfaces:**
* Spotify API – via Node and NPM, used to get song data
* OMDB – via Axios, used to get movie data
* Bands In Town API – via Axios, used to get concert data

## **APP FUNCTION**
### **Allowed Commands:**
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
     - Rotten Tomatoes Rating of the movie.
     - Country where the movie was produced
     - Language of the Movie
     - Plot of the Movie
     - Actors in the movie
     - If user doesn’t input movie title, will search default “Mr. Nobody”

**do-what-it-says**
   * This command will take the text from inside of random.txt file. Currently, it should run spotify-this-song command for “I Want it That Way. 
   * The text within the file can be updated to run the other 2 commands as well. 

 - App will also output data to log.txt file. This will append each time and not override previous data.

## **CODE EXAMPLE** (see video for full program):
#### **To begin, set-up included the following:**
* npm init -y – to initialize package.json – this is required for installing npm third party packages
* gitignore – used so git won’t track files(commit to Github)
* Keys.js – use to hide Spotify API keys
* .env -  holds Spotify API keys
* Packages installed
  - npm install --save node-spotify-api
  - npm install axios
  - npm install moment –save
  - npm install dotenv
#### **The code for this program consist of:** 
* Vars:
  - used to require (node modules and local files) and set parameters arguments (for command line and console.log) 
* For Loops
  - Used to sort through API data
* Commands:
  - were assigned using “if” and “else if” statements, in order for the program to know which function to run, as dictated by the command line.	
* Functions:
  - Each function was set-up to do the following:
     * Take the command line input
     * Run through arguments
     * Get API data and return response
     * Console.log array object parameters 
     * Append array object parameters to log.txt file
	
#### **Running Commands:**
* Within the node terminal the command and search parameter(s) are inputted
  - Code Ex:   node liri.js concert-this ariana grande
* The function assigned to the command will run
![function](https://github.com/kib4885/assignment-li-galapagos/blob/master/images/function.png)

* Request data from API via Axios
![api](https://github.com/kib4885/assignment-li-galapagos/blob/master/images/axios.png)

* Return response(data), based on parameters
![data](https://github.com/kib4885/assignment-li-galapagos/blob/master/images/response.png)

* Append data to log.txt
![append-file](https://github.com/kib4885/assignment-li-galapagos/blob/master/images/append-data.png)

* Console.log data parameters (output to terminal)
![console-file](https://github.com/kib4885/assignment-li-galapagos/blob/master/images/console-data.png)
* Clear terminal and repeat for other commands	

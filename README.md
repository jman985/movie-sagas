# PROJECT NAME

## Description

_Duration: 2-Day Sprint_

This application seeks to offer the user access to a database of popular movies.  Upon clicking a movie, a dropdown tab is shown containing a description of the movie's plot, along with a "Select Movie" button.  Upon clicking this button, the user is taken to a detailed view of the selected movie's title, poster, description, and respective genre(s).  From this page the user has the ability to click "Cancel", which takes them back to list of movies, or "Edit" which takes them to a page where they can edit the movie's title and/or description.


## Screen Shots

### Movie List View:
![Movie List View] (/public/images/listView.png)

### Edit Movie View:
![Edit Movie View] (/public/images/editView.png)

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- SQL database (postgreSQL reccommended)

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `your database name`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. xxx
2. xxx
3. xxx
4. xxx
5. xxx
6. xxx


## Built With

List technologies and frameworks here

## License
[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support
If you have suggestions or issues, please email me at [youremail@whatever.com](www.google.com)
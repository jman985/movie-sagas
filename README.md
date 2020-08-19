# Movies with React-Redux and Sagas

## Description

_Duration: 2-Day Sprint_

This application seeks to offer the user access to a database of popular movies.  Upon clicking a movie, a dropdown tab is shown containing a description of the movie's plot, along with a "Select Movie" button.  Upon clicking this button, the user is taken to a detailed view of the selected movie's title, poster, description, and respective genre(s).  From this page the user has the ability to click "Cancel", which takes them back to list of movies, or "Edit" which takes them to a page where they can edit the movie's title and/or description.


## Screen Shots

### Movie List View:
![Movie List View](/public/images/listView.png)


### Edit Movie View:
![Edit Movie View](/public/images/editView.png)

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- SQL database (postgreSQL recommended)

## Installation

1. Create a database named `your database name`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. At the movie list (home) page, click on a movie to view the description.
2. Click the "SELECT MOVIE" button at the bottom of the description to view the movie details.
3. On the details view, click 'BACK' to go back the home page, or "EDIT" to move to the edit view.
4. On the edit view, type in any desired changes to to the title or description.
5. when satisfied click 'save changes' to be redirected to the updated details view.
6. to exit back to details view without saving changes, click 'cancel'.


## Built With

- React
- Redux
- Redux-Sagas 
- PostgreSQL
- Node
- Express
- React-Router-Dom


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.  Special thanks to the Paxos instructors and the entire Paxos cohort.
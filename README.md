<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![LinkedIn][linkedin-shield]][linkedin-url]

 
<h3 align="center">Google Books</h3>
<p align="center">
This application al
<br />
<br />
<a href=" https://drive.google.com/file/d/1KAnbUqia4wWURy0AiWkc-LvggEZjpoud/view">View Demo</a>
·
<a href="https://github.com/celupanow/googleBooks/issues">Report Bug</a>
·
<a href="https://github.com/celupanow/googleBooks/issues">Request Feature</a>

</p>

</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
	* [Built With](#built-with)
* [Getting Started](#getting-started)
	* [Prerequisites](#prerequisites)
	* [Installation](#installation)
* [Roadmap](#roadmap)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

 
<!-- ABOUT THE PROJECT -->

## About The Project
![Eat-Da-Burger: Sequelized](./public/assets/img/eatdaburgersequelize-still-citadel.png "Eat-Da-Burger: Sequelized")

### Built With
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Handlebars](https://handlebarsjs.com/)
* [Node.js](https://nodejs.org)
* [MySQL](https://www.mysql.com/)
* [Express](https://expressjs.com/)
* [Sequelize](https://sequelize.org/)

<!-- GETTING STARTED -->

## Getting Started
To get a local copy up and running follow these simple steps.


### Prerequisites

You will need to have the lastest version of npm installed.
* npm
```sh
npm install npm@latest -g
```
You will also need MySQL installed. There is a schema file and a seeds file included with the basic sample data you see in the working demo. If you are using MySQL Workbench, you should be able to run this script and create the database.
  
### Installation

1. Clone the repo

```sh

git clone https://github.com/celupanow/googleBooks.git

```
2. Install the NPM packages
```sh
npm install
```
3. Run the MySQL schema and seeds to create the database
4. Run the application using the command line
```sh
node server.js
```
5. Go to localhost:8080 in your browser

<!-- ROADMAP -->

## Roadmap

  

See the [open issues](https://github.com/celupanow/googleBooks/issues) for a list of proposed features (and known issues).

<!-- CONTACT -->

## Contact
Christina Lupanow - christina@christinalupanow.com
<p>
Project Link: [https://still-citadel-06884.herokuapp.com/](https://still-citadel-06884.herokuapp.com/)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements
* [Heroku](https://heroku.com)


<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/celupanow/googleBooks.svg?style=flat-square

[contributors-url]: https://github.com/celupanow/googleBooks/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/celupanow/googleBooks.svg?style=flat-square

[forks-url]: https://github.com/celupanow/googleBooks/network/members

[stars-shield]: https://img.shields.io/github/stars/celupanow/googleBooks.svg?style=flat-square

[stars-url]: https://github.com/celupanow/googleBooks/stargazers

[issues-shield]: https://img.shields.io/github/issues/celupanow/googleBooks.svg?style=flat-square

[issues-url]: https://github.com/celupanow/googleBooks/issues

[license-shield]: https://img.shields.io/github/license/celupanow/googleBooks.svg?style=flat-square

[license-url]: https://github.com/celupanow/googleBooks/blob/master/LICENSE.txt

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555

[linkedin-url]: https://linkedin.com/in/celupanow

[product-screenshot]: images/screenshot.png


# googleBooks
This website uses the Google Books API, which allows a user to search for books and displays the results. The user may then save any of the books to their saved books list. They can then navigate to their saved books to view or delete them.

Working Link
[Deployed on Heroku](https://immense-everglades-05618.herokuapp.com/)

## Objectives

 - Allow user to search the Google Books API.
 - Display the results and allow the user to save books.
 - Display the saved books on another page.
 - Allow the user to delete books from their list.
 
## How It Works
Copy the repo and install the package.json in the client folder and in the root folder. You will need MongoDB and Node.js installed on your machine. Run the server in the root folder and use npm start in the client folder. The main page will display with a search bar and an empty results area. Put in a search term to search the Google Books API. Click the Save button to save any of the books in the list. Go to the Saved page in the Nav Bar and it will display all of the books that have been saved. Click the Delete button to delete any books. 

## Technologies

 - React
 - JSX
 - MongoDB
 - Node.js
 - Express.js
 - Google Books API
 - react-router-dom
 - Axios
 - Mongoose
 - MVC 
<!--stackedit_data:
eyJoaXN0b3J5IjpbNTMyNzcyMDcwLDEwNTUwNzIyMDRdfQ==
-->
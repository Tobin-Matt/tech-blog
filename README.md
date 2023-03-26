
# The TeK Blog

## Description

The application is a CMS style blog site. It allows developers to publish their blog posts and comment on other developers' posts. This application follows the MVC paradigm with its structure.

## Installation

To install the application follow the steps below:

* Clone the repository into your desired directory on your local machine.
* Install the npm packages by running the "npm install" command in the directory terminal.

## Technologies

This application uses Handlebars.js for the templating language. Sequelize for the Object Relational Mapping, and `express-session` npm package to handle the authentication of a users profile. To handle the authorization of our database so that it is not stored in the repo we used `dotenv` package. To hash the passwords the `bcrypt` package was used. 

## Features
At this time the features that have been built are:

* A user can view existing blog posts that others have written without being logged in.
* If a user tries to open a blog post the user is directed to log in.
* A user can sign up and when singed up they are directed to the home page.
* A user can log out and then log in with their sign up credentials.

## URLs

Below is the URL to the deployed heroku app:
https://pacific-wildwood-21091.herokuapp.com/
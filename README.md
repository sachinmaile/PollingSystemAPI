### Polling System API

A polling system API is an application programming interface that allows developers to create, manage, and retrieve data from a polling system. A polling system is a platform that enables users to create polls, surveys, and quizzes and gather responses from participants.

### Problem Statement : 
 - Let’s make a polling system, only API based.
 
#### Technology Used:
 - Node Js
 - Java Script
 - MongoDB


### How to setup the project on local system

  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory.

After reaching the project directory you have to run the following the command.
   ```` 
        npm install 
        npm start || nodemon index.js
   ````
### Basic initialization flow followed for any NodeJS Project

  1. "npm init" to get the package.json
  2. "npm i express" to get the node modules
  3. "npm i ejs" for using template engine
  4. "app.use(express.urlencoded())" is used to get the string conversion from req params
  5. "npm i -g nodemon" for using nodemon which is helpful is running the server again after immediate changes
  6. "npm i mongoose" to setup the mongoDB database
  7. Inorder to ignore the node modules from saving to github we need to create ".gitignore" file and add the text "node_modules/"
  8. "npm i dotenv" is used to store environmental variables. For this create .env file and while restoring variables use "require('dotenv').config()"


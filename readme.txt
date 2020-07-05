Express application generator
Use the application generator tool, express-generator, to quickly create an application skeleton.

Template engine: Pug, Ejs...

$ npx express-generator

or 

The main view engine has been updated from "jade" to "pug"
but node have problems with that, so upgrade to pug this way:
cd

$ npm install -g express-generator
$ express
$ npm audit fix

Then install dependencies:

$ cd myapp
$ npm install

Run app

Set pug
$ npm install pug
$ express myapp --view=pug

Set EJS

$ npm install ejs
$ express myapp --view=ejs

$ DEBUG=myapp:* npm start or npm start

//Theme to study
HTTP request method (GET, POST, and so on).

View engine
https://expressjs.com/en/guide/using-template-engines.html

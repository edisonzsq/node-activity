# Activity Preparation #
## Installation ##
Install Node Version Manager <br>
Linux: https://github.com/nvm-sh/nvm <br>
Windows: https://github.com/coreybutler/nvm-windows

<br>
Through NVM, install Node version v14.15.4 using these commands:<br>

```shell
nvm install v14.15.4
nvm use v14.15.4 
```
<br><br>
## Activity Objectives ##

Stage 1: Run a simple node.js application.<br>
Stage 2: Import [Express.js](https://www.npmjs.com/package/express) package using NPM and inspect package.json file.<br>
Stage 3: Implement HTTP endpoints with [Express.js](https://www.npmjs.com/package/express)<br>
Stage 4: Use express.Router to categorize HTTP Endpoints<br>
Stage 5: Deploy it with [PM2](https://www.npmjs.com/package/pm2)
<br><br><i>Each stages are created as a branch. Try not to look at it and achieve the activity objectives on your own.</i>

<br><br>
## HTTP Endpoints ##

The following endpoints will not be having any implementation. It will return a string describing what it should be doing.

|Method | Endpoint              | Returns                |
| :----:|:---------------------|-----------------------:|
| GET   | /garage/car/:id       | retrieved cars in garage|
| POST  | /garage/car           | created a car in garage|
| GET   | /house/member/:id     | retrieved a member of the house|
| POST  | /house/member         | added a member to the house|

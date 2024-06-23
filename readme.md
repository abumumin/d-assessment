# Assessment
****************************************************************

This repo contains e2e tests for a portion on Saucedemo website written in Cypress with Typescript

# Test Setup

Installations You need to have Node.js installed before using Cypress. Typescript, and Cucumber dependenies must be installed as well

Run Tests The test can be run in GUI mode Run npx cypress open --e2e to launch Cypress and select desired browser

# Tools, Framework and Liberaries Used
****************************************************************
# Framework: Cypress

Any IDE that support JAVASCRIPT can be used, VS code is light weight and easy to use. Thus it is recommeneded.

Framework Version: 9.7.0 Supporting Language: Javascript

# Supporting Libraries:

Node.js (12 or Higher)
Cypress Fill Command [https://www.npmjs.com/package/cypress-fill-command#installation]
cypress-cucumber-preprocessor [https://www.npmjs.com/package/cypress-cucumber-preprocessor#installation]
# Local Setup
After cloning this repo to the local machine, open a terminal inside the project then execute to install from the <package.json file>.


# Supported Browsers
The following are the supported browsers as of this version; 10.0.0
****************************************************************

* Chrome
* Edge
* Electron (default)
* Firefox

# Getting Started
Clone the code from thr repository address with 'git clone https://github.com/abumumin/RedAcre.git' Navigate into the repository after successfully cloning it and and launch the IDE. Run 'npm i' or 'npm install' to install all the dependencies. you can equally run 'npm ci' if you want to run a clean install from the package-lock.json instead. The easier option is 'npm install'. Open terminal and run the code with 'npm run headless-chrome' to run the script.

# Script Focus: What Does The Script Do?
The following activities were carried out on the Script
****************************************************************

* Launch web url
* Login
* View inventory
* Filter inventory page
* Add product to cart
* View cart
* Remove Item from cart
* Checkout
* Logout

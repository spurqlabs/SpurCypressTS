This Repo is implementation of typescript with Cypress and Cucumber BDD

Installation Cypress
npm install cypress --save-dev

Install Type Script
npm i typescript

Create Type Script json File
npx tsc --init
Copy paste Following Code
{
"compilerOptions": {
"target": "es5",
"lib": ["es5", "dom"],
"types": ["cypress","node"]
},
"include": ["**/*.ts"]
}

Install Cucumber perprocessor
npm install --save-dev cypress-cucumber-preprocessor

Copy paste Following code in plugin/index.js
const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
module.exports = (on) => {
const options = browserify.defaultOptions;
//options.browserifyOptions.plugin.unshift(['tsify']);
// Or, if you need a custom tsconfig.json for your test files:
options.browserifyOptions.plugin.unshift(['tsify', {project: '../../tsconfig.json'}]);
on("file:preprocessor", cucumber(options));
};

install tsify
npm install tsify

Copy paste Follwing Code in Cypress.json
{
"ignoreTestFiles": ["*.js","*.md","*.ts"],
"testFiles":"**/*.feature"
}

Create a Featutre File under insrgration folder

Create a Step defination folder under feature
import following

import {Given, When,Then} from 

'cypress-cucumber-preprocessor/steps';

Write the Steps For Feature file

Create a page object folder in cypress

write the Object code in their

write the import statement in step definition

import { CalPage } from '../../../page-objects/CalPage';
const calPage = new CalPage();

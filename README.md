# **Cypress TypeScript BDD Test Automation**

### **Description**

This repository contains a test automation framework built with Cypress, TypeScript, and Cucumber. The framework allows you to write and execute automated tests using the Behavior-Driven Development (BDD) approach. It provides a structured and scalable framework for writing end-to-end tests along with API automation. 

### **Features**

#### 1) UI Automated Test Cases: 
The test suite includes a comprehensive set of UI automated test cases that simulate user interactions with the application's user interface. These tests cover various scenarios and workflows to validate the correctness of the UI components, navigation, forms, and user flows.

#### 2) API Endpoint Automated Tests: 
In addition to UI tests, the test suite also includes automated tests for API endpoints. These tests verify the correctness of the API responses, data integrity, and ensure that the API endpoints adhere to the defined specifications. They are crucial for testing the backend functionality independently of the UI.

#### 3) Cucumber and Gherkin Syntax: 
The test scenarios are written in Gherkin syntax using Cucumber, which allows for easy collaboration between technical and non-technical team members. The use of descriptive language and structured scenarios enhances the readability and maintainability of the test suite.

#### 4) TypeScript and Cypress: 
The test suite is developed using TypeScript, a statically-typed superset of JavaScript, which provides type safety and improved code organization. Cypress, a powerful end-to-end testing framework, is used for executing the automated tests. Cypress offers a simple and intuitive API for interacting with the application, making test creation and maintenance efficient.

## **Table of Contents**
- [Pre-Requitesites](#Pre-Requitesites)
- [Technology](#Technology_used_in_Framework)
- [Installation](#Installation)
- [Execution](#Execution)
- [Report-Generation](#Report_Generation )
- [GitHub CI/CD Workflow](#Github_Workflow_File )
- [Framework Structure](#Framework_Structure)
- [Reports](#Generated_Reports)

## Pre-Requisite
### *Required tools for the project*

- TypeScript
- TS node
- Cypess
- Cucumber perprocessor
- Cucumber
- Github_Workflow_File
- tsify
- allure command line
- allure combine

## Technology_used_in_Framework
#### WEB AUTOMATION:
- `TypeScript`
- `Cypress`
- `Cucumber`

#### API AUTOMATION:
- `TypeScript`
- `Cypress`
- `Cucumber`

#### REPORTING TOOL :
- `allure`
- `allure combine`

#### FRAMEWORK DESIGN PATTERN :
- `Behavior Driven Development (BDD)`

#### OS for Execution on Local:
- `Windows`

#### OS for Execution on CI/CD:
- `Windows`

**Note:** 
##### Please make sure you have all technologies in your local machine installed or configured.

- Create Type Script json File npx tsc --init Copy paste Following Code 
`{ "compilerOptions": { "target": "es5", "lib": ["es5", "dom"], "types": ["cypress","node"] }, "include": ["**/*.ts"] }`
- Copy paste Following code in plugin/index.js 
`const cucumber = require("cypress-cucumber-preprocessor").default; const browserify = require("@cypress/browserify-preprocessor"); module.exports = (on) => { const options = browserify.defaultOptions; //options.browserifyOptions.plugin.unshift(['tsify']); // Or, if you need a custom tsconfig.json for your test files: options.browserifyOptions.plugin.unshift(['tsify', {project: '../../tsconfig.json'}]); on("file:preprocessor", cucumber(options)); };`
- Copy paste Follwing Code in Cypress.json 
`{ "ignoreTestFiles": [".js",".md",".ts"], "testFiles":"**/.feature" }`

## Installation
### To Clone this repository to a local directory
Commands to clone and run the test cases
- #### git clone: 
`https://github.com/spurqlabs/SpurCypressTS.git`

This command clone this repository to your local VS code.
- #### Install the dependencies mentioned in prerequisite

 - Ts-Node:
        `npm i typescript`
 - Cypress:
        `npm install cypress --save-dev`
 - Cucumber: 
        `npm i @cucumber/cucumber -D `
 - Allure Command Line:
        `npm i allure-commandline`
 - Cucumber perprocessor:
        `npm install --save-dev cypress-cucumber-preprocessor`
 - Tsify:
        `npm install tsify`
 - Allure Combine:
        `npm i allure-combined`

## Execution

#### To run all the feature file
        npx cypress run

#### To run web test cases
        npx cypress run -e TAGS=@smoke

#### To run API test cases 
        npx cypress run -e TAGS=@api

#### To run test cases to generate the allure report
        cypress run --env allure=true

#### To run test cases of particular tag to generate the allure report
        cypress run --env allure=true,TAGS=@smoke1
## Report_Generation 

#### To generate Allure HTML report folder from Allure JSON report folder
        allure generate allure-results --clean -o allure-report

#### 10)To generate sharable Allure HTML report
        allure-combine allure-report --dest Final_Report --auto-create-folders

## Github_Workflow_File 
This repository includes a CI/CD workflow using GitHub Actions to automatically run tests for the Cypress TypeScript Cucumber Test Framework on every push to the main branch.

### *Workflow Details*
The CI/CD workflow is defined in the .github/workflows/CypressTest.yml file and includes the following steps:

#### *Install Node.js* 
This step installs Node.js on the runner machine to provide the necessary environment for running the tests.

#### *Install Dependencies* 
This step installs the dependencies specified in the package.json file of the project using the npm install command.

#### *Run Tests*
This step executes the test scripts defined in the package.json file using the npx cypress run command. The tests are run using Cypress, and the test results are displayed in the GitHub Actions workflow logs.

#### **Usage**
#### To use the CI/CD workflow in your own project, follow these steps:

- Create a .github/workflows directory in the root of the GitHub repository, if it doesn't already exist.

- Copy the contents of the CypressTest.yml file from this repository into a new file with the same name (CypressTest.yml) in the .github/workflows directory of the repository.

- Commit and push the changes to the repository.

- The CI/CD workflow will now be automatically triggered to run on every push to the main branch of the repository.

## Framework_Structure

![image](https://github.com/spurqlabs/SpurCypressTS/assets/110516709/e96a6edb-aa07-4532-b214-03c1a4203f6a)

![image](https://github.com/spurqlabs/SpurCypressTS/assets/110516709/684f4f8c-a733-4b20-b7f6-6c5ec1ac7645)

 

## Generated_Reports

#### Allure Report

![image](https://github.com/spurqlabs/SpurCypressTS/assets/110516709/dd8abd95-5c3d-4ead-a3ad-6918789f1931)


![image](https://github.com/spurqlabs/SpurCypressTS/assets/110516709/039567d9-54c2-449a-ba43-6254b96811d5)


#### CI/CD Execution Report:

![image](https://github.com/spurqlabs/SpurCypressTS/assets/110516709/84caa50c-ad86-408f-858b-d13ceb634814)

![image](https://github.com/spurqlabs/SpurCypressTS/assets/110516709/18b186c6-6b45-4986-a891-bbdf9395c96a)

![image](https://github.com/spurqlabs/SpurCypressTS/assets/110516709/ab621371-40d5-4344-9fa5-55fddc3da3bb)

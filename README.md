# BikeShop

## Installation

To install project for the first time run command: `npm install`

## Configuration

- Copy `cypress.env.json.example` to `cypress.env.json`:
  ```shell
  cp cypress.env.json.example cypress.env.json
  ```
  If the file already exists open both files and make sure
  that `cypress.env.json` contains all variables from example file.
  
- Review and edit all variables in `cypress.env.json` file using your login credentials
  
## Run project

- To run tests from console use `npm run cy:run` 
- To run tests from app use `npm run cy:open`
- To reformat code use `npm run prettier`

# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.


### Setting up the repo

- npm install -g @angular-devkit/schematics-cli@17.0.0
- npm install -g @angular/cli@17.0.0 

- Take a clone of this repo and run `npm install`
- To build this schematics `npm run build`
- To check if schematics running `schematics .:hello-world` this command will print hello world
- similarly you can run your other schematics


### Add new schematics
- Add new schematics
`schematics blank --name=NAME_OF_SCHEMATICS --collection=./collection.json`
- Add code in `index.ts` and `npm run build`
- To run the schematic locally `schematics .:NAME_OF_SCHEMATICS`

### Link with the
- Copy path of your local schematic repo
- Open your angular project locally amd go to project location in CMD
- use `npm link ./LOCATION_OF_YOUR_SCHEMATIC_PROJECT`
- this command link the project and you can verify in `node_modules`

### RUN schematics in angular project
- Run without any parameter `ng g NAME_OF_SCHEMATICS_PROJECT:NAME_OF_SCHEMATICS`
- Run with parameters `ng g NAME_OF_SCHEMATICS_PROJECT:NAME_OF_SCHEMATICS --PARAM_NAME=VALUE`


### NOTE: always remember to run build after any code change in code 



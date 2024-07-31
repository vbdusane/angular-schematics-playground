# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.


### Setting up the repo

take a pull of this repo and run `npm install` command
To build this schematics `npm run build` command
To check if schematics running `schematics .:hello-world` this command will print hello world

### Add new schematics

`schematics blank --name=NAME_OF_SCHEMATICS --collection=./collection.json`

NOTE: always remember to run build after any code change in code 


### Publishing

To publish, simply do:

```bash
npm run build
```

That's it!


## Schematic to auto sync the CX-CROSS recommended dependencies 

- use `/recommended-version.json` file to update the latest dependencies
- add require dependencies in this file which we want to update as part of CX-CROSS
- e.g. 
```
    {
        "dependencies": {
            "luxon": "^1.26.0"
        },
        "devDependencies": {
            "@types/jasmine": "~5.8.0"
        }
    }
```
- link this schematics using `npm link PATH_OF_THIS_PROJECT`
- run `ng g nice-schematics:sync-platform-libs` command
- all dependencies mentioned in `/recommended-version.json` file will updated and install in project


### Benefit of this schematics
- Platform team does not need track the recommended project dependencies
- all angular UI project will be on same page for dependencies
- reduce developers effort for manual changes
- less possibility of error due to missing dependency because all dependency will be track by platform team using this schematic
- central source of control
- Reduce the process overhead and introduce central process for version control



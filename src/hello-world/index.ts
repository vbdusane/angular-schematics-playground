import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function helloWorld(_options: any): Rule {
  console.log("Hello World Schematic");
  return (tree: Tree, _context: SchematicContext) => {
    return tree;
  };
}

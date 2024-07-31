import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function updatePackage(_options: any): Rule {
  console.log("Update Package Schematic");

  return (tree: Tree, _context: SchematicContext) => {

    const packageStr = tree.get('/package.json')?.content.toString('utf-8');

    if (!packageStr) {
      return tree;
    }

    const dependencies = JSON.parse(packageStr)['dependencies'];
    dependencies['luxon'] = '3.4.4';

    tree.overwrite('/package.json', JSON.stringify({ ...JSON.parse(packageStr), dependencies }, null, 2));

    return tree;
  };
}

import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

console.log("Update Package Schematic");


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function updatePackage(_options: any): Rule {

  return (tree: Tree, _context: SchematicContext) => {

    const packageStr = tree.get('/package.json')?.content.toString('utf-8');

    if (!packageStr) {
      return tree;
    }

    const dependencies = JSON.parse(packageStr)['dependencies'];

    if (!_options?.dependencies) {
      return tree;
    }

    // check for each key in _options
    const dependenciesArray =_options.dependencies.trim().split(',').map((m: string)=>m.split(':'));

    for (const key in dependenciesArray) {
      dependencies[dependenciesArray[key][0]] = dependenciesArray[key][1];
    }

    _context.logger.info('packages updated')

    tree.overwrite('/package.json', JSON.stringify({ ...JSON.parse(packageStr), dependencies }, null, 2));

    _context.addTask(new NodePackageInstallTask());

    _context.logger.info('packages installed')

    return tree;
  };
}

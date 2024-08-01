import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

export function syncPlatformLibs(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    // read the recommended-version.json file
    const path = "./node_modules/nice-schematics/src/sync-platform-libs/recommended-version.json";
    // const path = "/src/sync-platform-libs/recommended-version.json" // for local testing

    const recommendedVersions = tree.read(path)?.toString('utf-8');
    if (!recommendedVersions) {
      _context.logger.error('recommended-versions.json file not found');
      return tree;
    }

    const versions = JSON.parse(recommendedVersions);

    // read the package.json file
    const packageJson = tree.read('package.json')?.toString('utf-8');
    if (!packageJson) {
      _context.logger.error('package.json file not found');
      return tree;
    }
    const packageData = JSON.parse(packageJson);

    let ngVersion = packageData.dependencies['@angular/common'].replace(/^[~^]/, '').trim().split('.')[0];
    ngVersion = Number(ngVersion);
    let reqVersion: any = {};

    if (ngVersion >= 14 && ngVersion < 17) {
      reqVersion.dependencies = versions.upgrade.ng14;
    } else if (ngVersion == 17) {
      reqVersion.dependencies = versions.upgrade.ng17;
    } else {
      _context.logger.error('Angular version not supported');
      return tree;
    }

    packageData.dependencies = {
      ...packageData.dependencies,
      ...reqVersion.dependencies
    };

    // Convert the updated package.json object back to a string
    const updatedPackageJson = JSON.stringify(packageData, null, 2);

    // Write the updated package.json back to the tree
    tree.overwrite('package.json', updatedPackageJson);

    // perform npm install
    _context.addTask(new NodePackageInstallTask());

    return tree;
  };
}

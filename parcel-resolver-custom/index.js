const { Resolver } = require('@parcel/plugin');
const fs = require('fs');
const path = require('path');

module.exports = new Resolver({
  async resolve({ specifier }) {
    if (specifier.startsWith('custom/module')) {
      const contentFilePath = path.join(__dirname, '../content.txt')
      const data = fs.readFileSync(contentFilePath);

      const resolved = {
        filePath: path.join(__dirname, '/custom.js'),
        code: `export const data = "${data}";`,
        invalidateOnFileChange: [
          contentFilePath
        ]
      };
      console.log('resolved', resolved);
      return resolved;
    }

    // Let the next resolver in the pipeline handle this dependency.
    return null;
  }
});

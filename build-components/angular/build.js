const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const files =[
    './dist/angular/runtime-es2015.js',
    './dist/angular/polyfills-es2015.js',
    './dist/angular/main-es2015.js'
  ]

  await fs.ensureDir('elements')

  await concat(files, 'elements/user-card-angular.js')
  console.info('Elements created successfully!')

})()

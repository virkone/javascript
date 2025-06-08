const assert = require('assert');
const fs = require('fs');
const path = require('path');

const moduleName = '@virkone/eslint-config-base';
const packageRoot = path.join(__dirname, '..');
const link = path.join(packageRoot, 'node_modules', '@virkone', 'eslint-config-base');

// ensure the module can be required by name
if (!fs.existsSync(link)) {
  fs.mkdirSync(path.dirname(link), { recursive: true });
  try {
    fs.symlinkSync(packageRoot, link, 'dir');
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

let config;
try {
  config = require(moduleName);
} catch (err) {
  console.error(`Failed to require ${moduleName}`);
  throw err;
}

assert.ok(config, 'config should load');
assert.ok(Array.isArray(config.extends), '`extends` should be an array');

for (const file of config.extends) {
  assert.ok(fs.existsSync(file), `extended config not found: ${file}`);
}

console.log('eslint config loads without errors and all extended files exist');

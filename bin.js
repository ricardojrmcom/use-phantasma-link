#!/usr/bin/env node
const { exec } = require('child_process');

exec(
  'npx degit https://github.com/ricardojrmcom/supernova.git --force',
  (err, stdout, stderr) => {
    if (err) {
      return;
    }

    console.log(`stdout: ${stdout}`); // eslint-disable-line no-console
    console.log(`stderr: ${stderr}`); // eslint-disable-line no-console
  },
);

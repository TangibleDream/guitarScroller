const execSync = require('child_process').execSync;

test('README.md is not a stub', () => {
    let count = /\d+/;
    console.log(count.exec(execSync('wc -l README.md')));
    expect(count.exec(execSync('wc -l README.md')) > 20).toBe(true);
  });
const execSync = require('child_process').execSync;
const exists = (el) => {
  let result = false;
  if (document.getElementById(el) != null) result = true;
  return result;
}

test('README.md is not a stub', () => {
    let count = /\d+/;
    expect(count.exec(execSync('wc -l README.md')) > 20).toBe(true);
});

test('There is a frontpage', () => {
  let count = /\d+/;
    expect(count.exec(execSync('wc -l index.html')) > 0).toBe(true);
});


const file = Bun.file('.env');
const content = await file.text();
console.log(content);

Bun.write('.env.test', content)

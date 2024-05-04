const file = Bun.file('.env');
const content = await file.text();
console.log(content);

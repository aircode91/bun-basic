# Bun Basic

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.js
```

This project was created using `bun init` in bun v1.1.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# Bun Support Type File

- Javascript
- TypeScript
- JSX
- TSX

# Default support for env file
for example :
- env.ts => refered read to file .env
- NODE_ENV to change mode development code use script export NODE_EV[production, development] [.env.production, .env.development]
- note : NODE_ENV if file not found, its return back to default is .env

# Watch mode
```bash
bun --watch run index.ts
```

# Bun Package Manager
- Bun by default include package manager
- For log installing package in bun.lockb, this file its binnary file so you dont't those file
- Install packaage 
```bash
bun install {package-name}
```
- Remove package 
```bash
bun remove {package-name}
```

# Cache
- Each time install package bun will be saved to $USER/.bun/install/cache, so while you have other project and install same package name and version, bun will not take it from the internet but will take it from local which has previously been stored in the local cache

# Test Runner
- bun has jest for running test code
- All test scenario
```bash
bun test
```
- Specific file test 
```bash
bun test {test-name}
```
- watching test
```bash
bun test --watch
```

# Package Runner
- In npm will be use npx, bun you can use bunx
- For example:
```bash
bunx prisma migrate
bunx tsx --version
```

# Workspace
- This is new feature, first time you must be add in package.json
- For example: 
```bash
workspaces: [
    packages/*
]
```
![alt text](https://github.com/aircode91/bun-basic/blob/master/screenshots/packages.png??raw=true)

# Bun standart library

# Http server
- bun serve

![alt text](https://github.com/aircode91/bun-basic/blob/master/screenshots/http-server.png??raw=true)

![alt text](https://github.com/aircode91/bun-basic/blob/master/screenshots/http-server-response.png??raw=true)

# File IO
- reading file bun.file()
```bash
const file = Bun.file('.env');
const content = await file.text();
console.log(content);
Bun.write('.env.test', content)
```


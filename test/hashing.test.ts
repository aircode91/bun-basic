const passwordHash = await Bun.password.hash('password', {
    algorithm: 'bcrypt',
    cost: 10
});

console.info(passwordHash);

const result = await Bun.password.verify('password', passwordHash);
console.info(result);
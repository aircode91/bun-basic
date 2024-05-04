Bun.serve({
    port: 3000,
    fetch(request, server) {
        return new Response("Hello, World!");
    }
})
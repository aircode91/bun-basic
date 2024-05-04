import { describe, it, expect } from 'bun:test';


describe('bun test fetch', () => {
    it('should support fetch', async() => {
        const response = await fetch('https://example.com');
        expect(response.status).toBe(200);
    });
})
import { describe, it, expect } from 'bun:test';
import { hello } from '../src/hello';

describe('bun test hello', () => {
    it('should support unit test', async() => {
        const response = hello("Agus Firman");
        expect(response).toBe("Hello Agus Firman");
    });
    it('should support unit test with izzhar', async() => {
        const response = hello("izzhar");
        expect(response).toBe("Hello izzhar");
    });
});
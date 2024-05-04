import { describe, it, expect } from 'bun:test';
import * as os from 'node:os';


describe('bun test os', () => {
    it('should support os', async() => {
        const arc = os.arch();
        expect(arc).toBe("x64");

        const type = os.type();
        expect(type).toBe("Darwin");
    });
})
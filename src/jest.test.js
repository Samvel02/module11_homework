import { jestWork } from "../../src/jestWork.js";

describe("test jestWork", () => {
    it('the expression 300 / 100 * 25 is equal to 75', () => {
        const result = jestWork(25, 300)
        expect(result).toBe(75);
    }),
    it('the expression 550 / 100 * 78 is equal to 429', () => {
        const result = jestWork(78, 550)
        expect(result).toBe(429);
    }),
    it('the expression 780 / 100 * 60 is equal to 468', () => {
        const result = jestWork(60, 780)
        expect(result).toBe(468);
    })
})
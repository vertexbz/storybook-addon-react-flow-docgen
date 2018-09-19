import { simpleFinder } from '../finder';

describe('finder', () => {
    it('simpleFinder finds root components docgenInfo', () => {
        const docgenInfo = { displayName: Math.random().toString(16) };

        expect(simpleFinder({ type: { __docgenInfo: docgenInfo } })).toEqual([docgenInfo]);
    });
});

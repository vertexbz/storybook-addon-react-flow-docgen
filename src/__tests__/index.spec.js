import docs from '../index';

jest.mock('@storybook/addons');
import addonsMock from '@storybook/addons';
import { event } from '../constants';

describe('index', () => {
    it('exposes proper interface', () => {
        expect(docs).toEqual(expect.any(Function));
        expect(docs()).toEqual(expect.any(Function));
    });

    it('emits event with found docgenInfo and renders story', () => {
        global.STORYBOOK_REACT_CLASSES = {};

        const dummyDocgenInfo = [];

        const dummyFinder = jest.fn().mockReturnValue(dummyDocgenInfo);

        const dummyStory = {};

        const dummyStoryFn = jest.fn().mockReturnValue(dummyStory);

        const dummyContext = {};

        expect(docs(dummyFinder)(dummyStoryFn, dummyContext)).toBe(dummyStory);

        expect(dummyFinder).toBeCalledWith(dummyStory, global.STORYBOOK_REACT_CLASSES);

        expect(dummyStoryFn).toBeCalledWith(dummyContext);

        expect(addonsMock.__channel.emit).toBeCalledWith(event.LoadDocData, dummyDocgenInfo);
    });
});

import * as React from 'react';
import { mount } from 'enzyme';
import docs from '../index';
import DocsProvider from '../component/DocsProvider';

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

        const dummyStory = <div id="test-subject" />;

        const dummyStoryFn = jest.fn().mockReturnValue(dummyStory);

        const dummyContext = {};

        const wrapper = mount(docs(dummyFinder)(dummyStoryFn, dummyContext));

        expect(wrapper.find(DocsProvider).exists()).toBeTruthy();
        expect(wrapper.find('#test-subject').exists()).toBeTruthy();

        expect(dummyFinder).toBeCalledWith(dummyStory, global.STORYBOOK_REACT_CLASSES);

        expect(dummyStoryFn).toBeCalledWith(dummyContext);

        expect(addonsMock.__channel.emit).toBeCalledWith(event.LoadDocData, dummyDocgenInfo);
    });
});

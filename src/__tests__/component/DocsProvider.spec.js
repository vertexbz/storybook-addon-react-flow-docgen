import * as React from 'react';
import { mount } from 'enzyme';
import DocsProvider from '../../component/DocsProvider';
import { event } from '../../constants';

jest.mock('@storybook/addons');
const addonsMock = require('@storybook/addons').default;

describe('DocsProvider', () => {
    it('should work properly', () => {
        const docs = [
            {
                fakeDocsOne: 'docs 1'
            },
            {
                fakeDocsTwo: 'docs 2'
            }
        ];

        const TestStory = () => <div />;

        const wrapper = mount(
            <DocsProvider docs={docs}>
                <TestStory />
            </DocsProvider>
        );


        expect(addonsMock.__channel.emit).toBeCalledTimes(1);
        expect(addonsMock.__channel.emit).toBeCalledWith(event.LoadDocData, docs);
        addonsMock.__channel.emit.mockClear();

        expect(wrapper.render()).toMatchSnapshot();

        wrapper.unmount();
        expect(addonsMock.__channel.emit).toBeCalledTimes(1);
        expect(addonsMock.__channel.emit).toBeCalledWith(event.LoadDocData, []);
    });
});

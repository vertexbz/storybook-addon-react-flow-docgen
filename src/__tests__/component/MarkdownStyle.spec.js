import * as React from 'react';
import { mount } from 'enzyme';
import MarkdownStyle from '../../component/MarkdownStyle';

describe('LiveSource', () => {
    it('should render properly', () => {
        const wrapper = mount(<MarkdownStyle />);

        const style = wrapper.children().first();

        expect(style.type()).toBe('style');

        expect(style.text()).toBeTruthy();
    });
});

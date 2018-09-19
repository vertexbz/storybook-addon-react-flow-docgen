import * as React from 'react';
import { mount } from 'enzyme';
import EventEmitter from 'events';
import DocPanel from '../../component/DocPanel';
import { event } from '../../constants';

describe('DocPanel', () => {
    it('should display docs properly', () => {
        const channelSpies = {
            emit: jest.spyOn(EventEmitter.prototype, 'emit'),
            on: jest.spyOn(EventEmitter.prototype, 'on'),
            removeListener: jest.spyOn(EventEmitter.prototype, 'removeListener')
        };

        const channel = new EventEmitter();

        const wrapper = mount(<DocPanel api={null} channel={channel} />);

        expect(wrapper.children()).toHaveLength(0);

        expect(channelSpies.on).toBeCalledTimes(1);
        expect(channelSpies.on).toBeCalledWith(event.LoadDocData, expect.any(Function));


        const docgenInfo = { displayName: Math.random().toString(16) };

        channel.emit(event.LoadDocData, [docgenInfo]);
        channelSpies.emit.mockClear();
        wrapper.update();


        expect(wrapper.find('div style').exists()).toBeTruthy();
        expect(wrapper.find('div div').exists()).toBeTruthy();


        expect(wrapper.find('div div').text()).toContain(docgenInfo.displayName);


        wrapper.unmount();
        expect(channelSpies.removeListener).toBeCalledTimes(1);
        expect(channelSpies.removeListener).toBeCalledWith(event.LoadDocData, expect.any(Function));
    });
});

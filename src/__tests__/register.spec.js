import { mount } from 'enzyme';
import DocPanel from '../component/DocPanel';

jest.mock('@storybook/addons');
import addonsMock from '@storybook/addons';

describe('register', () => {
    it('registers live edit plugin and panel', () => {
        require('../register');
        expect(addonsMock.register).toBeCalledTimes(1);
        expect(addonsMock.addPanel).not.toBeCalled();

        expect(addonsMock.register).toBeCalledWith(expect.any(String), expect.any(Function));

        const registerCallback = addonsMock.register.mock.calls[0][1];

        registerCallback();
        expect(addonsMock.addPanel).toBeCalledTimes(1);
        expect(addonsMock.addPanel).toBeCalledWith(expect.any(String), expect.any(Object));

        const addPanelPayload = addonsMock.addPanel.mock.calls[0][1];

        expect(addPanelPayload.title).toBe('Docs');
        expect(typeof addPanelPayload.render).toBe('function');

        const renderedPanel = mount(addPanelPayload.render());

        expect(addonsMock.getChannel).toBeCalled();
        expect(renderedPanel.type()).toBe(DocPanel);
    });
});

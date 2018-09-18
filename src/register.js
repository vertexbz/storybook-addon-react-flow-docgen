// @flow
import * as React from 'react';
import addons from '@storybook/addons';
import DocPanel from './component/DocPanel';
import { id } from './constants';

addons.register(id.Plugin, (): * => {
    addons.addPanel(id.Panel, {
        title: 'Docs',
        // eslint-disable-next-line
        render() {
            return <DocPanel channel={addons.getChannel()} />;
        }
    });
});

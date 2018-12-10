// @flow
import * as React from 'react';
import addons from '@storybook/addons';
import DocPanel from './component/DocPanel';
import { id } from './constants';

type RenderProps = {
    active?: boolean
};

addons.register(id.Plugin, (): * => {
    addons.addPanel(id.Panel, {
        title: 'Docs',
        render({ active }: RenderProps = { active: true }): ?React.Element<typeof DocPanel> {
            return active ? <DocPanel channel={addons.getChannel()} /> : null;
        }
    });
});

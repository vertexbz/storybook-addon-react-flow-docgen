import * as React from 'react';
import { storiesOf } from '@storybook/react';
import docs from '../dist';
import DemoFlow from './DemoFlow';
import DemoPropTypes from './DemoPropTypes';

storiesOf('Example', module)
    .add('No docs demo', () => <DemoFlow />)
    .addDecorator(docs())
    // eslint-disable-next-line
    .add('DemoFlow', () => <DemoFlow />)
    .add('DemoPropTypes', () => <DemoPropTypes />);

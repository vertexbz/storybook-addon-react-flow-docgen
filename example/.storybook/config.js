global.STORYBOOK_REACT_CLASSES = {};

import {configure} from '@storybook/react';

configure(() => require('../index.js'), module);

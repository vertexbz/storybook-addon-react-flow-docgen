// @flow
import * as React from 'react';
import DocsProvider from './component/DocsProvider';
import { simpleFinder } from './finder';
import type { ComponentInfoFinderSig, ElementWithDocgenInfo } from './types';

type StoryFnSig = (any) => ElementWithDocgenInfo;

export default (componentFinder: ComponentInfoFinderSig = simpleFinder): * => {
    // eslint-disable-next-line react/display-name
    return (storyFn: StoryFnSig, context: any): * => {
        const story = storyFn(context);
        return <DocsProvider docs={componentFinder(story, global.STORYBOOK_REACT_CLASSES || {})}>{story}</DocsProvider>;
    };
};

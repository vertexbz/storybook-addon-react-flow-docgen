// @flow
import addons from '@storybook/addons';
import { event } from './constants';
import { simpleFinder } from './finder';
import type { ComponentInfoFinderSig, ElementWithDocgenInfo } from './types';

type StoryFnSig = (any) => ElementWithDocgenInfo;

export default (componentFinder: ComponentInfoFinderSig = simpleFinder): * => (storyFn: StoryFnSig, context: any): * => {
    const story = storyFn(context);
    addons.getChannel().emit(event.LoadDocData, componentFinder(story, global.STORYBOOK_REACT_CLASSES || {}));
    return story;
};

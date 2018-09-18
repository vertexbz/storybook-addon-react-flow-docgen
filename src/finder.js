// @flow
import type { ComponentInfoFinderSig } from './types';

export const simpleFinder: ComponentInfoFinderSig = (story: *): * => {
    return [story.type.__docgenInfo];
};

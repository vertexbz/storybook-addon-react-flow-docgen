// @flow
import * as React from 'react';

export type DefaultValueType = {
    value: mixed,
    computed: boolean
};

export type FlowDocgenPropType = {
    name: string,
    raw?: string
};

export type NativeDocgenPropType = {
    name?: string,
    value?: Array<{ name?: string, value: mixed }>
};

export type DocgenPropType = {
    description?: string,
    required: boolean,
    defaultValue?: DefaultValueType,
    flowType?: FlowDocgenPropType,
    type?: NativeDocgenPropType
};

export type DocgenPropsType = {
    +[string]: DocgenPropType
};

export type DocgenInfoType = {
    displayName?: string,
    description?: string,
    props?: DocgenPropsType
};

type DocgenDescriptionType = {
    docgenInfo: DocgenInfoType,
    path: string
};

export type ElementWithDocgenInfo = React.Element<*> & { type: { __docgenInfo: DocgenInfoType } };

export type ComponentInfoFinderSig = (ElementWithDocgenInfo, {[string]: DocgenDescriptionType}) => Array<DocgenInfoType>;

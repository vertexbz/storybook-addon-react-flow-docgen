// @flow
import * as React from 'react';
import addons from '@storybook/addons';
import { event } from '../constants';
import type { DocgenInfoType } from '../types';

type DocsProviderProps<E> = {
    docs?: Array<DocgenInfoType>,
    children: React.Element<E>
};

export default
class DocsProvider<E: *> extends React.Component<DocsProviderProps<E>> {
    componentDidMount() {
        addons.getChannel().emit(event.LoadDocData, this.props.docs || []);
    }

    componentWillUnmount() {
        addons.getChannel().emit(event.LoadDocData, []);
    }

    render(): React.Element<E> {
        return this.props.children;
    }
}

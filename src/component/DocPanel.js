// @flow
import * as React from 'react';
import marked from 'marked';
import { event } from '../constants';
import buildMarkdown from '../buildMarkdown';
import MarkdownStyle from './MarkdownStyle';
import type { DocgenInfoType } from '../types';


type DocPanelProps = {
    channel: *
};

type DocPanelState = {
    docgenInfos: Array<DocgenInfoType>
};

export default class DocPanel extends React.Component<DocPanelProps, DocPanelState> {
    state = {
        docgenInfos: []
    };

    constructor(...args: *) {
        super(...args);

        // $FlowIgnore
        this.buildDocHtml = this.buildDocHtml.bind(this);
        // $FlowIgnore
        this.onLoadDocData = this.onLoadDocData.bind(this);
    }

    onLoadDocData(docgenInfos: ?Array<DocgenInfoType>) {
        this.setState({ docgenInfos: docgenInfos || [] });
    }

    componentDidMount() {
        this.props.channel.on(event.LoadDocData, this.onLoadDocData);
    }

    componentWillUnmount() {
        this.props.channel.removeListener(event.LoadDocData, this.onLoadDocData);
    }

    buildDocHtml(): string {
        const md = this.state.docgenInfos
            .map((d: DocgenInfoType): string => buildMarkdown(d))
            .join('\n\n\n');

        return marked(md);
    }

    render(): ?React.Element<'div'> {
        if (this.state.docgenInfos.length === 0) {
            return null;
        }

        return (
            <div>
                <MarkdownStyle />
                <div
                    style={{ boxSizing: 'border-box', padding: 10, width: '100%' }}
                    className="markdown-body"
                    dangerouslySetInnerHTML={{ __html: this.buildDocHtml() }}
                />
            </div>
        );
    }
}

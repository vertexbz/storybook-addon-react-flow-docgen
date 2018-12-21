// @flow
import type { DocgenInfoType, DocgenPropType, DocgenPropsType, DefaultValueType, FlowDocgenPropType, NativeDocgenPropType } from './types';

const escapeCell = (str: string): string => str
    .replace(/\n/g, ' ')
    .replace(/\|/g, '\\|');

const escape = (str: string): string => escapeCell(str)
    .replace(/_/g, '&lowbar;')
    .replace(/\[/g, '&lsqb;')
    .replace(/]/g, '&rsqb;')
    .replace(/>/g, '&gt;')
    .replace(/</g, '&lt;')
    .replace(/\*/g, '&ast;');

const buildValue = (value: DefaultValueType): string => '`' + escapeCell(String(value.value)) + '`';

const buildNativeType = (type: NativeDocgenPropType): string => {
    if (Array.isArray(type.value)) {
        const stringType = type.value
            .map((typeValue: *): string => typeValue.name || String(typeValue.value))
            .join(' | ');

        return escape(stringType);
    } else if (type.name) {
        return escape(type.name);
    }

    return '';
};

const buildFlowType = (type: FlowDocgenPropType): string => escape(type.raw || type.name);

const buildProp = ([name, prop]: [string, DocgenPropType]): string => '| ' + [
    /* Name        */ '**' + name + '**',
    /* Type        */ prop.flowType ? buildFlowType(prop.flowType) : (prop.type ? buildNativeType(prop.type) : ''),
    /* Required    */ prop.required ? 'yes' : 'no',
    /* Default     */ prop.defaultValue ? buildValue(prop.defaultValue) : '-',
    /* Description */ prop.description  ? escapeCell(prop.description) : ''
].join(' | ') + ' |';

const buildProps = (props: DocgenPropsType): string => `
| Name | Type | Required | Default | Description |
|------|------|:--------:|---------|-------------|
${Object.entries(props).map((buildProp: any)).join('\n')}`;

export default (docgenInfo: DocgenInfoType): string => `
# ${docgenInfo.displayName || 'Unknown'}
${docgenInfo.description || ''}
${docgenInfo.props ? buildProps(docgenInfo.props) : ''}`;

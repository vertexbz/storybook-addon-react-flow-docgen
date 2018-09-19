import buildMarkdown from '../buildMarkdown';

describe('buildMarkdown', () => {
    it('builds correct markdown from flow type defs', () => {
        const docgenInfo = {
            'description': 'DemoFlow component description\nblah blah blah\n## more bla',
            'displayName': 'DemoFlow',
            'props': {
                'prop1': {
                    'required': false,
                    'flowType': { 'name': 'number' },
                    'description': '~required~ optional prop1 of type number',
                    'defaultValue': { 'value': '5', 'computed': false }
                },
                'prop2': {
                    'required': false,
                    'flowType': {
                        'name': 'union',
                        'raw': 'string | false',
                        'elements': [{ 'name': 'string' }, { 'name': 'literal', 'value': 'false' }]
                    },
                    'description': 'prop2, required string || `false`',
                    'defaultValue': { 'value': '\'*<asd>*\'', 'computed': false }
                },
                'prop3': {
                    'required': true,
                    'flowType': {
                        'name': 'signature',
                        'type': 'object',
                        'raw': '{\n    a: string,\n    b: number,\n    c?: ?boolean\n}',
                        'signature': {
                            'properties': [{ 'key': 'a', 'value': { 'name': 'string', 'required': true } }, {
                                'key': 'b',
                                'value': { 'name': 'number', 'required': true }
                            }, { 'key': 'c', 'value': { 'name': 'boolean', 'nullable': true, 'required': false } }]
                        }
                    },
                    'description': 'prop3\nrequired **object**'
                },
                'prop4': {
                    'required': true,
                    'flowType': {
                        'name': 'Array',
                        'elements': [{
                            'name': 'signature',
                            'type': 'object',
                            'raw': '{ var: string }',
                            'signature': { 'properties': [{ 'key': 'var', 'value': { 'name': 'string', 'required': true } }] }
                        }],
                        'raw': 'Array<{ var: string }>'
                    },
                    'description': 'prop4, required array of objects'
                },
                'prop5': {
                    'required': true,
                    'flowType': {
                        'name': 'signature',
                        'type': 'function',
                        'raw': '(Array<*>) => void',
                        'signature': {
                            'arguments': [{
                                'name': '',
                                'type': { 'name': 'Array', 'elements': [{ 'name': 'unknown' }], 'raw': 'Array<*>' }
                            }], 'return': { 'name': 'void' }
                        }
                    },
                    'description': 'a *callback*'
                }
            }
        };

        expect(buildMarkdown(docgenInfo)).toMatchSnapshot();
    });
});

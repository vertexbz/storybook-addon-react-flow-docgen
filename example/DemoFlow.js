// @flow
import * as React from 'react';

type DemoProps = {
    prop1?: number,
    prop2: string | false,
    prop3: {
        a: string,
        b: number,
        c?: ?boolean
    },
    prop4: Array<{ var: string }>
};

// eslint-disable-next-line
const Demo = ({ prop1, prop2, prop3, prop4 }: DemoProps): * => {
    return <div />;
};

export default Demo;

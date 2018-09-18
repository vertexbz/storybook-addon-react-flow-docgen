/* eslint-disable no-unused-vars */
// @flow
import * as React from 'react';

type DemoProps = {
    /**
     * optional prop1 of type number
     */
    prop1?: number,
    /**
     * prop2, required string or false
     */
    prop2: string | false,
    /**
     * prop3
     * required object
     */
    prop3: {
        a: string,
        b: number,
        c?: ?boolean
    },
    /**
     * prop4, required array of objects
     */
    prop4: Array<{ var: string }>,
    /**
     * a callback
     */
    prop5: (Array<*>) => void
};

/**
 * DemoFlow component description
 * blah blah blah
 * more bla
 */
const DemoFlow = ({ prop1 = 5, prop2, prop3, prop4 }: DemoProps): * => (
    <div style={{ backgroundColor: 'red', width: 100, height: 100 }} />
);

export default DemoFlow;

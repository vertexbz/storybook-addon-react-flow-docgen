/* eslint-disable no-unused-vars */
import * as React from 'react';
import PropTypes from 'prop-types';

/**
 * A well documented button component for react
 */
const DemoPropTypes = ({ disabled, label, style, onClick }) => (
    <div style={{ backgroundColor: 'blue', width: 100, height: 100 }} />
);

DemoPropTypes.propTypes = {
    /**
     * Label used on the button
     */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /**
     * Style of the button as
     * an inline style object
     */
    style: PropTypes.object,
    /**
     * Sets disabled flag on the button component
     */
    disabled: PropTypes.bool,
    /**
     * Click event handler function (receives an event)
     */
    onClick: PropTypes.func
};
DemoPropTypes.defaultProps = {
    disabled: false,
    label: 'Submit'
};

export default DemoPropTypes;

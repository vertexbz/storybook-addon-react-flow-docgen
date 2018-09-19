// @flow
import * as React from 'react';
import codegen from 'babel-plugin-codegen/macro';

const sheet = codegen`
const { readFileSync } = require('fs');
const sheet = readFileSync(__dirname + '/../../node_modules/github-markdown-css/github-markdown.css').toString();//.replace(/\\n/g, ' ');
module.exports = '\`' + sheet + '\`';`;

const MarkdownStyle = (): React.Element<'style'> => <style dangerouslySetInnerHTML={{ __html: sheet }} />;

export default MarkdownStyle;

import * as React from 'react';
import program_parser from './md/program_parser.md';
import ReactMarkdown from 'react-markdown';

export default class ProgramParser extends React.Component {
    render(){
        return(
          <div>
          <ReactMarkdown children={`${program_parser}`} />
          </div>
        )
    }
}
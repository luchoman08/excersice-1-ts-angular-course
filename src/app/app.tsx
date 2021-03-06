import * as React from 'react';
import * as ReactDOM from 'react-dom'; 
import * as app from './app';

const Hello: React.SFC<{ compiler: string, framework: string }> = (props) => {
  return (
    <div>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
    </div>
  );
}
app.init();
ReactDOM.render( null,
  document.querySelector('#root')
);
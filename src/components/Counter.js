import React from 'react';

// var Wrapper = function(props) {
//   return React.createElement('div', { className: 'wrapper'}, props.children);
// }

// var Wrapper = function(props) {
//   return ( 
//     <div className="wrapper"> {props.children} </div> 
//   );
// }


class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      clicks: 0
    };
    // hack for es6 - `increment` will loose context without that trick
    this.increment = this.increment.bind(this); 
  }
  
  increment() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    return (
      <div>
        <p>This is the Counter component! The button was clicked { this.state.clicks } times</p>
        <Button text="Click me!" onClick={this.increment} />
      </div>
    );
  }
}

var Button = function(props) {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  );
}

// ReactDOM.render(
// //   React.createElement(Wrapper, {}, "Hello World"),
//   <Counter />, 
//   document.getElementById('container')
// );

export default Counter;

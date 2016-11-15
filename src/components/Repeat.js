import React from 'react';
// here don't use classes. Look at 'Counter' component for better understanding

// Children passed to a custom component can be anything, as long as that component transforms 
// them into something React can understand before rendering. This usage is not common, 
// but it works if you want to stretch what JSX is capable of.
// see {https://facebook.github.io/react/docs/jsx-in-depth.html#functions-as-children}

function ListOfTenThings() {
  // expression in {...} is function as children
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

export default ListOfTenThings;
import React from 'react';

const Hello: React.FC<{ title: string }> = (props) => (
  <h4>nihaoshijie{props.title}</h4>
);

export default Hello;

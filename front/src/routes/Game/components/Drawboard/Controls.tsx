import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const palette = [
  'aqua',
  'black',
  'blue',
  'fuchsia',
  'gray',
  'grey',
  'green',
  'lime',
  'maroon',
  'navy',
  'olive',
  'purple',
  'red',
  'silver',
  'teal',
  'white',
  'yellow',
];

const Controls = ({ setColor }) => {
  return (
    <Colors>
      {palette.map((color) => (
        <Color key={color} color={color} onClick={() => setColor(color)} />
      ))}
    </Colors>
  );
};

const Colors = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;
`;

const colorSize = 20;
const Color = styled.div`
  width: ${colorSize}px;
  height: ${colorSize}px;
  background-color: ${(props) => props.color};
`;

export default Controls;

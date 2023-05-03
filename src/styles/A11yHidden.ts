import React from 'react';
import styled from 'styled-components';

const A11yHidden = styled.label`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
`;

export default A11yHidden;

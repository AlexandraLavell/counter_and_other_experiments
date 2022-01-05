import React from 'react';

import styled from "styled-components"

// components
import Counter from './Counter';

function App() {
  return (
    <AppWrapper>
      <header className="App-header"> 
      </header>
      <Counter />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
`;

export default App;

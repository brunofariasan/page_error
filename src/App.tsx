import React from 'react';

import { Body, SecDescription, Div } from './styles'
import FirstComponent from "./components/FirstComponent/FirstComponent";

import ComponentImage from "./components/ComponentImage/ComponentImage";
import TitleMain from "./components/TitleMain/TitleMain";
import Message  from './components/Message/Message';
import Button from './components/Button/ButtonError';

function App() {

  return (
    <Body>
      <FirstComponent />
      <Div>
        <ComponentImage />
        <SecDescription>
          <TitleMain />
          <Message />
          <Button />
        </SecDescription>
      </Div>
    </Body>
  );
}

export default App;

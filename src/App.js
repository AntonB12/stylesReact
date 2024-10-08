import React from 'react';
import './App.css';
import {Cuadrado, Rectangulo, Component, Input, RedText, BlueText, GloblalStyle} from './styled';

function App() {
 
  return (
   <div>
    <GloblalStyle />

    <Cuadrado/>
    <Rectangulo/>
    <Component isRight={true}>holis</Component>
    <Input myMaxLength={100}/>
    <RedText>jlklk</RedText>
    <BlueText>hlhljhlk</BlueText>

   </div>
  );
}

export default App;

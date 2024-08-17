import React from 'preact/compat'
import { h } from 'preact'
import './index.css'
import './app.css'
import Title from './components/TitleComponent/Title'
import LanguageWrapper from './components/WrapperComponent/LanguageWrapper'


export function App() {

  return (<main>
    <Title></Title>
  <LanguageWrapper></LanguageWrapper>
        </main> )
      }
export default App


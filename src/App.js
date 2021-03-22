import './App.css';

import axios from 'axios';

import React, { useState, useRef, createContext } from 'react';

import InputField from './components/InputField';
import ImageContainer from './components/ImageContainer';
import TrueFalse from './components/TrueFalse';


// ========== LOADING CONTEXT =============== //

import Context from './Context';
import ContextProvider from './ContextProvider';



function App() {

	const ref = useRef();
	const [loaded, setLoaded] = useState(false);
	const [urls, setUrls] = useState(null);

  return (
    <div className="App">

			<div className="container">

				<img src="https://www.teknoparkistanbul.com.tr/uploads/firmalar/tuvislogo.png" style={{
					width : '15%'
				}}></img>

				<ContextProvider>

					<InputField></InputField>

					<ImageContainer></ImageContainer>

					<TrueFalse></TrueFalse>

				</ContextProvider>

			</div>
		
    </div>
  );
}


export default App;

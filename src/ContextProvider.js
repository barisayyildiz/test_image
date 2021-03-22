import React, { useState, useRef, createContext } from 'react';
import Context from './Context';

const ContextProvider = (props) => {
	const [url, setUrl] = useState("");
	const [response, setResponse] = useState({});
	const [loaded, setLoaded] = useState(false);

	return(
		<Context.Provider value={{
			url,
			setUrl,
			response,
			setResponse,
			loaded,
			setLoaded
		}}>
			{props.children}
		</Context.Provider>
	)
}

export default ContextProvider;

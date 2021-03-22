import React, { useState, useRef, useContext } from 'react';

import Context from '../Context';

export default function ImageContainer()
{
	const contextValue = useContext(Context);
	
	if(contextValue.loaded)
	{
		return(
			<div className="image-container">
				<img src={contextValue.response.original}></img>
				<img src={contextValue.response.target}></img>
			</div>
		)


	}else{
		return(null);
	}


}

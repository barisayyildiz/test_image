import React, { Component , useState, useRef, useContext } from "react";


import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import InputGroup from 'react-bootstrap/InputGroup'
import context from "react-bootstrap/esm/AccordionContext";

import Context from '../Context';

import axios from 'axios';

export default function InputField()
{
	const contextValue = useContext(Context);

	const onSubmit = () => {

		// contextValue.setResponse({
		// 	original : 'https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-sunlight.jpg?w=585&scale=down',
		// 	target : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg'
		// })
		// contextValue.setLoaded(true);


		axios.post("http://localhost:5000/api/image",{
			body : {
				target : contextValue.url
			}
		})
		.then(res => {
			contextValue.setResponse(res.data);
			contextValue.setLoaded(true);
		})


	}

	return(

		<Context.Consumer>
			{({url, setUrl}) => (

				<InputGroup className="mb-3">
					<Form.Control
						placeholder="Image url"
						aria-label="imageurl"
						value={url}
						onChange={e => setUrl(e.target.value)}
						onKeyUp={e =>  {
							if(e.code === 'Enter')
								onSubmit();
						}}

					/>
					<InputGroup.Append>
						<Button 
							variant="primary"
							onClick={onSubmit}						
							>
								Button
						</Button>
					</InputGroup.Append>
				</InputGroup>


      )}


		</Context.Consumer>

	)

}


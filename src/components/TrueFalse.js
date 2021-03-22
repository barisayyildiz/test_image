import React, { Component , useState, useRef, useContext } from "react";

import Context from '../Context';

import axios from 'axios';

import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import InputGroup from 'react-bootstrap/InputGroup'
import context from "react-bootstrap/esm/AccordionContext";


export default function TrueFalse()
{
	const contextValue = useContext(Context);


	const onSubmit = (feedback) => {
		
		axios.post("http://localhost:5000/api/feedback",{
			body : {
				feedback
			}
		})
		.then(res => {
			console.log(res.data);
		})
		
	}

	if(contextValue.loaded)
	{
		return(
			<div className="feedback-container">
				<Button 
					variant="success"
					onClick={() => onSubmit(true)}>
						True
				</Button>
	
				<Button 
					variant="danger"
					onClick={() => onSubmit(false)}>
						False
				</Button>
	
			</div>
	
		)
	}else
	{
		return(null);
	}


}

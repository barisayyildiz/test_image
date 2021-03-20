import './App.css';

import axios from 'axios';

import React, { useState, useRef } from 'react';


function App() {

	const ref = useRef();
	const [loaded, setLoaded] = useState(false);
	const [urls, setUrls] = useState(null);

	// cat https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-sunlight.jpg?w=585&scale=down
	// dog https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:* 


	const postRequest = ({value}) => {
		
		axios.post("http://localhost:5000/api/feedback",{
			body : {
				feedback : value
			}
		})
		.then(res => {
			console.log(res.data);
		})

	}

  return (
    <div className="App">

			<div className="container">

				<img src="https://www.teknoparkistanbul.com.tr/uploads/firmalar/tuvislogo.png" style={{
					width : '10%'
				}}></img>

				<input ref={ref}  placeholder="Search" onKeyUp={(event) => {
					if(event.key == 'Enter')
					{
						console.log(ref.current.value);

						axios.post("http://localhost:5000/api/image", {
							body : {
								target : ref.current.value
							}
						})
						.then(res => {
							
							console.log(res.data);

							setUrls(res.data);
							setLoaded(true);

						})

					}
				}}></input>

				{
					loaded &&

					<>
						<div className="images-container">
							<img src={urls.target}></img>
							<img src={urls.original}></img>
						</div>

						<div className="button-container">
							<button onClick={() => postRequest({value : true})}>True</button>
							<button onClick={() => postRequest({value : false})}>False</button>
						</div>

					</>
						
					
				}

			</div>
		
    </div>
  );
}

export default App;

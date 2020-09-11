import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateMovie = () => {
	const { id } = useParams();
	const [updateMovie, setUpdateMovie] = useState({
		title: '',
		director: '',
		metascore: 1,
		stars: ['Brian', 'Noah', 'Other Noah'],
	});

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('UpdateMovie onSubmit called.');
		axios
			.put(`http://localhost:5000/update-movie/${id}`, updateMovie)
			.then((res) => {
				console.log('onSubmit res: ', res);
			})
			.catch((err) => {
				console.log('onSubmit error: ', err);
			});
	};

	const editValue = (e) => {
		setUpdateMovie({ ...updateMovie, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label htmlFor='title'>Update Title</label>
				<br />
				<input type='text' name='title' id='title' onChange={editValue} />
				<br />
				<label htmlFor='director'>Update Director</label>
				<br />
				<input type='text' name='director' id='director' onChange={editValue} />
				<br />
				<label htmlFor='metascore'>Update Metascore</label>
				<br />
				<input
					type='text'
					name='metascore'
					id='metascore'
					onChange={editValue}
				/>
				<br />
				<label htmlFor='stars'>Update Stars</label>
				<br />
				<input type='text' name='stars' id='stars' onChange={editValue} />
				<br />
				<button type='submit'>Update</button>
			</form>
		</div>
	);
};

export default UpdateMovie;

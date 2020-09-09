import React, { useState } from 'react';
import axios from 'axios';

const UpdateMovie = () => {
	const [updateMovie, setUpdateMovie] = useState({
		id: 1,
		title: '',
		director: '',
		metascore: 1,
		stars: ['Brian', 'Noah', 'Other Noah'],
	});

	const onSubmit = (e, id) => {
		e.preventDefault();
		console.log('UpdateMovie onSubmit called.');
		axios.put(`http://localhost:5000/update-movie/${id}`);
	};

	const editValue = (e) => {
		setUpdateMovie({ ...updateMovie, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label htmlFor='title'>Update Title</label>
				<br />
				<input type='text' name='title' id='title' value={editValue} />
				<br />
				<label htmlFor='director'>Update Director</label>
				<br />
				<input type='text' name='director' id='director' value={editValue} />
				<br />
				<label htmlFor='metascore'>Update Metascore</label>
				<br />
				<input type='text' name='metascore' id='metascore' value={editValue} />
				<br />
				<label htmlFor='stars'>Update Stars</label>
				<br />
				<input type='text' name='stars' id='stars' value={editValue} />
			</form>
		</div>
	);
};

export default UpdateMovie;

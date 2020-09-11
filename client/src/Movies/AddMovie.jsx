import React, { useState } from 'react';

const AddMovie = () => {
	const [movie, setMovie] = useState({
		title: '',
		director: '',
		metascore: 1,
		stars: ['Brian', 'Noah', 'Other Noah'],
	});

	const onSubmit = (e) => {
		e.preventDefault();
	};

	const onChange = (e) => {
		setMovie({ ...movie, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label htmlFor='title'>Title</label>
				<br />
				<input type='text' name='title' id='title' onChange={onChange} />
				<br />
				<label htmlFor='director'>Director</label>
				<br />
				<input type='text' name='director' id='director' onChange={onChange} />
				<br />
				<label htmlFor='metascore'>Metascore</label>
				<br />
				<input
					type='text'
					name='metascore'
					id='metascore'
					onChange={onChange}
				/>
				<br />
				<label htmlFor='stars'>Stars</label>
				<br />
				<input type='text' name='stars' id='stars' onChange={onChange} />
				<br />
				<button type='submit'>Add</button>
			</form>
		</div>
	);
};

export default AddMovie;

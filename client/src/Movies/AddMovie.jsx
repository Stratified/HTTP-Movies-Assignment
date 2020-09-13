import React, { useState } from 'react';
import axios from 'axios';

const AddMovie = ({ setMovieList }) => {
	const [movie, setMovie] = useState({
		title: '',
		director: '',
		metascore: 1,
		stars: ['Brian', 'Noah', 'Other Noah'],
	});

	const onSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`http://localhost:5000/api/movies/`, movie)
			.then((res) => {
				console.log('AddMovie onSubmit res: ', res);
				setMovieList(res.data);
			})
			.catch((err) => console.log(err));
	};

	const onChange = (e) => {
		e.persist();
		e.target.name === 'stars'
			? (e.target.value = e.target.value.split(','))
			: setMovie({ ...movie, [e.target.name]: e.target.value });
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

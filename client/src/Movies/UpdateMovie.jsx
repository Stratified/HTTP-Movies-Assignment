import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const UpdateMovie = () => {
	const history = useHistory();
	const { id } = useParams();
	const [updateMovie, setUpdateMovie] = useState({
		title: '',
		director: '',
		metascore: 1,
		stars: ['Brian', 'Noah', 'Other Noah'],
	});

	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then((res) => {
				setUpdateMovie(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('UpdateMovie onSubmit called.');
		axios
			.put(`http://localhost:5000/api/movies/${id}`, updateMovie)
			.then((res) => {
				console.log('UpdateMovie onSubmit res: ', res);
				history.push(`/movies/${id}`);
			})
			.catch((err) => {
				console.log('onSubmit error: ', err);
			});
	};

	const editValue = (e) => {
		e.persist();
		let value = e.target.value;
		if (e.target.name === 'metascore') {
			value = parseInt(value, 10);
		}
		if (e.target.name === 'stars') {
			value = value.split(',');
		}
		setUpdateMovie({
			...updateMovie,
			[e.target.name]: value,
		});
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label htmlFor='title'>Update Title</label>
				<br />
				<input
					type='text'
					name='title'
					id='title'
					onChange={editValue}
					value={updateMovie.title}
				/>
				<br />
				<label htmlFor='director'>Update Director</label>
				<br />
				<input
					type='text'
					name='director'
					id='director'
					onChange={editValue}
					value={updateMovie.director}
				/>
				<br />
				<label htmlFor='metascore'>Update Metascore</label>
				<br />
				<input
					type='text'
					name='metascore'
					id='metascore'
					onChange={editValue}
					value={updateMovie.metascore}
				/>
				<br />
				<label htmlFor='stars'>Update Stars</label>
				<br />
				<input
					type='text'
					name='stars'
					id='stars'
					onChange={editValue}
					value={updateMovie.stars}
				/>
				<br />
				<button type='submit'>Update</button>
			</form>
		</div>
	);
};

export default UpdateMovie;

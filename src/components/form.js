import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles } from '@material-ui/core';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';

// import Icon from '@material-ui/core/Icon';
const useStyles = makeStyles((theme) => ({
	root: {
		display: "block",
		width: '100%',
		minWidth: 120,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		justify: 'center',
		'& .MuiTextField-root': {
			// alignItems: "center",
			margin: theme.spacing(2),
			// width: 100,
			// justifyContent: "center"
		},
	},
}));

const Form = () => {
	const classes = useStyles()
	const [value, setValue] = useState(false)
	// const [disable, setDisable] = useState(true)
	const [data, setData] = useState({})
	const handleFormSubmit = (event) => {
		event.preventDefault()
		console.log(event.target.value)
		console.log(data)
		axios
			.post("http://127.0.0.1:5000/", data)
			.then((response) => {
				console.log(response);
				// this.props.history.push("/users");
				return <Redirect to="/users" />
			}).catch(error => {
				console.log('error occured')
			})

	}


	return (
		<form className={classes.root} noValidate onSubmit={handleFormSubmit}>
			<div>
				<TextField error={false} id="name" label="Name" defaultValue="" variant="outlined" name="name" onChange={(event) => setData({ ...data, [event.target.name]: event.target.value })} />

			</div>
			<div>
				<TextField error={false} id="email" label="Email" defaultValue="" variant="outlined" name="email" onChange={(event) => setData({ ...data, [event.target.name]: event.target.value })} />

			</div>
			<div>

				<TextField error={false} id="phoneNumber" label="Phone Number" defaultValue="" variant="outlined" name="phoneNumber" onChange={(event) => setData({ ...data, [event.target.name]: event.target.value })} />
			</div>
			<div>

				<TextField error={value} id="dob" type="date" variant="outlined" name="dob" onChange={(event) => {
					var age = new Date(event.target.value)
					var today = new Date()
					var before = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate())
					// console.log(before, event.target.value)
					// console.log(before.getTime() > age.getTime())
					// console.log(event.target.name)
					if (before.getTime() < age.getTime()) {
						setValue(before.getTime() < age.getTime())
						console.log(event.target.name)
						// setDisable(true)
					}
					else {
						setData({ ...data, [event.target.name]: event.target.value })
						setValue(false)
						// setDisable(false)
					}
				}} />
			</div>
			<div>
				<Button
					// disabled={disable}
					type="submit"
					variant="contained"
					color="primary"
					size="medium"
				>
					Submit
				</Button>


			</div>
		</form>
	);
}

export default Form;
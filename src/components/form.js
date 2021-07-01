import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles } from '@material-ui/core';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import validator from 'validator';

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

const fields = {

}

const Form = (props) => {
	let isError = false
	const classes = useStyles()
	const [value, setValue] = useState(false)
	const [disable, setDisable] = useState(false)
	const [data, setData] = useState({})
	const handleFormSubmit = (event) => {
		event.preventDefault()
		if (isError) {
			console.log(data)
			alert('There are errors in your form')
			return
		}
		console.log(event.target.value)
		console.log(data)
		if (data.name && data.email && data.dob && data.phoneNumber) {
			setDisable(true)
			console.log(data)
		}
		axios
			.post("http://127.0.0.1:5000/", data)
			.then((response) => {
				console.log(response);
				if (response.status === 200)
					props.history.push("/users");
			}).catch(error => {
				console.log('error occured')
				alert('error occured')
			})

	}
	const HandleChange = (event) => {
		// setData({ ...data, [event.target.name]: event.target.value, error: { [event.target.name]: event.target.value ? 'error' : '' } })
		if (event.target.name === 'name') {
			(event.target.value.length > 64 || event.target.value.length < 2) ? (setData({ ...data, error: { [event.target.name]: 'name should be smaller than 64 words' } })) : setData({ ...data, [event.target.name]: event.target.value, error: { [event.target.name]: '' } })
			data.error && data.error[event.target.name] ? (isError = true) : (isError = false)
			// console.log(data);
		}
		else if (event.target.name === 'email') {
			validator.isEmail(event.target.value) ? setData({ ...data, [event.target.name]: event.target.value, error: { [event.target.name]: '' } }) : setData({ ...data, error: { [event.target.name]: 'invalid email' } })
			data.error && data.error[event.target.name] ? (isError = true) : (isError = false)
		}
		else if (event.target.name === 'dob') {
			var age = new Date(event.target.value)
			var today = new Date()
			var before = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate())
			// console.log(before, event.target.value)
			// console.log(before.getTime() > age.getTime())
			// console.log(event.target.name)
			if (before.getTime() < age.getTime()) {
				setData({ ...data, error: { [event.target.name]: 'invalid email' } })
				data.error && data.error[event.target.name] ? (isError = true) : (isError = false)
				console.log(event.target.name)
			}
			else {
				setData({ ...data, [event.target.name]: event.target.value, error: { [event.target.name]: '' } })
				isError=false
			}
		}
		// if(!isError){
		// 	//add else if for validating other fields (if any)
		// 	this.setState(prevState => ({
		// 	  activeStep: prevState.activeStep + 1,
		// 	  error: false,
		// 	}));
		//       }
	}


	return (
		<form className={classes.root} noValidate onSubmit={handleFormSubmit}>
			<div>
				<TextField error={data.error && data.error.name ? true : false} id="name" label="Name" variant="outlined" name="name" onChange={HandleChange} helperText={data.error && data.error.name} />

			</div>
			<div>
				{/* <TextField error={data.error ? data.error.email ? true : false : false} id="email" label="Email" defaultValue="" variant="outlined" name="email" onChange={(event) => {
					setData({ ...data, [event.target.name]: event.target.value, error: { [event.target.name]: event.target.value ? 'error' : '' } })
					console.log(data.error ? 'hello' : 'no error')
				}
				} /> */}
				<TextField error={data.error && data.error.email ? true : false} id="email" label="Email" defaultValue="" variant="outlined" name="email" onChange={HandleChange} helperText={data.error && data.error.email} />
			</div>
			<div>

				<TextField error={false} id="phoneNumber" label="Phone Number" defaultValue="" variant="outlined" name="phoneNumber" onChange={(event) => setData({ ...data, [event.target.name]: event.target.value })} />
			</div>
			<div>
				<TextField error={data.error && data.error.dob ? true : false} id="dob" type="date" variant="outlined" name="dob" onChange={HandleChange} />
			</div>
			<div>
				<Button
					disabled={disable}
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
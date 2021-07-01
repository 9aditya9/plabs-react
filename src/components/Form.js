import React from 'react';
import useForm from './useForm'
import validate from './validateInfo'
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles } from '@material-ui/core';

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

const Form = (props) => {
	const{values, handleChange, handleSubmit, errors} = useForm(props, validate)
	const classes = useStyles()

	return (
		<form className={classes.root} noValidate onSubmit={handleSubmit}>
		<div>
			<TextField error={errors.name ? true : false} id="name" label="Name" variant="outlined" name="name" onChange={handleChange} helperText={errors.name} value={values.name} />

		</div>
		<div>
			<TextField error={errors.email ? true : false} id="email" label="Email" variant="outlined" name="email" onChange={handleChange} helperText={errors.email} value={values.email} />
		</div>
		<div>

			<TextField error={errors.phoneNumber ? true : false} id="phoneNumber" label="Phone Number" variant="outlined" name="phoneNumber" onChange={handleChange} value={values.phoneNumber} helperText={errors.phoneNumber} />
		</div>
		<div>
			<TextField error={errors.dob ? true : false} id="dob" type="date" variant="outlined" name="dob" onChange={handleChange} helperText={errors.dob} value={values.dob}/>
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
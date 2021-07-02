import { useEffect, useState } from 'react'
// import validate from './validateInfo'
import axios from 'axios'

const useForm = (props, validate) => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		dob: ''
	})
	const [errors, setErrors] = useState({})
	const [isSubmitting, setIsSubmitting] = useState(false)

	// handle changes on input fields
	// updating values
	const handleChange = (event) => {
		const { value, name } = event.target
		setValues({
			...values,
			[name]: value,
		})
		// console.log(values);
		// 	setErrors(validate(values))
		// console.log(errors)
	}

	// handling form submission
	const handleSubmit = (event) => {
		event.preventDefault()
		setErrors(validate(values))
		setIsSubmitting(true);
	}
	
	function submitToApi(){
			axios
				.post("https://plabs-react.herokuapp.com/", values)
				.then((response) => {
					// console.log(response);
					if (response.status === 200)
						props.history.push("/plabs-react/users");
				}).catch(error => {
					console.log('error occured', error.response)
					// alert('error occured')
					setErrors({...errors, 'phoneNumber': error.response.data})
					// console.log(errors)
				})
	}

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
		submitToApi();
		}
	}, [errors]);
	return { values, handleChange, handleSubmit, errors }
}

export default useForm;
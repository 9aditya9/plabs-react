import validator from 'validator'

export default function validateInfo(values){
	let errors = {}
	if (!values.name.trim()) {
		errors.name = 'Name required'
	}

	// validating email
	if (!values.email) {
		errors.email = 'Email required'
	} else if (!validator.isEmail(values.email)) {
		errors.email = 'Email address is invalid'
	}

	// validating dob
	if (!values.dob) {
		errors.dob = 'DOB required'
	} else {
		var age = new Date(values.dob)
		var today = new Date()
		// date before 18 years from today
		var before = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate())

		// console.log(before, event.target.value)
		// console.log(before.getTime() > age.getTime())
		// console.log(event.target.name)
		if (before.getTime() < age.getTime()) {
			errors.dob = 'You should be 18 years old'
			// console.log(values.dob)
		}
	}
	return errors;
}

// export default validateInfo;
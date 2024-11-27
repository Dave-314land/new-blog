import {model, Schema} from 'mongoose'

const userModel = new model(
	'User',
	new Schema(
		{
			username: {
				type: String,
				required: true,
				unique: true
			},
			email: {
				type: String,
				required: true,
				unique: true
			},
			password: {
				type: String,
				required: true
			},
			first_name: {
				type: String,
				required: true,
			}
		},
    {
			timestamps: true
    },
  )
);

export default userModel;
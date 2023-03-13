import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

import { minWidth } from '../ContactForm';

export default function CustomTextField(props: TextFieldProps) {
	return (
		<TextField
			{...props}
			id='name'
			name='name'
			label='Name'
			variant='outlined'
			sx={{ minWidth: minWidth, marginRight: '16px' }}
		/>
	);
}

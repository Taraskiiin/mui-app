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
			sx={{
				minWidth: minWidth,
				marginBottom: { xs: 2, md: 0 },
				marginRight: { md: 2 },
				'& .MuiOutLinedInput-root.Mui-focused': {
					'& > fieldset': {
						borderColor: 'primary.dark',
					},
				},
				'& .MuiOutlinedInput-root:hover': {
					'& > fieldset.MuiOutlinedInput-notchedOutline': {
						borderColor: 'orange',
					},
				},
			}}
		/>
	);
}

import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

import { minWidth, roles } from '../ContactForm';

export default function AutoComplete(props: {
	value: string;
	onInputChange: (
		event: React.SyntheticEvent<Element, Event>,
		value: string
	) => void;
}) {
	return (
		<Autocomplete
			{...props}
			options={roles}
			renderInput={(params) => <TextField name='role' {...params} />}
			getOptionLabel={(roleOption) => `${roleOption}`}
			renderOption={(props, option) => {
				return <li {...props}>{`${option}`}</li>;
			}}
			sx={{ minWidth: minWidth }}
			isOptionEqualToValue={(option, value) => option === value || value === ''}
		/>
	);
}

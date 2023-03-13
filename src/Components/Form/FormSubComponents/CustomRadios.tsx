import React from 'react';
import {
	FormControlLabel,
	FormGroup,
	FormLabel,
	Radio,
	RadioGroup,
} from '@mui/material';

import { minWidth, defaultPreference } from '../ContactForm';

export default function CustomRadios(props: {
	preference: string | undefined;
	onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}) {
	return (
		<FormGroup sx={{ minWidth: minWidth, marginRight: '16px' }}>
			<FormLabel component='legend'>Work Preference</FormLabel>
			<RadioGroup
				{...props}
				id='preference-type-radio'
				name='preference'
				value={props.preference}
				onChange={props.onChange}
			>
				<FormControlLabel
					label={defaultPreference}
					control={<Radio />}
					value={defaultPreference}
				/>
				<FormControlLabel label='Hybrid' control={<Radio />} value='Hybrid' />
				<FormControlLabel
					label='In office'
					control={<Radio />}
					value='In office'
				/>
			</RadioGroup>
		</FormGroup>
	);
}

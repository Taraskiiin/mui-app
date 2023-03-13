import React from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { minWidth } from '../ContactForm';
import { TextField } from '@mui/material';

export default function CustomDesktopDatePicker(props: {
	value: string | undefined;
	onChange: (value: string | null | undefined) => void;
}) {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DesktopDatePicker
				{...props}
				label='Date'
				inputFormat='DD/MM/YYYY'
				renderInput={(params) => {
					return <TextField {...params} sx={{ minWidth: minWidth }} />;
				}}
			/>
		</LocalizationProvider>
	);
}

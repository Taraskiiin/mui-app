import React from 'react';
import {
	Autocomplete,
	FormControl,
	FormGroup,
	ListItemText,
	MenuItem,
	Paper,
	Select,
	TextField,
	TextFieldProps,
} from '@mui/material';

import { DesktopDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const roles = ['React', 'Angular', 'Python', 'NodeJS'];
const skills = ['Software Dev', 'Architect', 'Designer', 'Business Analyst'];

export default function ContactForm() {
	return (
		<Paper>
			<form>
				<FormControl>
					<FormGroup row>
						<TextField id='name' name='name' label='Name' variant='outlined' />
						<Autocomplete
							options={roles}
							renderInput={(params) => <TextField name='role' {...params} />}
							getOptionLabel={(roleOption) => `${roleOption}`}
							renderOption={(props, option) => {
								return <li {...props}>{`${option}`}</li>;
							}}
						/>
					</FormGroup>
					<FormGroup row>
						<Select
							id='skill-select'
							renderValue={(select: string[]) => select.join(', ')}
						>
							{skills.map((skillName) => (
								<MenuItem value={skillName} key={skillName}>
									<ListItemText primary={skillName} />
								</MenuItem>
							))}
						</Select>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DesktopDatePicker
								label='Date'
								inputFormat='DD/MM/YYYY'
								renderInput={(
									params: JSX.IntrinsicAttributes & TextFieldProps
								) => {
									return <TextField {...params} />;
								}}
								value='abc'
								onChange={() => {}}
							/>
						</LocalizationProvider>
					</FormGroup>
				</FormControl>
			</form>
		</Paper>
	);
}

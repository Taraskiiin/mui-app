import React from 'react';
import {
	Autocomplete,
	Button,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	ListItemText,
	MenuItem,
	Paper,
	Radio,
	RadioGroup,
	Select,
	Stack,
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
					<FormGroup row>
						<FormGroup>
							<FormLabel component='legend'>Work Preference</FormLabel>
						</FormGroup>
						<RadioGroup
							id='preference-type-radio'
							name='preference'
							value='Work from home'
						>
							<FormControlLabel
								label='Work from home'
								control={<Radio />}
								value='Work from home'
							/>
							<FormControlLabel
								label='Hybrid'
								control={<Radio />}
								value='Hybrid'
							/>
							<FormControlLabel
								label='In office'
								control={<Radio />}
								value='In office'
							/>
						</RadioGroup>
						<Stack>
							<Button>Submit</Button>
							<Button>Clear</Button>
						</Stack>
					</FormGroup>
				</FormControl>
			</form>
		</Paper>
	);
}

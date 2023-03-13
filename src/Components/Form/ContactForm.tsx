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
const minWidth = 300;

export default function ContactForm() {
	return (
		<Paper>
			<form>
				<FormControl>
					<FormGroup
						row
						sx={{
							padding: '16px',
							justifyContent: 'space-between',
						}}
					>
						<TextField
							id='name'
							name='name'
							label='Name'
							variant='outlined'
							sx={{ minWidth: minWidth, marginRight: 2 }}
						/>
						<Autocomplete
							options={roles}
							renderInput={(params) => <TextField name='role' {...params} />}
							getOptionLabel={(roleOption) => `${roleOption}`}
							renderOption={(props, option) => {
								return <li {...props}>{`${option}`}</li>;
							}}
							sx={{ minWidth: minWidth }}
						/>
					</FormGroup>
					<FormGroup
						row
						sx={{
							padding: '16px',
							justifyContent: 'space-between',
						}}
					>
						<Select
							id='skill-select'
							renderValue={(select: string[]) => select.join(', ')}
							sx={{ minWidth: minWidth, marginRight: 2 }}
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
									return <TextField sx={{ minWidth: minWidth }} {...params} />;
								}}
								value='abc'
								onChange={() => {}}
							/>
						</LocalizationProvider>
					</FormGroup>
					<FormGroup
						row
						sx={{
							padding: '16px',
							justifyContent: 'space-between',
						}}
					>
						<FormGroup sx={{ minWidth: minWidth, marginRight: 2 }}>
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

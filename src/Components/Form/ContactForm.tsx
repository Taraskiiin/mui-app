import React, { useState } from 'react';
import {
	Alert,
	AlertTitle,
	Autocomplete,
	Button,
	Dialog,
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
	SelectChangeEvent,
	Stack,
	TextField,
} from '@mui/material';

import { DesktopDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { contactData, FormValues, today } from '../../Data/ContactData';

const roles = ['Software Dev', 'Architect', 'Designer', 'Business Analyst'];
const skills = ['React', 'Angular', 'Python', 'NodeJS', 'Machine Learning'];

const minWidth = 300;
const defaultPreference = 'Work from home';

export default function ContactForm() {
	const getDefaultFormValues = () => {
		return {
			id: contactData.length + 1,
			name: '',
			role: '',
			skills: ['React'],
			lastUpdates: `${today.getDate()}/${
				today.getMonth() + 1
			}/${today.getFullYear()}`,
			preference: defaultPreference,
		};
	};

	const [alertOpen, setAlertOpen] = useState<boolean>(false);
	const [formValues, setFormValues] = useState<FormValues>(
		getDefaultFormValues()
	);

	const handleTextFieldChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const handleAutoCompleteChange = (
		event: React.SyntheticEvent<Element, Event>,
		value: string
	) => {
		setFormValues({
			...formValues,
			role: value || '',
		});
	};

	const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
		const {
			target: { value },
		} = event;
		setFormValues({
			...formValues,
			skills: typeof value === 'string' ? value.split(', ') : value,
		});
	};

	const handleDatePickerChange = (value: string | null | undefined) => {
		const lastDate = value as unknown as {
			month: () => string;
			date: () => string;
			year: () => string;
		};

		setFormValues({
			...formValues,
			lastUpdates: `${lastDate.date()}/${
				lastDate.month() + 1
			}/${lastDate.year()}`,
		});
	};

	const handleRadioChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		value: string
	) => {
		const { name } = event.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const clearValues = () => {
		setFormValues({ ...getDefaultFormValues() });
	};

	const handleSubmit = () => {
		contactData.push(formValues);
		setAlertOpen(true);
		clearValues();
	};

	const handleClearClick = () => {
		clearValues();
	};

	const handlerAlertClick = () => {
		setAlertOpen(false);
	};

	return (
		<>
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
								sx={{ minWidth: minWidth, marginRight: '16px' }}
								value={formValues.name}
								onChange={handleTextFieldChange}
							/>
							<Autocomplete
								onInputChange={handleAutoCompleteChange}
								options={roles}
								renderInput={(params) => <TextField name='role' {...params} />}
								getOptionLabel={(roleOption) => `${roleOption}`}
								renderOption={(props, option) => {
									return <li {...props}>{`${option}`}</li>;
								}}
								sx={{ minWidth: minWidth }}
								value={formValues.role || ''}
								isOptionEqualToValue={(option, value) =>
									option === value || value === ''
								}
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
								sx={{ minWidth: minWidth, marginRight: '16px' }}
								value={formValues.skills || ''}
								onChange={handleSelectChange}
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
									renderInput={(params) => {
										return (
											<TextField {...params} sx={{ minWidth: minWidth }} />
										);
									}}
									value={formValues?.lastUpdates}
									onChange={handleDatePickerChange}
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
							<FormGroup sx={{ minWidth: minWidth, marginRight: '16px' }}>
								<FormLabel component='legend'>Work Preference</FormLabel>
								<RadioGroup
									id='preference-type-radio'
									name='preference'
									value={formValues.preference}
									onChange={handleRadioChange}
								>
									<FormControlLabel
										label={defaultPreference}
										control={<Radio />}
										value={defaultPreference}
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
							</FormGroup>
							<Stack>
								<Button onClick={handleSubmit}>Submit</Button>
								<Button onClick={handleClearClick}>Clear</Button>
							</Stack>
						</FormGroup>
					</FormControl>
				</form>
			</Paper>
			<Dialog open={alertOpen} onClose={handlerAlertClick}>
				<Alert onClose={handlerAlertClick}>
					<AlertTitle>Success!</AlertTitle>
					Form Submitted
				</Alert>
			</Dialog>
		</>
	);
}

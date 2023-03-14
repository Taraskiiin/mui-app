import React, { useState } from 'react';
import {
	Alert,
	AlertTitle,
	Button,
	Dialog,
	FormControl,
	FormGroup,
	Paper,
	SelectChangeEvent,
	Stack,
} from '@mui/material';

import { contactData, FormValues, today } from '../../Data/ContactData';

import CustomTextField from './FormSubComponents/CustomTextField';
import CustomAutoComplete from './FormSubComponents/CustomAutoComplete';
import CustomSelect from './FormSubComponents/CustomSelect';
import CustomDesktopDatePicker from './FormSubComponents/CustomDesktopDatePicker';
import CustomRadios from './FormSubComponents/CustomRadios';

export const roles = [
	'Software Dev',
	'Architect',
	'Designer',
	'Business Analyst',
];

export const skills = [
	'React',
	'Angular',
	'Python',
	'NodeJS',
	'Machine Learning',
];

export const minWidth = 300;
export const defaultPreference = 'Work from home';

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
							<CustomTextField
								value={formValues.name}
								onChange={handleTextFieldChange}
							/>
							<CustomAutoComplete
								value={formValues.role || ''}
								onInputChange={handleAutoCompleteChange}
							/>
						</FormGroup>
						<FormGroup
							row
							sx={{
								padding: '16px',
								justifyContent: 'space-between',
							}}
						>
							<CustomSelect
								value={formValues.skills || ''}
								onChange={handleSelectChange}
							/>
							<CustomDesktopDatePicker
								value={formValues?.lastUpdates}
								onChange={handleDatePickerChange}
							/>
						</FormGroup>
						<FormGroup
							row
							sx={{
								padding: '16px',
								justifyContent: 'space-between',
							}}
						>
							<CustomRadios
								preference={formValues.preference}
								onChange={handleRadioChange}
							/>
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

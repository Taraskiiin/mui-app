import {
	Select,
	MenuItem,
	ListItemText,
	SelectChangeEvent,
} from '@mui/material';
import React from 'react';

import { minWidth, skills } from '../ContactForm';

export default function AutoSelect(props: {
	value: '' | string[] | undefined;
	onChange: (
		event: SelectChangeEvent<string[]>,
		child: React.ReactNode
	) => void;
}) {
	return (
		<Select
			{...props}
			id='skill-select'
			renderValue={(select: string[]) => select.join(', ')}
			sx={{ minWidth: minWidth, marginRight: '16px' }}
			multiple
		>
			{skills.map((skillName) => (
				<MenuItem value={skillName} key={skillName}>
					<ListItemText primary={skillName} />
				</MenuItem>
			))}
		</Select>
	);
}

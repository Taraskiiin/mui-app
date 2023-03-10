import React from 'react';
import {
	Table,
	TableBody,
	TableContainer,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';
import { contactData } from '../../Data/ContactData';

export default function ContactTable() {
	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Role</TableCell>
						<TableCell>Skills</TableCell>
						<TableCell>Last updates</TableCell>
						<TableCell>Preference</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{contactData.map((contact) => (
						<TableRow key={contact.id}>
							{Object.entries(contact).map(([key, value]) => {
								if (key === 'skills') {
									return (
										<TableCell key={contact.id + key}>
											{value.join(', ')}
										</TableCell>
									);
								}
								if (key !== 'id') {
									return <TableCell key={contact.id + key}>{value}</TableCell>;
								}
								return '';
							})}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

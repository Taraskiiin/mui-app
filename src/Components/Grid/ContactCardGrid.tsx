import React from 'react';
import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	Grid,
	List,
	ListSubheader,
	Typography,
} from '@mui/material';
import { contactData } from '../../Data/ContactData';

export default function ContactCardGrid() {
	return (
		<Grid container spacing={2} sx={{ width: 700 }}>
			{contactData.map((contact) => (
				<Grid item key={contact.id}>
					<Card sx={{ width: 300 }}>
						<CardHeader
							title={contact.name}
							subheader={contact.role}
							avatar={
								<Avatar>
									{contact.name?.substring(0, 1).toUpperCase() || 'A'}
								</Avatar>
							}
						/>
						<CardContent>
							<Typography>
								<b>Last Activity: </b>
								{contact.lastUpdates}
							</Typography>
							<Typography>
								<b>Work Preference: </b>
								{contact.preference}
							</Typography>
							<List
								sx={{
									listStyle: 'list-item',
									listStyleType: 'circle',
									paddingLeft: '16px',
								}}
								subheader={
									<ListSubheader
										sx={{
											right: '16px',
											position: 'inherit',
											fontSize: '1.25rem',
											color: 'black',
											paddingLeft: '0',
										}}
									>
										Skills:{' '}
									</ListSubheader>
								}
							>
								{contact.skills?.map((skill) => (
									<li style={{ paddingBottom: '2px' }}>{skill}</li>
								))}
							</List>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
}

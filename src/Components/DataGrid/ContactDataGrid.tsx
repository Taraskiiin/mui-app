import React, { useCallback } from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { useTheme, Theme } from '@mui/material/styles';
import { contactData } from '../../Data/ContactData';

const columns = (theme: Theme) => [
	{
		field: 'name',
		headerName: 'Name',
		minWidth: 150,
		renderCell: (cellValues: GridRenderCellParams<string>) => {
			return cellValues.value;
		},
	},
	{
		field: 'role',
		headerName: 'Role',
		minWidth: 100,
		renderCell: (cellValues: GridRenderCellParams<string>) => {
			return cellValues.value;
		},
	},
	{
		field: 'skills',
		headerName: 'Skills',
		minWidth: 150,
		renderCell: (cellValues: GridRenderCellParams<string>) => {
			return (
				<div style={{ color: theme.palette.primary.main }}>
					{cellValues.value && cellValues.value[0]}
				</div>
			);
		},
	},
	{
		field: 'lastUpdates',
		headerName: 'Last Updates',
		minWidth: 120,
		renderCell: (cellValues: GridRenderCellParams<string>) => {
			return cellValues.value;
		},
	},
	{
		field: 'preference',
		headerName: 'Work Preference',
		minWidth: 150,
		renderCell: (cellValues: GridRenderCellParams<string>) => {
			return cellValues.value;
		},
	},
];

export default function ContactDataGrid() {
	const rows = () => [...contactData];
	const theme = useTheme();
	return (
		<DataGrid
			autoHeight
			rows={rows()}
			columns={columns(theme)}
			pageSize={5}
			headerHeight={60}
			rowHeight={120}
		/>
	);
}

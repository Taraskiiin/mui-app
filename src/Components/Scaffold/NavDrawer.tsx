import {
	AppBar,
	Drawer,
	List,
	ListItem,
	Toolbar,
	Typography,
} from '@mui/material';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import ContactDataGrid from '../DataGrid/ContactDataGrid';
import ContactCardGrid from '../DataGrid/ContactDataGrid';
import ContactForm from '../Form/ContactForm';
import ContactTable from '../Table/ContactTable';

export default function NavDrawer() {
	return (
		<BrowserRouter>
			<AppBar position='fixed'>
				<Toolbar>
					<Typography variant='h6' noWrap>
						MUI Styling
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer variant='temporary' open={true}>
				<List>
					{[
						{ text: 'Input Form', route: '/form' },
						{ text: 'Contact Card Grid', route: '/grid' },
						{ text: 'Contact Table', route: '/table' },
						{ text: 'Contact Data Grid', route: '/data-grid' },
					].map((nav, index) => (
						<ListItem key={nav.text}>
							<Link to={nav.route}>{nav.text}</Link>
						</ListItem>
					))}
				</List>
			</Drawer>
			<main>
				<Routes>
					<Route path='/' element={<ContactForm />} />
					<Route path='/form' element={<ContactForm />} />
					<Route path='/grid' element={<ContactCardGrid />} />
					<Route path='/table' element={<ContactTable />} />
					<Route path='/datagrida' element={<ContactDataGrid />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

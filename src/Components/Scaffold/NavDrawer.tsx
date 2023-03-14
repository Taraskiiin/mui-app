import {
	AppBar,
	Drawer,
	List,
	ListItem,
	Theme,
	Toolbar,
	Typography,
	useTheme,
} from '@mui/material';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import ContactDataGrid from '../DataGrid/ContactDataGrid';
import ContactCardGrid from '../Grid/ContactCardGrid';
import ContactForm from '../Form/ContactForm';
import ContactTable from '../Table/ContactTable';

const drawerWidth = 240;

const themedStyles = (theme: Theme) => {
	return {
		appBar: {
			zIndex: theme.zIndex.drawer + 1,
		},
	};
};

const simpleStyles = {
	drawer: {
		width: drawerWidth,
		'& .MuiBackdrop-root': {
			display: 'none',
		},
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: 'rgba(120, 120, 120, 0.2)',
	},
	content: {
		marginLeft: drawerWidth,
		padding: 3,
		maxWidth: 720,
	},
};

export default function NavDrawer() {
	const theme = useTheme();
	return (
		<BrowserRouter>
			<AppBar position='fixed' sx={themedStyles(theme).appBar}>
				<Toolbar>
					<Typography variant='h6' noWrap>
						MUI Styling
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				disableEnforceFocus
				variant='temporary'
				open={true}
				sx={simpleStyles.drawer}
				PaperProps={{ sx: simpleStyles.drawerPaper, elevation: 9 }}
			>
				<Toolbar />
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
			<main style={simpleStyles.content}>
				<Toolbar />
				<Routes>
					<Route path='/' element={<ContactForm />} />
					<Route path='/form' element={<ContactForm />} />
					<Route path='/grid' element={<ContactCardGrid />} />
					<Route path='/table' element={<ContactTable />} />
					<Route path='/data-grid' element={<ContactDataGrid />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';

export default function NavDrawer() {
  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6' noWrap>
            MUI Styling
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant='temporary' open={true}>
        <List>
          {[{ text: 'Input Form' }, { text: 'Contact Card Grid' }].map(
            (nav, index) => (
              <ListItem key={nav.text}>{nav.text}</ListItem>
            )
          )}
        </List>
      </Drawer>
      <main></main>
    </div>
  );
}

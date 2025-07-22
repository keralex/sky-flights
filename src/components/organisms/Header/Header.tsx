import { Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

const Header = () => {
    return (
        <AppBar position="static" color='transparent' enableColorOnDark>
            <Toolbar>
                <Typography variant="h6" color='primary' component="div" sx={{ fontWeight: 'bold' }}>
                    Sky Flights
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
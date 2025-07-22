import { Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

const Header = () => {
    return (
        <AppBar position="static" color="primary" enableColorOnDark>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    SkyFlights
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
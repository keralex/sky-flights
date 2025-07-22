import MainLayout from '../templates/MainLayout'
import { Typography } from '@mui/material'

const HomePage = () => {
    return (
        <MainLayout>
            <Typography variant="h4" gutterBottom>
                Find your next flight
            </Typography>
            {/* Insert SearchForm and PaginatedTable here */}
        </MainLayout>
    )
}

export default HomePage

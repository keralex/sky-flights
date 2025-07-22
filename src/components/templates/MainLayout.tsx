import { Container } from '@mui/material'
import Header from '../organisms/Header'
import { type PropsWithChildren } from 'react'

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Header />
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                {children}
            </Container>
        </>
    )
}

export default MainLayout

import { SearchForm } from '../organisms/SearchForm/SearchForm'
import MainLayout from '../templates/MainLayout'

const HomePage = () => {
    return (
        <MainLayout>
            <SearchForm />
            {/* Insert SearchForm and PaginatedTable here */}
        </MainLayout>
    )
}

export default HomePage

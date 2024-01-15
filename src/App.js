import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, NavBar, Footer, CategoryPage, ProductPage, CartPage, SearchResultsPage } from './components';

const App = () => {
    return <div className='flex flex-col min-h-screen'> {/*Need this for footer mt-auto to work and fix footer to bottom */}
        <BrowserRouter> {/*Stores current location in the address bar and navigate using browser built in history stack*/}
            <NavBar />
            <Routes>
                <Route exact path='/' element={<HomePage />}/>
                <Route exact path='/search' element={<SearchResultsPage />}/>
                <Route exact path='/category/:type' element={<CategoryPage/>} />
                <Route exact path='/product/:id' element={<ProductPage/>} />
                <Route exact path='/bag' element={<CartPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>;
}

export default App;
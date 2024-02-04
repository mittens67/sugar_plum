import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, NavBar, Footer, CategoryPage, ProductPage, CartPage, SearchResultsPage,Page404 } from './components';

const App = () => {
    return <div className='flex flex-col min-h-screen'> {/*Need this for footer mt-auto to work and fix footer to bottom */}
        <BrowserRouter> {/*Stores current location in the address bar and navigate using browser built in history stack*/}
            <NavBar />
            <Routes>
                <Route exact path='/' element={<HomePage />}/>
                <Route path='/search' element={<SearchResultsPage />}/>
                <Route path='/category/:type' element={<CategoryPage/>} />
                <Route path='/product/:id' element={<ProductPage/>} />
                <Route path='/bag' element={<CartPage />} />
                <Route path='/*' element={<Page404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>;
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const HomePage = lazy(() => import("./components/HomePage"));
const ProductPage = lazy(() => import("./components/ProductPage"));
const SearchResultsPage = lazy(() => import("./components/SearchResultsPage"));
const CartPage = lazy(() => import("./components/CartPage"));
const CategoryPage = lazy(() => import("./components/CategoryPage"));
const Page404 = lazy(() => import("./components/Page404"));

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/*Need this for footer mt-auto to work and fix footer to bottom */}
      <BrowserRouter>
        {/*Stores current location in the address bar and navigate using browser built in history stack*/}
        <NavBar />
        <Suspense>
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/category/:type" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/bag" element={<CartPage />} />
            <Route path="/*" element={<Page404 />} />
        </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

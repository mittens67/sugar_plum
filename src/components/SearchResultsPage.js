import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { callApi } from "../utils/CallApi";
import CategoryCard from "./CategoryCard";
import Empty from "./Empty";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const searchTerm = searchParams.get("searchTerm");

  const getResults = () => {
    // const searchTerm = searchParams.get("searchTerm");
    const type = `all`;

    callApi(`data/results.json`).then((results) => {
      const list = results[type];
      if (searchTerm) {
        const searchResults = list.filter((item) => {
          return item.itemName.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setProducts(searchResults);
      }
    });
  };

  useEffect(() => {
    getResults();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  if (!products.length)
    return (
      <Empty
        image={`/assets/emptySearch.svg`}
        altText={`Search Failed`}
        message={`Oops, could not find products matching "${searchTerm}".... `}
      />
    );

  return (
    <div className="my-[30px] mx-[auto] grid grid-cols-2 max-[480px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => {
        return (
          <CategoryCard
            itemName={product.itemName}
            price={product.basePrice}
            avgRating={product.avgRating}
            imgSrc={product.imageMedium}
            ratings={product.ratings}
            id={product.id}
            key={product.id}
          />
        );
      })}
    </div>
  );
};

export default SearchResultsPage;

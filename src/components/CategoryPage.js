import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import Loader from "./Loader";

import { callApi } from "../utils/CallApi";

const CategoryPage = () => {
  const [products, setProducts] = useState(null);
  const { type } = useParams();

  useEffect(() => {
    callApi(`data/results.json`).then((data) => {
      const result = data[type];
      setProducts(result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  if (!products) return <Loader />;
  return (
    <div className="p-[20px] flex items-center justify-center flex-col lg:flex-row lg:justify-start lg:items-start">
      <picture className="lg:self-start lg:block">
        <source media="(min-width: 1024px)" srcSet="/assets/menu.png" />
        <img src="/assets/menu_small.png" alt="Banner" className="max-h-[700px] w-[auto]" />
      </picture>
      {/* <img
        srcSet="/assets/menu_small.png 360w, , /assets/menu.png 1024w"
        alt="tep"
        className="lg:h-[700px] lg:w-[auto] lg:self-start lg:block"
      /> */}
      <div className="grid grid-cols-2 max-[480px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
    </div>
  );
};

export default CategoryPage;

import {Link} from 'react-router-dom';
import Hr from "./Hr";

const CategoryCard = ({itemName, price, avgRating, imgSrc, ratings, id}) => {
  return (
    <Link to={`/product/${id}`}>
    <div className="shadow-type2 h-[300px] w-[210px] mx-[15px] mb-[20px] p-[15px] flex flex-col justify-center rounded-xl bg-primary-100">
      <img
        src={imgSrc}
        alt={itemName}
        className="h-[200px] w-[200px] self-center"
        loading="lazy"
      />
      <Hr customClass={`my-[10px] w-[170px] self-center`}/>
      <div className=" pb-[5px]">
        <h3 className="font-black text-[15px] text-secondary-400">{itemName}</h3>
        <p className="font-normal text-[12px]">Rs. {price}</p>
        <p className="font-black text-[10px] leading-loose">
          {avgRating}<i className="fa-solid fa-star text-accent-300 m-[2px]"></i>  <span className="font-normal text-secondary-600">({ratings} reviews)</span>
        </p>
      </div>
    </div>
    </Link>
  );
};

export default CategoryCard;

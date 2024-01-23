import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (searchTerm) { // dont perform search if nothing is inputted
      navigate({
        pathname: "search",
        search: `${createSearchParams({
          searchTerm: `${searchTerm}`,
        })}`,
      });

      setSearchTerm("");
    }
  };

  const submitOnEnter = (e) => {
    if(e.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <div onKeyDown={submitOnEnter} className="flex items-center h-9 rounded-lg border text-secondary-500 border-secondary-200 focus-within:border-secondary-500">
      <input
        type="text"
        placeholder="Search"
        value={`${searchTerm}`}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="w-72 sm:w-96 h-8 rounded-l-lg px-4 placeholder-secondary-200 bg-primary-50 focus:outline-none"
      />
      <button className="bg-primary-50 h-8 rounded-r-lg px-4" onClick={handleSubmit}>
        <i className="fa fa-search text-secondary-400"></i>
      </button>
    </div>
  );
};

export default SearchBar;

import React from "react";
import { useSelector } from "react-redux";
import { STATUS } from "../app/features/searchQuery";

const SearchResultsPage = () => {
  const products = useSelector((state) => state.search.searchData);
  const input = useSelector((state) => state.search.searchQuery);
  const searchStatus = useSelector((state) => state.search.status);

  if (searchStatus === STATUS.LOADING) {
    return <p>Loading...</p>;
  }

  if (searchStatus === STATUS.ERROR) {
    return <p>Error occurred while fetching products.</p>;
  }

  return (
    <div style={{width:'300px'}}>
      <h1>Search Results for "{input}"</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <p>{product.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default SearchResultsPage;

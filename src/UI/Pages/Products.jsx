import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";
import { fetchProducts } from "../../api.js";
export const IMG_URL = `${import.meta.env.VITE_IMAGE_URL}`;


const Products = ({ setCartItems, theme }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);


  // Function to fetch products
  const loadProducts = async () => {
    try {
      const fetchedProducts = await fetchProducts();
      setAllProducts(fetchedProducts);
      setLoading(false);
      setRefresh(!refresh);
    } catch (error) {
      setError("Error fetching products");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [refresh]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [searchTerm, allProducts]);

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
  };

  // Handle adding product to cart
  const handleAddToCart = (product) => {

    const quantity = prompt(`Enter quantity:`, 1);

    if (quantity && parseInt(quantity) > 0) {
      const price = parseFloat(product.price);
      const cartItem = {
        id: product._id,
        name: product.name,
        image: product.image,
        price: price,
        quantity: parseInt(quantity),
        totalPrice: price * parseInt(quantity),
      };

      setCartItems((prevItems) => [...prevItems, cartItem]);
      alert("Product added to cart!");
    } else {
      alert("Please enter a valid quantity.");
    }
  };

  if(loading){
    return (
      <div>
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
      {theme === "dark" ? <hr /> : null}
      </div>
      
    );
  }
  else{
    if (error) {
      return <div>
        <div className="flex justify-center items-center h-screen">
        <p className="text-center mt-10 font-bold lg:text-2xl text-lg">
          {error}
        </p>
        </div>
        {theme === "dark" ? <hr /> : null}

    </div>
    }
  }

  return (
    <div>
      <section
        className="lora-regular lg:mt-10 mt-5 lg:mb-10 mb-5"
        style={{
          backgroundColor: theme === "light" ? "white" : "#333",
          color: theme === "light" ? "black" : "#fff",
        }}
      >
        <h1 className="text-2xl font-bold lg:text-3xl text-center">Paints</h1>
        <div className="lg:flex justify-end lg:mr-5 lg:-mt-10 flex justify-end mr-2 -mt-10 md:w-auto">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered lg:w-96 w-32 md:w-full"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{
                backgroundColor: theme === "light" ? "white" : "grey",
                color: theme === "light" ? "#333" : "#fff",
              }}
            />
          </div>
        </div>
          <div className="flex flex-wrap justify-center lg:gap-20 lg:mt-5 lg:mb-20 mb-10 mt-5 sm:gap-0">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  className="card bg-white lg:w-96 sm:w-full mx-2 my-4 hover:shadow-2xl hover:shadow-slate-400 rounded-none hover:border rounded-xl border-black"
                  key={product._id}
                  style={{
                    backgroundColor: theme === "light" ? "white" : "#333",
                    color: theme === "light" ? "#333" : "#fff",
                  }}
                >
                  <figure className="px-10 pt-10">
                    <img
                      src={`${IMG_URL}/${product.image}`}
                      alt={product.name}
                      className="rounded-xl"
                      width="100px"
                      height="100px"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <p className="text-lg font-semibold text-sm font-medium md:text-md md:font-semibold">
                      {product.name}
                    </p>
                    <h2 className="font-light sm:text-lg ">
                      ₹ {product.price}
                    </h2>
                    <div className="card-actions mt-2 flex justify-between items-center">
                      <Link
                        to={`/product/${product._id}`}
                        className="btn btn lora-regular"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="btn btn lora-regular"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center mt-10 font-bold lg:text-2xl text-lg">
                No products found
              </p>
            )}
          </div>
        
      </section>
      {theme === "dark" ? <hr /> : null}
    </div>
  );
};

export default Products;

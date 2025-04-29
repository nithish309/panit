import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";
export const URL = `${import.meta.env.VITE_API_URL}`;

const ProductDetails = ({ theme }) => {
  const { id } = useParams(); // Retrieve the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product data by ID from the API
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${URL}/${id}`);
        const data = await response.json();
        setProduct(data); // Set the fetched product data to state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Show loading message if data is still being fetched
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
     // If product is not found, show a message
  if (!product) return <div>Product not found</div>;

  }

 
  return (
    <div>
      <section
        className="lora-regular lg:mt-10 mt-5 lg:mb-10 mb-5 lora-regular ml-3 mr-3"
        style={{
          backgroundColor: theme === "light" ? "white" : "#333",
          color: theme === "light" ? "#333" : "#fff",
        }}
      >
        <h1 className="text-xl font-semibold lg:text-2xl lg:font-semibold text-center">
          {product.name}
        </h1>
        <div className="flex justify-center mt-10">
          <div className="lg:w-96 sm:w-full mx-2 my-0">
            <figure className="px-10 md:flex justify-center sm:flex justify-center">
              <img
                src={`https://backendpanishop.vercel.app/products/${product._id}/image`}
                alt={product.name}
                className="rounded-xl"
                width="300px"
                height="300px"
              />
            </figure>
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h4 className="lg:font-bold lg:text-3xl text-2xl font-bold">
            ₹ {product.price}
          </h4>
          <p className="lg:mt-4 mt-0 text-md lg:text-lg text-justify ml-3 mr-3">
            {product.description}
          </p>
        </div>
      </section>
      {theme === "dark" ? <hr /> : null}
       {theme === "dark" ? <hr /> : null}
    </div>
  );
};

export default ProductDetails;

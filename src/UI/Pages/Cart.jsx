import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
export const IMG_URL = `${import.meta.env.VITE_IMAGE_URL}`;

const Cart = ({ cartItems = [], setCartItems, theme, isLoggedIn }) => {
  const navigate = useNavigate();
  const alertShown = useRef(false); // Prevent duplicate alerts

  // Redirect to login page if not logged in
  useEffect(() => {
    if (!isLoggedIn && !alertShown.current) {
      alertShown.current = true; // Mark alert as shown
      alert("Please log in to view cart");
      navigate("/login");
    }
  }, [isLoggedIn, navigate]); // Runs only once when component mounts

  // Calculate the total amount based on cart items
  const totalAmount = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  if (cartItems.length === 0) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <h1 className="lg:text-2xl font-bold lora-regular text-lg">
            Cart is empty
          </h1>
        </div>
        {theme === "dark" && <hr />}
      </>
    );
  }

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <>
      <section className="lora-regular mb-10 mt-20">
        <div className="flex flex-wrap justify-center gap-10">
          {/* Display cart items */}
          {cartItems.map((item) => (
            <div
              key={item.id} // Ensure consistency with `id`
              className="card card-side bg-base-100 shadow-xl flex flex-col items-center w-screen max-w-xs"
              style={{
                backgroundColor: theme === "light" ? "white" : "#333",
                color: theme === "light" ? "#333" : "#fff",
              }}
            >
              <figure>
                <img
                  src={`${IMG_URL}/${item.image}`} 
                  alt={item.name}
                  className="w-full h-32 object-cover"
                />
              </figure>
              <div className="card-body text-center">
                <p className="card lg:text-l lg:font-bold text-sm font-bold">
                  {item.name}
                </p>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ₹ {item.totalPrice.toFixed(2)}</p>
                <div className="card-actions center">
                  <button
                    className="btn bar"
                    onClick={() => removeFromCart(item.id)}
                    style={{ width: "200px", height: "40px" }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total amount */}
        <h3 className="text-xl font-bold mt-10 text-center">
          Total Amount: ₹ {totalAmount.toFixed(2)}
        </h3>
      </section>

      {theme === "dark" && <hr />}
    </>
  );
};

export default Cart;

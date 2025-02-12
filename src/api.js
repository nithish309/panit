// api.js

export const URL = `${import.meta.env.VITE_API_URL}`;

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};


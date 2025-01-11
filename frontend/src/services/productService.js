export const fetchProducts = async () => {
    const response = await fetch("https://api.example.com/products");
    return response.json();
  };
  
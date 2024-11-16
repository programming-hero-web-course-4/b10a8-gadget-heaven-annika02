const getStoredCart = async () => {
  const storedCartIds = JSON.parse(localStorage.getItem("cart")) || [];
  const response = await fetch("/gadget.json");
  const allProducts = await response.json();

  return storedCartIds.map((id) => {
    return allProducts.find((product) => product.product_id === id);
  });
};

const addToLS = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart.includes(id)) {
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

const removeFromLS = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const updatedCart = cart.filter((storedId) => storedId !== id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

const getStoredWishlist = async () => {
  const storedWishlistIds = JSON.parse(localStorage.getItem("wishlist")) || [];
  const response = await fetch("/gadget.json");
  const allProducts = await response.json();

  return storedWishlistIds.map((id) => {
    return allProducts.find((product) => product.product_id === id);
  });
};

const addToWishlist = (id) => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  if (!wishlist.includes(id)) {
    wishlist.push(id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
};

const removeFromWishlist = (id) => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const updatedWishlist = wishlist.filter((storedId) => storedId !== id);
  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
};
export {
  getStoredCart,
  addToLS,
  removeFromLS,
  getStoredWishlist,
  addToWishlist,
  removeFromWishlist,
};

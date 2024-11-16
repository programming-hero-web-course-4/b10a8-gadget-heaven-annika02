Live link : https://gadget-heaven-by-anika.netlify.app/

###React Fundamental Concepts Used in the Project
#Components
The project is built using React components, which serve as the fundamental building blocks of the application. Components like Dashboard, DetailsCard, Wishlist, and Root are responsible for rendering various sections of the app and managing the UI.

#State Management

1. useState: Used to manage state in components, such as wishlist and cart in the Wishlist and Dashboard components.
2. useEffect: Handles side effects like fetching data from local storage (getStoredCart, getStoredWishlist) and updating state when data is fetched or changed.

#React Router

1. NavLink: Provides navigation between different routes, such as between the Dashboard and Wishlist pages.
2. useParams: Extracts parameters from the URL (e.g., productId) to display specific product details in the DetailsCard component.
3. Outlet: Renders child components for specific routes, like displaying the dashboard or wishlist content.

#Context API

1.useOutletContext: Facilitates sharing state (like the cart) and functions (like handelAddToCart) between different components. For instance, the Dashboard and DetailsCard components access the shared cart context to handle cart-related functionality.

#Local Storage

Data like the cart and wishlist is saved to local storage, ensuring persistence across sessions. Functions like getStoredCart, addToLS, removeFromLS, getStoredWishlist, and removeFromWishlist interact with local storage to save and retrieve data.
Conditional Rendering

#The application uses conditional rendering to display content dynamically, such as showing a message when the wishlist is empty or rendering a list of gadgets based on the current state (wishlist.length === 0).

###Data Handling and Management

1. Context API

The useOutletContext hook is used to share the state (cart) and functions (handelAddToCart) across components. This allows the Dashboard and DetailsCard components to interact with the same state and add products to the cart.

2. Local Storage

Cart and Wishlist Data: Cart and wishlist information are stored in local storage to ensure data persists across page refreshes or sessions.
Functions for Managing Storage:
addToLS and removeFromLS are used to update the cart in local storage.
getStoredCart and getStoredWishlist retrieve data from local storage when the app loads.

5 Features of the Website

1. Product Catalog
   The site features a comprehensive catalog of gadgets, displayed with detailed information such as product images, titles, prices, descriptions, and more. Users can view detailed pages for each product in the DetailsCard component.

2. Add to Cart
   Users can add gadgets to their shopping cart from the Dashboard or DetailsCard components. The cart is managed with the handelAddToCart function, and the data is saved to local storage for persistence.

3. Wishlist Management
   Users can add and remove gadgets from their wishlist. The wishlist is stored in local storage and can be accessed at any time through the Wishlist component.

4. Persistent Cart and Wishlist
   Both the cart and wishlist data are saved to local storage, ensuring that user selections persist even after page reloads or returning sessions.

5. Responsive Layout
   The website is fully responsive, designed using Tailwind CSS to ensure a seamless user experience across a variety of devices, including mobile phones, tablets, and desktops.

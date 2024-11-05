
const Footer = () => {
    return (
        <div>
         <footer className="bg-gray-100 py-10">
      <div className=" w-11/12 mx-auto text-center">
        <h2 className="text-xl font-bold text-gray-900">Gadget Heaven</h2>
        <p className="text-gray-600 mt-2">Leading the way in cutting-edge technology and innovation.</p>
        <div className="divider"></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          <div>
            <h3 className="text-gray-900 font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              <li><a href="#product-support" className="text-gray-600 hover:underline">Product Support</a></li>
              <li><a href="#order-tracking" className="text-gray-600 hover:underline">Order Tracking</a></li>
              <li><a href="#shipping-delivery" className="text-gray-600 hover:underline">Shipping & Delivery</a></li>
              <li><a href="#returns" className="text-gray-600 hover:underline">Returns</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about-us" className="text-gray-600 hover:underline">About Us</a></li>
              <li><a href="#careers" className="text-gray-600 hover:underline">Careers</a></li>
              <li><a href="#contact" className="text-gray-600 hover:underline">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#terms-of-service" className="text-gray-600 hover:underline">Terms of Service</a></li>
              <li><a href="#privacy-policy" className="text-gray-600 hover:underline">Privacy Policy</a></li>
              <li><a href="#cookie-policy" className="text-gray-600 hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;
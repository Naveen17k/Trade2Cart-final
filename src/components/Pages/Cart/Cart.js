import React, { useState } from 'react';
import { FaTrashAlt, FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../Cart/CartContext'; // Adjust import path

const CartPage = () => {
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const { cart, removeFromCart, updateCartItemQuantity } = useCart();

  const safePrice = (price) => {
    return typeof price === 'number' ? price : parseFloat(price.replace(/₹|,/g, '')) || 0;
  };

  const totalPrice = cart.reduce((total, item) => total + safePrice(item.price) * item.quantity, 0);

  const handleQuantityChange = (id, quantity) => {
    updateCartItemQuantity(id, quantity);
  };

  const formatWhatsAppMessage = () => {
    let message = "Here's my cart:\n\n";
    cart.forEach(item => {
      const price = safePrice(item.price);
      const totalItemPrice = price * item.quantity;
      message += `${item.name} - ${item.quantity} x ₹${price.toFixed(2)} = ₹${totalItemPrice.toFixed(2)}\n`;
    });
    message += `\nTotal Price: ₹${totalPrice.toFixed(2)}\n\n`;
    message += `Customer Details:\nName: ${customerDetails.name}\nEmail: ${customerDetails.email}\nAddress: ${customerDetails.address}\nPhone: ${customerDetails.phone}`;
    return encodeURIComponent(message);
  };

  const handleWhatsAppShare = () => {
    const phoneNumber = '+918903646525'; // Use your desired phone number here
    const message = formatWhatsAppMessage();
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');

    handleCheckout();

    // Reload the page automatically after WhatsApp message is sent
    setTimeout(() => {
      window.location.reload();  // This will refresh the page
    }, 2000); // Adding delay to ensure the message is sent before refreshing
  };


  const handleCheckout = () => {
    alert("Checkout process initiated.");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold mb-6 text-green-600 flex items-center">
          <FaShoppingCart size={30} className="mr-2" /> Your Cart
        </h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Cart Items Table */}
          <div className="flex-1 bg-white shadow-lg rounded-lg overflow-x-auto">
            <div className="space-y-4">
              {cart.map((product) => (
                <div key={product.id} className="border-b p-4 flex flex-col sm:flex-row items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full sm:w-24 h-24 object-cover mr-4 mb-4 sm:mb-0"
                  />
                  <div className="flex-1 text-left border-t sm:border-none border-gray-300 sm:pt-0 pt-2">
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-gray-600">₹{safePrice(product.price).toFixed(2)}</p>
                  </div>
                  <div className="flex items-center mt-2 sm:mt-0 border-t sm:border-none border-gray-300 sm:pt-0 pt-2">
                    <button
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l hover:bg-gray-300"
                      onClick={() => handleQuantityChange(product.id, Math.max(product.quantity - 1, 1))}
                    >
                      <FaMinus />
                    </button>
                    <span className="px-3">{product.quantity}</span>
                    <button
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r hover:bg-gray-300"
                      onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <div className="text-right mt-2 sm:mt-0 border-t sm:border-none border-gray-300 sm:pt-0 pt-2">
                    <p className="text-gray-900">
                      ₹{(safePrice(product.price) * product.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="ml-4 text-right border-t sm:border-none border-gray-300 sm:pt-0 pt-2">
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}


              <div className="py-6 text-center text-gray-600">Your cart is empty.</div>

            </div>
            {/* Total Price Display */}
            {cart.length > 0 && (
              <div className="bg-gray-50 p-4 border-t border-gray-200 text-right">
                <h2 className="text-xl font-semibold text-gray-800">
                  Total Price: ₹{totalPrice.toFixed(2)}
                </h2>
              </div>
            )}
          </div>

          {/* Customer Details Form */}
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Customer Details</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={customerDetails.name}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={customerDetails.email}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, email: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="address">Address</label>
                <textarea
                  id="address"
                  rows="3"
                  value={customerDetails.address}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, address: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  value={customerDetails.phone}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <button
                type="button"
                onClick={handleWhatsAppShare}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Share via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

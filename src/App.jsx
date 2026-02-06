import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
<div className="bg-white p-6 rounded-xl shadow">
  ...
</div>

export default function ZingoWebsite() {
  const products = [
    { name: "Grape", image: "/grape.jpg", price: 20 },
    { name: "Blueberry", image: "/blueberry.jpg", price: 20 },
    { name: "Nimbu Masala", image: "/nimbu.jpg", price: 20 },
    { name: "Kokum Jeera", image: "/kokum.jpg", price: 20 },
    { name: "Apple Mojito", image: "/apple.jpg", price: 20 },
    { name: "Mango", image: "/mango.jpg", price: 20 },
  ];

  const [cart, setCart] = useState([]);

const addToCart = (product) => {
  setCart((prev) => [...prev, product]);
};
  
    const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleDistributorSubmit = (e) => {
  e.preventDefault();
  const form = new FormData(e.target);

  const message = encodeURIComponent(
    `New Distributor Inquiry:
Business: ${form.get("business")}
Name: ${form.get("name")}
Email: ${form.get("email")}
Phone: ${form.get("phone")}
City: ${form.get("city")}`
  );

  window.open(`https://wa.me/916309587401?text=${message}`, "_blank");
};
  
  const handleCheckout = () => {
    if (cart.length === 0) return;

    const items = cart.map((item) => item.name).join(", ");
    const message = `New Order:%0AItems: ${items}%0ATotal: ₹${total}`;

    window.open(`https://wa.me/916309587401?text=${message}`, "_blank");
  };

  const handleRazorpayPayment = () => {
    alert(
      "Connect your Razorpay key here. Replace this function with Razorpay checkout integration."
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="w-full shadow-sm sticky top-0 bg-white z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-green-600">Zingo Goli</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#home" className="hover:text-green-600">Home</a>
            <a href="#products" className="hover:text-green-600">Products</a>
            <a href="#gallery" className="hover:text-green-600">Gallery</a>
            <a href="#distributor" className="hover:text-green-600">Distributors</a>
            <a href="#contact" className="hover:text-green-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Premium Hero */}
      <section
        id="home"
        className="bg-gradient-to-br from-green-100 via-yellow-50 to-white py-24"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl font-extrabold leading-tight">
              Pop the Fun.
              <span className="text-green-600 block">
                Taste the Zing.
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              A modern twist on the classic goli soda. Bright flavors,
              refreshing fizz, and fun in every bottle.
            </p>
            <div className="mt-8 flex gap-4">
              <Button className="rounded-2xl px-8 py-4 text-lg">
                Shop Now
              </Button>
              <Button variant="outline" className="rounded-2xl px-8 py-4 text-lg">
                Become Distributor
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-96 rounded-3xl overflow-hidden"
          >
            <img
              src="/zingo-bottles.jpg"
              alt="Zingo Goli Flavors"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center">Order Online</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {products.map((product) => (
              <Card key={product.name} className="rounded-2xl shadow-sm">
                <CardContent className="p-6 text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 mx-auto object-contain mb-4"
                  />
                  <h4 className="text-xl font-semibold">{product.name}</h4>
                  <p className="text-green-600 font-bold mt-1">₹{product.price}</p>
                  <Button
                    className="mt-4 rounded-xl"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cart */}
          {cart.length > 0 && (
            <div className="mt-12 p-6 bg-gray-100 rounded-2xl">
              <h4 className="text-xl font-bold">Cart Total: ₹{total}</h4>
              <Button className="mt-4 rounded-xl" onClick={handleCheckout}>
                Proceed to Payment
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center">Product Gallery</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {products.map((product) => (
              <div
                key={product.name}
                className="rounded-2xl overflow-hidden shadow-sm bg-white p-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-contain"
                />
                <p className="text-center font-medium mt-3">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distributor Section */}
      <section id="distributor" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center">
            Become a Distributor
          </h3>
          <form className="mt-8 grid gap-4" onSubmit={handleDistributorSubmit}>
            <input name="business" type="text" placeholder="Business Name" className="border rounded-xl p-3" required />
            <input name="name" type="text" placeholder="Contact Person" className="border rounded-xl p-3" required />
            <input name="email" type="email" placeholder="Email" className="border rounded-xl p-3" required />
            <input name="phone" type="tel" placeholder="Phone" className="border rounded-xl p-3" required />
            <textarea name="city" placeholder="City / Region" className="border rounded-xl p-3" required></textarea>
            <Button className="rounded-2xl py-3" type="submit">Submit on WhatsApp</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
        © {new Date().getFullYear()} Zingo Goli. All rights reserved.
      </footer>
    </div>
  );
}

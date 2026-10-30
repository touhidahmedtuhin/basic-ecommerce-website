import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const categories = [
    { name: "Beauty", emoji: "💄", color: "bg-pink-100" },
    { name: "Fragrances", emoji: "🌸", color: "bg-purple-100" },
    { name: "Furniture", emoji: "🛋️", color: "bg-yellow-100" },
    { name: "Groceries", emoji: "🛒", color: "bg-green-100" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Hero Section */}
      <section className="grid items-center gap-6 bg-linear-to-r from-indigo-50 to-purple-100 px-5 py-10 md:grid-cols-2 md:px-10 md:py-14">

        <div>
          <span className="inline-block rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-indigo-600 shadow-sm">
            ✨ Discover Your Style
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Find Your
            <span className="block text-indigo-600">Perfect Products</span>
            For Everyday Life.
          </h1>

          <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
            Discover amazing products at great prices. Shop your favorites and
            make every day a little more special.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-indigo-700"
            >
              Explore Products →
            </Link>

            <a
              href="#categories"
              className="rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold transition hover:bg-gray-50"
            >
              Browse Categories
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-6">
            <div>
              <h3 className="text-xl font-bold">1000+</h3>
              <p className="text-xs text-gray-500">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">500+</h3>
              <p className="text-xs text-gray-500">Products</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">24/7</h3>
              <p className="text-xs text-gray-500">Support</p>
            </div>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="flex justify-center py-3">
          <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-white shadow-lg md:h-64 md:w-64">
            <div className="text-center">
              <span className="text-7xl">🛍️</span>
              <p className="mt-3 text-sm font-bold text-indigo-600">
                Your Style, Your Choice
              </p>
            </div>

            <div className="absolute -right-2 top-5 rounded-lg bg-white px-3 py-2 shadow-md">
              <p className="text-xs font-bold">🔥 Great Deals</p>
            </div>

            <div className="absolute -bottom-1 -left-3 rounded-lg bg-white px-3 py-2 shadow-md">
              <p className="text-xs font-bold">✨ Great Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="px-5 py-10 md:px-10">

        <div className="mb-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-indigo-600">
              SHOP BY CATEGORY
            </p>
            <h2 className="mt-1 text-2xl font-bold">
              Explore Categories
            </h2>
          </div>

          <Link
            to="/products"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {categories.map((category) => (
            <Link
              to="/products"
              key={category.name}
              className={`${category.color} rounded-xl p-4 text-center transition hover:-translate-y-1 hover:shadow-md`}
            >
              <span className="text-3xl">{category.emoji}</span>

              <h3 className="mt-2 text-sm font-bold">
                {category.name}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Explore collection →
              </p>
            </Link>
          ))}
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t bg-gray-50 px-5 py-5 text-center">

        <Link to="/" className="text-lg font-extrabold text-indigo-600">
          ShopEase.
        </Link>

        <p className="mt-2 text-xs text-gray-500">
          Discover products you'll love. © {new Date().getFullYear()} ShopEase.
        </p>
      </footer>

    </div>
  );
}

export default Home;
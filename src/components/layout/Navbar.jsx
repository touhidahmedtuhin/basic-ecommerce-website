import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-blue-400">
              eShop
            </h1>

            {/* Nav Links */}
            <ul className="flex gap-6 font-medium">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/signin"
                  className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};
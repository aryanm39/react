import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center p-4 bg-gray-100">
  <h1 className="text-2xl font-bold text-pink-600 mx-auto">The Dojo Blog</h1>
  <div className="links space-x-4">
    <Link to="/" className="text-gray-700 hover:text-pink-600">
      Home
    </Link>
    <Link
      to="/create"
      className="text-white bg-pink-600 px-4 py-2 rounded hover:bg-pink-700"
    >
      New Blog
    </Link>
  </div>
</nav>
  );
}
 
export default Navbar;



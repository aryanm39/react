import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found text-center p-10 space-y-4">
    <h2 className="text-2xl font-bold">Sorry</h2>
    <p className="text-gray-500">That page cannot be found</p>
    <Link to="/" className="text-pink-600 hover:underline">
    Back to the homepage...
    </Link>
    </div>
  );
}
 
export default NotFound;



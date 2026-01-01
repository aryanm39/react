import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
   <div className="home max-w-4xl mx-auto p-6">
  {error && <div className="text-red-500">{error}</div>}
  {isPending && <div className="text-gray-500">Loading...</div>}
  {blogs && <BlogList blogs={blogs} />}
  </div>  
  );
}
 
export default Home;





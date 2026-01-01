import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="blog-details max-w-3xl mx-auto p-6">
  {isPending && <div className="text-gray-500">Loading...</div>}
  {error && <div className="text-red-500">{error}</div>}
  {blog && (
    <article className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
      <p className="text-sm text-gray-500">Written by {blog.author}</p>
      <div className="text-gray-700 leading-relaxed">{blog.body}</div>
      <button
        onClick={handleClick}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        delete
      </button>
    </article>
  )}
  </div>
  );
}
 
export default BlogDetails;





import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
  <div className="blog-list space-y-4">
  {blogs.map(blog => (
    <div
      className="blog-preview p-4 border rounded hover:shadow-md transition"
      key={blog.id}
    >
      <Link to={`/blogs/${blog.id}`} className="block space-y-1">
        <h2 className="text-xl font-semibold text-pink-600">
          {blog.title}
        </h2>
        <p className="text-sm text-gray-500">
          Written by {blog.author}
        </p>
      </Link>
    </div>
  ))}
</div>
  );
}
 
export default BlogList;






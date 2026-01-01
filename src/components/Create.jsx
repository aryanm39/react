import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
   <div className="create max-w-2xl mx-auto p-6">
  <h2 className="text-2xl font-bold mb-6">Add a New Blog</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <label className="block text-sm font-medium">Blog title:</label>
    <input
      type="text"
      required
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="w-full border p-2 rounded"
    />

    <label className="block text-sm font-medium">Blog body:</label>
    <textarea
      required
      value={body}
      onChange={(e) => setBody(e.target.value)}
      className="w-full border p-2 rounded h-32"
    ></textarea>

    <label className="block text-sm font-medium">Blog author:</label>
    <select
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
      className="w-full border p-2 rounded"
    >
      <option value="mario">mario</option>
      <option value="yoshi">yoshi</option>
    </select>

    <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
      Add Blog
    </button>
  </form>
</div>
  );
}
 
export default Create;




import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/postService';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Carregando posts...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Posts do Blog</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">
              {post.body.length > 100
                ? post.body.substring(0, 100) + '...'
                : post.body}
            </p>
            <Link
              to={`/post/${post.id}`}
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Ler mais
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
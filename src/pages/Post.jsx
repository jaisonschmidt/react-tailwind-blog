import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostById } from '../services/postService';

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const data = await getPostById(id);
        setPost(data);
      } catch (error) {
        setPost(null);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10">Carregando post...</div>;
  }

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto py-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Post não encontrado</h1>
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Voltar para Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-8 whitespace-pre-line">{post.body}</p>
      <Link
        to="/"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Voltar para Home
      </Link>
    </div>
  );
}

export default Post;
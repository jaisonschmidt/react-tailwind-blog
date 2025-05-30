const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function getPosts() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Erro ao buscar posts');
  }
  return response.json();
}

export async function getPostById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar o post');
  }
  return response.json();
}
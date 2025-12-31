const KEY = "dayono-posts";

export function getPosts() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function getPostById(id) {
  return getPosts().find(p => p.id === Number(id));
}

export function savePost(post) {
  const posts = getPosts();
  const existingIndex = posts.findIndex(p => p.id === post.id);

  if (existingIndex >= 0) {
    posts[existingIndex] = post; // перезапись поста с таким же id
  } else {
    posts.push(post);
  }

  localStorage.setItem(KEY, JSON.stringify(posts));
}

export function deletePost(id) {
  const posts = getPosts().filter(p => p.id !== Number(id));
  localStorage.setItem(KEY, JSON.stringify(posts));
}

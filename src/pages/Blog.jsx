import { Link } from "react-router-dom";
import { getPosts } from "../utils/blogStorage";
import "./styles/blog.css"

export default function Blog() {
  const posts = getPosts();

  return (
    <main className="page">
      <div className="container">
        <h1>Блог</h1>

        {posts.length === 0 && <p>Записей пока нет</p>}

        {posts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-date">{post.date}</div>

            <h3>
              <Link to={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </h3>

            <p>
              {post.text.slice(0, 120)}...
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}

import { useParams } from "react-router-dom";
import { getPostById } from "../utils/blogStorage";

export default function BlogPost() {
  const { id } = useParams();
  const post = getPostById(id);

  if (!post) {
    return (
      <main className="page">
        <div className="container">
          <p>Запись не найдена</p>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="container">
        <div className="blog-date">{post.date}</div>
        <h1>{post.title}</h1>
        <p>{post.text}</p>
      </div>
    </main>
  );
}

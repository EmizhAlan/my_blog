import { useState, useEffect } from "react";
import { getData, saveData } from "../utils/storage";
import { getPosts, savePost, deletePost } from "../utils/blogStorage";
import "./styles/Admin.css";

export default function Admin() {
  // ===== данные главной страницы =====
  const [day, setDay] = useState(getData().day);
  const [total, setTotal] = useState(getData().total);

  const saveMainData = () => {
    saveData({ day: Number(day), total: Number(total) });
    alert("Данные главной страницы сохранены");
  };

  // ===== блог-посты =====
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null); // ID редактируемого поста

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const handleSavePost = () => {
    if (!id || !date || !title || !text) {
      alert("Заполните все поля для поста");
      return;
    }

    savePost({ id: Number(id), date, title, text });
    setPosts(getPosts());
    alert(editingId ? "Пост обновлён" : "Пост сохранён");

    // Сброс формы после сохранения
    setId("");
    setDate("");
    setTitle("");
    setText("");
    setEditingId(null);
  };

  const handleDeletePost = (postId) => {
    if (window.confirm("Удалить эту запись?")) {
      deletePost(postId);
      setPosts(getPosts());
    }
  };

  const handleEditPost = (post) => {
    setId(post.id);
    setDate(post.date);
    setTitle(post.title);
    setText(post.text);
    setEditingId(post.id);
    window.scrollTo({ top: 0, behavior: "smooth" }); // прокрутка вверх к форме
  };

  const addPostFromDay = () => {
    savePost({
      id: day,
      date: new Date().toISOString().slice(0, 10),
      title: `День ${day}`,
      text: `Сегодня я отложил ${day} ₽.`,
    });
    setPosts(getPosts());
    alert("Пост добавлен на основе текущего дня");
  };

  return (
    <main className="page">
      <div className="container">
        <div className="admin">

          {/* ===== Главная страница ===== */}
          <h2>Данные главной страницы</h2>

          <label>
            День
            <input
              type="number"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
          </label>

          <label>
            Накоплено
            <input
              type="number"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
            />
          </label>

          <button onClick={saveMainData}>Сохранить главные данные</button>
          <button onClick={addPostFromDay}>Добавить пост на основе дня</button>

          <hr style={{ margin: "24px 0" }} />

          {/* ===== Блог-посты ===== */}
          <h2>Админ-панель блога</h2>

          <label>
            ID (день)
            <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
          </label>

          <label>
            Дата
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>

          <label>
            Заголовок
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>

          <label>
            Текст
            <textarea value={text} onChange={(e) => setText(e.target.value)} rows={5} />
          </label>

          <button onClick={handleSavePost}>
            {editingId ? "Сохранить изменения" : "Сохранить пост"}
          </button>

          <h3>Существующие записи</h3>
          {posts.length === 0 && <p>Постов пока нет</p>}
          {posts.map(post => (
            <div key={post.id} className="blog-admin-item">
              <span>{post.date} — {post.title}</span>
              <div>
                <button onClick={() => handleEditPost(post)}>Редактировать</button>
                <button onClick={() => handleDeletePost(post.id)}>Удалить</button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}

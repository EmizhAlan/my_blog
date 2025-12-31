import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Dayone</p>
      </div>
    </footer>
  );
}
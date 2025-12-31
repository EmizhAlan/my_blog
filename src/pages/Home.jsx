import { useEffect, useState } from "react";
import DayCircle from "../components/DayCircle";
import { getData } from "../utils/storage";

export default function Home() {
  const [data, setData] = useState(getData());

  useEffect(() => {
    const handler = () => setData(getData());
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  return (
    <main>
      <div className="container">
        <DayCircle day={data.day} total={data.total} />
      </div>
    </main>
  );
}

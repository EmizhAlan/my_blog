import "./styles/DayCircle.css";

export default function DayCircle({ day, total }) {
  return (
    <div className="day-circle-wrapper">
      <div className="day-circle">
        <div className="day-number">{day}</div>
        <div className="day-label">день</div>
      </div>

      <div className="total">
        Накоплено: <strong>{total} ₽</strong>
      </div>
    </div>
  );
}

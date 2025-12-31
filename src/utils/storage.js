const KEY = "dayono-data";

export function getData() {
  return JSON.parse(localStorage.getItem(KEY)) || {
    day: 1,
    total: 0,
  };
}

export function saveData(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

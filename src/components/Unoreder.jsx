import List from "./List.jsx";

export default function Unorder({ helpList }) {
  return (
    <ul className="unorderlist">
      {helpList.map((item, index) => (
        <List key={index} item={item} url={item} />
      ))}
    </ul>
  );
}

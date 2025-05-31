export default function List({ item, index, url }) {
  url = "#" + url;

  return (
    <li>
      <a className="listItem" href={url}>
        {item}
      </a>
    </li>
  );
}

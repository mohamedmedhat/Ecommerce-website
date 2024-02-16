import { Link } from "react-router-dom";
import { links } from "./links";

export default function Navbar() {
  return (
    <div className="flex p-4 bg-zinc-700 text-center text-gray-200 items-center justify-between">
      <div className="text-lg">Shopa</div>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

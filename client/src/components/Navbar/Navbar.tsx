import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex p-4 bg-zinc-700 text-center text-gray-200 items-center justify-between">
      <div className="text-lg">Shopa</div>
      <ul className="flex gap-2 hover:text-white">
        <li>
          <Link to=''>Cart</Link>
        </li>
        <li>
          <Link to='/signin'>Sign In</Link>
        </li>
      </ul>
    </div>
  );
}

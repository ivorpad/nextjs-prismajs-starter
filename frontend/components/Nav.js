import Link from "next/link";
import "../styles/index.css";

function Nav() {
  return (
    <nav>
      <Link href="/login">
        <a>login</a>
      </Link>
      <Link href="/about">
        <a className="ml-4">about</a>
      </Link>
    </nav>
  );
}

export default Nav

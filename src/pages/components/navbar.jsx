import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b-2 border-gray-800 p-4">
      <ul className="flex flex-col md:flex-row md:justify-evenly">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="components/events">Events</Link>
        </li>
        <li>
          <Link href="components/contact">Contact</Link>
        </li>
        <li>
          <Link href="components/login">Log in</Link>
        </li>
        <li>
          <Link href="components/about">About us</Link>
        </li>
      </ul>
    </nav>
  );
}

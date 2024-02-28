import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between max-w-7xl m-auto py-12">
      <h2 className="font-bold text-2xl">brand name</h2>
      <nav>
        <ul className="flex gap-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/sign-up">Register</Link>
          </li>
          <li>
            <Link href="/sign-in">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

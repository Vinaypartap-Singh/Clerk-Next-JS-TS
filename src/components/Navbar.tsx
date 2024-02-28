import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";

export default function Navbar() {
  const { userId } = auth();

  return (
    <header className="flex items-center justify-between max-w-7xl m-auto py-12">
      <h2 className="font-bold text-2xl">brand name</h2>
      <nav>
        <ul className="flex gap-10 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          {!userId ? (
            <>
              <li>
                <Link href="/sign-up">Register</Link>
              </li>
              <li>
                <Link href="/sign-in">Login</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <UserButton afterSignOutUrl="/" />
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

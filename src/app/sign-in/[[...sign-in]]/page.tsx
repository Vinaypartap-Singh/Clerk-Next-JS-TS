import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex justify-center items-center flex-col gap-10">
      <SignIn />
      <p>
        Forgot Password{" "}
        <Link href="/forgot-password" className="text-blue-500">
          Change Password
        </Link>
      </p>
    </main>
  );
}

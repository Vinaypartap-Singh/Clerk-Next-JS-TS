import { UserButton, currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  console.log(user?.id);
  return (
    <main className="max-w-7xl m-auto">
      <h1 className="font-bold text-3xl">
        Hello, {user?.username?.toUpperCase()}
      </h1>
    </main>
  );
}

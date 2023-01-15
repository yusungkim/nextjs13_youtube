import Link from "next/link";

export default function () {
  return (
    <header className="p-5 bg-blue-500 flex gap-5">
      <Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded-md">
        Home
      </Link>
      <Link href="/todos" className="px-2 py-1 bg-white text-blue-500 rounded-md">
        Todos
      </Link>
    </header>
  )
}
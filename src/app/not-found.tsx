import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1>This Page does not exist ! </h1>
      <Link href={"/"} className="mt-4 text-blue-500 hover:underline">
        Go Home
      </Link>
    </div>
  );
}

export default NotFoundPage;

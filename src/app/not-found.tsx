import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, we couldn't find what you were looking for.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}

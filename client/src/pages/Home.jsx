import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home-page-container h-screen flex justify-center items-center">
      <Link to="todo" className="title text-3xl">
        Let&apos;s visit todo page!
      </Link>
      <h1>monir</h1>
      <h1>monir</h1>
      <h1>monir</h1>
    </section>
  );
}

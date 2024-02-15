import { Link } from "react-router-dom";
import UseStateHook from "../Hooks/UseStateHook";
import UseAuth from "../Hooks/UseAuth";

export default function Home() {
  const { state } = UseStateHook();
  const { loading, test } = UseAuth();

  // console.log(test);

  // console.log(state);
  return (
    <section className="home-page-container h-screen flex justify-center items-center ">
      <Link to="todo" className="title text-3xl">
        Let&apos;s visit todo page!
      </Link>
      <h1>monir</h1>
      <h1>monir</h1>
      <h1>monir</h1>
    </section>
  );
}

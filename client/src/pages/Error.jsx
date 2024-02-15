import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <section className="flex flex-col h-screen items-center justify-center text-3xl">
      <h1>Oops!</h1>
      <p>404 page not found!</p>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </section>
  );
}

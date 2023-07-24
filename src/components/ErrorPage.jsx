import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="flex justify-center items-center h-screen px-4 md:px-0">
      <div>
        <img
          src="/404.jpg"
          className="object-fill h-64 w-96"
          alt=""
        />
        <p className="text-center">
          <i className="text-4xl text-white font-semibold ">
            {error.statusText || error.message}
          </i>
        </p>
      </div>
    </div>
  );
}

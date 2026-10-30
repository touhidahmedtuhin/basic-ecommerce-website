import { Link, useRouteError } from "react-router-dom";

const Page404 = () => {
  const error = useRouteError();

  const status = error?.status || 404;
  const message =
    error?.statusText || error?.message || "Page Not Found";

  return (
    <div className="flex min-h-screen items-center justify-center from-indigo-50 via-white to-purple-100 px-4">
      <div className="w-full max-w-lg text-center">

        <h1 className="text-9xl font-extrabold tracking-widest text-indigo-600">
          {status}
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-gray-500">
          Sorry, {message}.
        </p>

        <div className="my-8 flex justify-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-indigo-100 text-7xl shadow-inner">
            🚀
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-400">
          Error Code: {status}
        </p>

      </div>
    </div>
  );
};

export default Page404;
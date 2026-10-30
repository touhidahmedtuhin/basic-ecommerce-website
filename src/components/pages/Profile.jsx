import { useLocation } from "react-router-dom";

const Profile = () => {
  const { state } = useLocation();

  return (
    <>
      {state ? (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
          <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
              User Profile
            </h2>

            <div className="space-y-4">
              <div className="border-b pb-2">
                <p className="text-gray-500 font-medium">User Name</p>
                <p className="text-lg font-semibold">{state.name}</p>
              </div>

              <div className="border-b pb-2">
                <p className="text-gray-500 font-medium">Email</p>
                <p className="text-lg font-semibold">{state.email}</p>
              </div>

              <div className="border-b pb-2">
                <p className="text-gray-500 font-medium">Phone</p>
                <p className="text-lg font-semibold">{state.phone}</p>
              </div>

              <div>
                <p className="text-gray-500 font-medium">City</p>
                <p className="text-lg font-semibold">{state.city}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>user is not found </p>
      )}
    </>
  );
};

export default Profile;

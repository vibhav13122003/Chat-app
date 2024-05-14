import useLogout from "../hooks/useLogout"
import { CiLogout } from "react-icons/ci";

const LogoutButton = () => {
  const {loading,logout}=useLogout();
  return (
    <div className='mt-auto'>
      {!loading ? (
        <div className='w-6 h-6 text-yellow-50'>
          <button onClick={logout}>
            {" "}
            <CiLogout />
            Logout
          </button>
        </div>
      ) : (
        <span>loading</span>
      )}
    </div>
  );
}

export default LogoutButton

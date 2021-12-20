import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avator from "./Avator";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();
  const { isAuthenticated, logout } = useMoralis();
  return (
    <div
      className=" sticky top-0 p-2 z-50 bg-black shadow-sm 
    text-pink-500 border-b-2 ml-10 mr-10 border-pink-700"
    >
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className=" relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className=" rounded-full"
            src="/images/abc.jpg"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className=" relative h-40 w-40 lg:mx-auto border-pink-600 border-8 rounded-full">
            <Avator />
          </div>
          <h1 className=" text-2xl ">Welcome to Metaverse Chat</h1>
          <h2 className=" text-2xl truncate">{user.getUsername()}</h2>
          {/* change user name */}
          <ChangeUsername />
          <button
            className="text-sm absolute top-12  right-20"
            onClick={logout}
          >
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

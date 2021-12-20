import { useMoralis } from "react-moralis";
import Image from "next/image";

function Avator(username, logoutOnPress) {
  const { user, logout } = useMoralis();
  return (
    <Image
      className=" rounded-full bg-black cursor-pointer hover:opacity-70"
      layout="fill"
      onClick={() => logoutOnPress && logout()}
      src={`https://avatars.dicebear.com/api/pixel-art/ ${
        username || user.get("username")
      }.svg`}
    />
  );
}

export default Avator;

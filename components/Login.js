import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className=" bg-black relative">
      <h1> I am the Loging Screen</h1>
      <div className=" flex flex-col absolute z-50 h-4/6 w-full items-center justify-center">
        <Image src="https://links.papareact.com/3pi" height={200} width={200} />
        <button
          onClick={authenticate}
          className=" bg-orange-500  rounded-lg p-4 mt-3 text-center font-bold "
        >
          Login to metaverse!
        </button>
      </div>

      <div className=" w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;

import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import React from "react";
import Header from "../components/Header";
import Messages from "../components/Messages";
import SendMessage from "../components/SendMessage";

export default function Home() {
  const { isAuthenticated, user, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className=" h-screen overflow-y-scroll bg-gradient-to-b from-black to bg-fuchsia-900 overflow-hidden">
      <Head>
        <title>My metaver Challenge</title>
      </Head>

      <div className=" max-w-screen-2xl mx-auto">
        <Header />
        <Messages />
      </div>

      <button onClick={logout}> LOGOUT</button>
    </div>
  );
}

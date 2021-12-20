import { ByMoralis, useMoralis } from "react-moralis";
import { useState } from "react";
function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          alert("Successfully Send Message!");
        },
        (error) => {
          console.log(error.message);
        }
      );
    endOfMessagesRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setMessage("");
  };

  return (
    <form
      className=" flex fixed bottom-8 bg-black opacity-75  first-letter:
     px-6 max-w-screen-2xl shadow-xl rounded-full border-blue-500 border-4"
    >
      <input
        className=" flex-grow outline-none bg-transparent
         p-2 text-white placeholder-gray-500 pr-15"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter your message ${user.getUsername()}`}
      />

      <button
        onClick={sendMessage}
        type="submit"
        className=" font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;

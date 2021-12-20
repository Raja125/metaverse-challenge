import { useMoralis } from "react-moralis";

useMoralis;
function Message({ message }) {
  return (
    <div>
      <p> {message.get("message")}</p>
    </div>
  );
}

export default Message;

import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";
import { useRef } from "react";
import Mychat from "./Mychat";
import Message from "./Message";
const MINS_DURATION = 15;
function Messages() {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    { live: true }
  );
  console.log(data);
  return (
    <div className=" pb-56">
      <div className=" mt-1">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
      <div className=" space-y-5 p-1">
        {data.map((message) => (
          <Message />
        ))}
        <Mychat />
      </div>
      <div className=" flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div ref={endOfMessagesRef} className=" text-center text-gray-500 mt-1">
        <h1> You're upto date {user.getUsername()}</h1>
      </div>
    </div>
  );
}

export default Messages;

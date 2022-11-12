import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

const page = () => {
  return (
    <main>
      <MessageList />
      <ChatInput />
    </main>
  );
};

export default page;

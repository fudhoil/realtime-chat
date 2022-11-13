import { Message } from "../typings";
import ChatInput from "./(components)/ChatInput";
import MessageList from "./(components)/MessageList";

const HomePage = () => {
  return (
    <main>
      <MessageList />
      <ChatInput />
    </main>
  );
};

export default HomePage;

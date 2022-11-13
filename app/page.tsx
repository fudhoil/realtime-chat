import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
// import { unstable_getServerSession } from "next-auth/next";

const HomePage = () => {
  // const session = await unstable_getServerSession();

  return (
    <main>
      <MessageList />
      <ChatInput />
    </main>
  );
};

export default HomePage;

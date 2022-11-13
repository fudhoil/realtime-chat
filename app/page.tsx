import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import { unstable_getServerSession } from "next-auth/next";

const HomePage = async () => {
  const messages = await fetch(
    `${process.env.VERCEL_URL || "http://localhost:3000"}/api/getMessages`
  )
    .then((res) => res.json())
    .then((data) => data.messages);

  const session = await unstable_getServerSession();

  return (
    <main>
      <MessageList />
      <ChatInput session={session} />
    </main>
  );
};

export default HomePage;

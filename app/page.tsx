import { Message } from "../typings";
import ChatInput from "./(components)/ChatInput";
import MessageList from "./(components)/MessageList";

const HomePage = async () => {
  const data = await fetch(
    `${process.env.VERCEL_URL || "http://localhost:3000"}/api/getMessages`
  ).then((res) => res.json());

  const messages: Message[] = data.messages;

  return (
    <main>
      <MessageList initialMessages={messages} />
      <ChatInput />
    </main>
  );
};

export default HomePage;

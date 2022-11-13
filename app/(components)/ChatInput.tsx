"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Message } from "../../typings";
import useSWR from "swr";
import fetcher from "../../utils/fetchMessages";
// import { unstable_getServerSession } from "next-auth/next";
import { useSession } from "next-auth/react";

// type Props = {
//   session: Awaited<ReturnType<typeof unstable_getServerSession>>;
// };

const ChatInput = () => {
  const [input, setInput] = React.useState("");
  const {
    data: messages,
    error,
    mutate,
  } = useSWR<Message[]>("/api/getMessages", fetcher);
  const { data: sessionData } = useSession();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input === "") return;

    const messageToSend = input;

    setInput("");

    const id = uuidv4();

    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      user: {
        username: sessionData?.user?.name!,
        email: sessionData?.user?.email!,
        avatar: sessionData?.user?.image!,
      },
    };

    const uploadMessageToUpstash = async () => {
      const data = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      }).then((res) => res.json());

      return [data.message, ...messages!];
    };

    await mutate(uploadMessageToUpstash, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        fixed bottom-0 w-full
        flex items-center justify-between
        p-4 border-t border-gray-300
        bg-white">
      <input
        type="text"
        className="
            flex-grow
            h-10 px-5
            mr-4
            rounded-full
            border border-gray-300
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-transparent
            disabled:opacity-50
            "
        placeholder="Type a message"
        value={input}
        disabled={!sessionData}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        disabled={!sessionData}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-blue-200">
        Send
      </button>
    </form>
  );
};

export default ChatInput;

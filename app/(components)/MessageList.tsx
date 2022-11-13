"use client";

import { Message } from "../../typings";
import fetcher from "../../utils/fetchMessages";
import useSWR from "swr";
import MessageComponent from "./MessageComponent";
import { useEffect, useRef } from "react";
import { clientPusher } from "../../pusher";

const MessageList = () => {
  const {
    data: messages,
    error,
    mutate,
  } = useSWR<Message[]>("/api/getMessages", fetcher);

  const messageRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const channel = clientPusher.subscribe("messages");

    channel.bind("new-message", async (data: Message) => {
      if (messages?.find((message) => message.id === data.id)) return;

      if (!messages) {
        mutate(fetcher);
      } else {
        mutate(fetcher, {
          optimisticData: [data, ...messages!],
          rollbackOnError: true,
        });
      }
    });

    if (messages) {
      messageRef.current!.scrollIntoView({ behavior: "smooth" });
    }

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, mutate]);

  return (
    <>
      <div className="flex flex-col scrollbar-hide pb-32 max-w-2xl xl:max-w-4xl mx-auto">
        {messages
          ?.slice(0)
          .reverse()
          .map((message: Message) => (
            <MessageComponent key={message.id} message={message} />
          ))}
      </div>
      <div ref={messageRef} />
    </>
  );
};

export default MessageList;

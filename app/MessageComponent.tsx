import Image from "next/image";
import React from "react";
import { Message } from "../typings";

type Props = {
  message: Message;
};

const MessageComponent = ({ message }: Props) => {
  const isUser = true;
  return (
    <div className={`flex items-center space-x-2 p-4 ${isUser && "ml-auto"}`}>
      <div
        className={`
      flex-shrink-0 mx-3 ${isUser && "order-2"}
      `}>
        <Image
          src={message.user.avatar}
          width={40}
          height={40}
          alt="avatar"
          className="rounded-full"
        />
      </div>
      <div>
        <p
          className={`text-[0.7rem] px-[2px] pb-[2px] mb-1 text-left text-gray-400 ${
            isUser && "text-right"
          }`}>
          {message.user.username}
        </p>
        <div className="flex items-end space-x-2">
          <div
            className={`py-2 px-3 rounded-lg max-w-xs text-sm text-white ${
              isUser ? "bg-blue-400 order-2 ml-2" : "bg-red-400"
            }`}>
            <p>{message.message}</p>
          </div>

          <p
            className={`text-[0.7rem] italic px-2 text-gray-400 ${
              isUser && "text-right"
            }`}>
            {new Date(message.created_at).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;

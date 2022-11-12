// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../redis";
import { Message } from "../../typings";
import { pusher } from "../../pusher";

type Data = {
  message: Message;
};

type ErrorData = {
  body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method !== "POST") {
    res.status(400).json({ body: "Bad request" });
    return;
  }

  const { message } = req.body;
  const newMessage = {
    ...message,
    created_at: Date.now(),
  };

  await redis.hset("messages", newMessage.id, JSON.stringify(newMessage));

  pusher.trigger("messages", "new-message", newMessage);
  res.status(200).json({ message: newMessage });
}

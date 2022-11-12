export type User = {
  username: string;
  email: string;
  avatar: string;
};

export type Message = {
  id: string;
  message: string;
  created_at: Date.now();
  user: User;
};

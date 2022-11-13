import "../styles/globals.css";
import Header from "./Header";
import Providers from "./auth/providers";
import { unstable_getServerSession } from "next-auth/next";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();
  return (
    <html>
      <head />
      <body>
        <Header session={session} />
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}

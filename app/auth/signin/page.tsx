import { getProviders } from "next-auth/react";
import SignInComponent from "./SignInComponent";

const SignInPage = async () => {
  const providers = await getProviders();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
      <SignInComponent providers={providers} />
    </div>
  );
};

export default SignInPage;

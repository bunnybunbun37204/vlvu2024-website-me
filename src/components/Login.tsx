import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

const Login = (props: { supabaseKey: string }) => {
  const supabaseUrl = "https://nratvbrsbqhnqhsyzrqo.supabase.co";
  const [key, setKey] = useState("");

  useEffect(() => {
    const data = props.supabaseKey;
    setKey(data);
  }, []);

  const supabase = createClientComponentClient({
    supabaseKey: props.supabaseKey,
    supabaseUrl: supabaseUrl,
  });

  const onClick = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:4321/api/callback",
      },
    });
    if (!error) {
      window.location.href = data.url;
    }
  };

  return (
    <button
      value="google"
      name="provider"
      className="w-[300px] h-auto dark:bg-zinc-100 p-1.5 border border-zinc-300 dark:border-zinc-100 flex justify-center items-center gap-2 rounded-md mt-2 dark:text-zinc-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed"
      type="submit"
      onClick={onClick}
      id="google"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-auto"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 256 262"
      >
        <path
          fill="#4285F4"
          d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
        ></path>
        <path
          fill="#34A853"
          d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
        ></path>
        <path
          fill="#FBBC05"
          d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
        ></path>
        <path
          fill="#EB4335"
          d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
        ></path>
      </svg>
      <div className="font-line font-bold">
        Sign in with Google
      </div>
    </button>
  );
};

export default Login;

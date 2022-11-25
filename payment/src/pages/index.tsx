import { type NextPage } from "next";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { mutateAsync: createCheckoutSession } =
    trpc.example.checkout.useMutation();

  const handleClick = async () => {
    const { checkoutUrl } = await createCheckoutSession();
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  };
  return (
    <div className="grid h-screen w-screen place-items-center bg-[#222]">
      <button
        className="w-full max-w-[400px] rounded-xl bg-black
      p-4 text-2xl font-bold text-white"
        onClick={handleClick}
      >
        Gimme money
      </button>
    </div>
  );
};

export default Home;

import { z } from "zod";

import { router, publicProcedure } from "../trpc";
import { stripe } from "../../../utils/stripe";

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),

  checkout: publicProcedure.mutation(async () => {
    const checkout = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "uah",
            product_data: {
              name: "Give Yevhenii Bakhmat a coffee",
            },
            unit_amount: 10000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://example.com/success",
      cancel_url: "https://localhost:3000/",
    });

    return {
      checkoutUrl: checkout.url,
    };
  }),
});

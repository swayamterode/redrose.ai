import { z } from "zod";

export const messageSchema = z.object({
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 character long" })
    .max(300, { message: "Message must be at least 300 character long" }),
});

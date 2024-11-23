import { z } from "zod";

export const loginSchema = z.object({
  email: z.string({ message: "Please enter a valid email!" }).email(),
});

export type LoginPayload = z.infer<typeof loginSchema>;

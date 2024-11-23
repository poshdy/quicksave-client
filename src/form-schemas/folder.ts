import { z } from "zod";

export const folderSchema = z.object({
  name: z.string().min(2),
});

export type CreateFormPayload = z.infer<typeof folderSchema>;

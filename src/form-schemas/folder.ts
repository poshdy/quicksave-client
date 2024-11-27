import { z } from "zod";

export const folderSchema = z.object({
  name: z.string().min(2),
});

export type CreateFolderPayload = z.infer<typeof folderSchema>;

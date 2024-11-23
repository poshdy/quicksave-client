"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { folderSchema, CreateFormPayload } from "@/form-schemas/folder";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
// import { axiosClient } from "@/lib/axios/client";
import { toast } from "sonner";

export function CreateFolderModal() {
  const form = useForm<CreateFormPayload>({
    resolver: zodResolver(folderSchema),
    defaultValues: {
      name: "un-titled",
    },
  });

  const handleSubmit = async (values: CreateFormPayload) => {
    try {
      //   const res = await axiosClient.post("/folders", values);
      toast(`${values.name} folder is created successfully!`);
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-36 aspect-video bg-transparent border rounded-2xl flex flex-col items-start justify-center gap-1 px-4 py-3">
          <AiOutlineFolderAdd size={20} />
          <h4 className="text-xs">Create a folder</h4>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-start gap-3">
            <AiOutlineFolderAdd size={30} /> Create folder
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Images" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Create</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

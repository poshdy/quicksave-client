import { Plus } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AiOutlineGoogle,
  AiOutlineFile,
  AiOutlineFolder,
} from "react-icons/ai";
import { CreateFolderModal } from "../folder/create.folder.modal";
const Actions = () => {
  return (
    <section className="flex items-start gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="border:none outline-none">
          <div className="w-36 aspect-video bg-primary rounded-2xl flex flex-col items-start justify-center gap-1 px-4 py-3">
            <Plus size={20} />
            <h4 className="text-xs">Upload or drop</h4>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <AiOutlineFile /> Files
          </DropdownMenuItem>
          <DropdownMenuItem>
            <AiOutlineFolder /> Folders
          </DropdownMenuItem>
          <DropdownMenuItem>
            <AiOutlineGoogle /> Import from Google Drive
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <CreateFolderModal />
    </section>
  );
};

export default Actions;

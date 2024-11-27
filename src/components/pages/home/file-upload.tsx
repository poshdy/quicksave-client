"use client";
import { useGenerateUrls } from "@/lib/actions/file.actions";
import { useDropzone, FileRejection } from "react-dropzone";
import React, { useCallback, useState } from "react";
import { ArrowUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatFileMetadata } from "@/lib/utils/file.utils";
import { toast } from "sonner";
const FileUpload = () => {
  const generateSignedUrls = useGenerateUrls();
  const [files, setFiles] = useState<File[]>([]);
  const [rejected, setRejected] = useState<FileRejection[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (acceptedFiles?.length) {
        setFiles((previousFiles) => [
          ...previousFiles,
          ...acceptedFiles.map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          ),
        ]);
      }

      if (rejectedFiles?.length) {
        setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
      }
    },
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': [],
      'text/*': [],
      'application/*': [],
    },
    maxSize: 30 * 1024 * 1024,
    onDrop,
  });

  const removeFile = (fileName: string) => {
    setFiles((files) => files.filter((file) => file?.name !== fileName));
  };

  const removeAll = () => {
    setFiles([]);
    setRejected([]);
  };

  const removeRejected = (fileName: string) => {
    setRejected((files) => files.filter(({ file }) => file?.name !== fileName));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!files) {
        toast.error("no selected files");
        return;
      }
      const formData = formatFileMetadata(files);
      await generateSignedUrls.mutateAsync(formData, {
        onSuccess(data) {
          console.log(data);
          toast.success(data.message);
        },
        onError(error) {
          console.log(error.response?.data.message);
          toast.error(error.response?.data.message);
        },
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        {...getRootProps({
          className: "p-16 mt-10 border border-dashed border-secondary",
        })}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center gap-4">
          <ArrowUp className="w-5 h-5" />
          {isDragActive ? (
            <p className="text-secondary-foreground">Drop the files here ...</p>
          ) : (
            <p className="text-secondary-foreground">
              Drag & drop files here, or click to select files
            </p>
          )}
        </div>
      </div>
      <section className="mt-10">
        <div className="flex gap-4">
          <h2 className="title text-3xl font-semibold">Preview</h2>
          <button
            type="button"
            onClick={removeAll}
            className="mt-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-secondary-400 hover:text-white transition-colors"
          >
            Remove all files
          </button>
          <Button
            type="submit"
            className="ml-auto mt-1 text-[12px] uppercase tracking-wider font-bold"
          >
            Upload
          </Button>
        </div>

        {/* Accepted files */}
        <h3 className="title text-lg font-semibold text-neutral-600 mt-10 border-b pb-3">
          Accepted Files
        </h3>
        <div className="flex flex-col gap-1 items-start">
          {files?.map((file) => (
            <span
              key={file.name}
              className="rounded-md flex items-center justify-center"
            >
              <p className="mt-2 text-neutral-500 text-[12px] font-medium">
                {file.name}
              </p>
              <X
                className="w-5 h-5 text-white"
                onClick={() => removeFile(file.name)}
              />
            </span>
          ))}
        </div>

        {/* Rejected Files */}
        <h3 className="title text-lg font-semibold text-neutral-600 mt-24 border-b pb-3">
          Rejected Files
        </h3>
        <ul className="mt-6 flex flex-col">
          {rejected.map(({ file, errors }) => (
            <li key={file.name} className="flex items-start justify-between">
              <div>
                <p className="mt-2 text-neutral-500 text-sm font-medium">
                  {file.name}
                </p>
                <ul className="text-[12px] text-red-400">
                  {errors.map((error) => (
                    <li key={error.code}>{error.message}</li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className="mt-1 py-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-secondary-400 hover:text-white transition-colors"
                onClick={() => removeRejected(file.name)}
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      </section>
    </form>
  );
};
export default FileUpload;

// const [files, setFiles] = useState<File[]>([]);
// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   if (e.target.files) {
//     const files = e.target.files;
//     setFiles(Array.from(files));
//   }
// };

// const handleUpload = async () => {

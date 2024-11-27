export type UploadedFile = {
  fileName: string;
  signedUrl: string;
};

export type FileMetaData = Pick<UploadedFile, "fileName"> & {
  fileType: string;
  fileSize: number;
};

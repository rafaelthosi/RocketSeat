import fs from "fs";

export const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename); // verifica se arquivo existe ou não
  } catch {
    return;
  }
  await fs.promises.unlink(filename); // remove arquivo
};

const fs = require("fs");
const path = require("path");

const folderPath = "../../public/core-contributors";

try {
  const files = fs.readdirSync(folderPath);

  files.forEach((filename: string) => {
    if (
      filename.endsWith(".jpg") ||
      filename.endsWith("jpeg") ||
      filename.endsWith("png")
    ) {
      const newFilename = `${filename.slice(-9, -5)}.webp`; // 移除最後的 .png，再加上 .webp
      const oldPath = path.join(folderPath, filename);
      const newPath = path.join(folderPath, newFilename);

      fs.renameSync(oldPath, newPath);
      console.log(`Renamed ${filename} to ${newFilename}`);
    }
  });

  console.log("All files renamed successfully!");
} catch (err) {
  console.error("Error occurred:", err);
}

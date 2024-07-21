import fs from "fs";

const getLink = () => {
  const ruslt = fs
    .readdirSync("./public/css")
    .filter((file) => file.endsWith(".css"))
    .map((file) => {
      return `<link rel="stylesheet" href="/css/${file}" />`;
    });

  return ruslt.join("\n");
};

export default getLink;

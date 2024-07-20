import fs from "fs";

const getScript = () => {
  const ruslt = fs
    .readdirSync("./public/js")
    .filter((file) => file.endsWith(".js"))
    .map((file) => {
      return `<script src="/js/${file}"></script>`;
    });

  return ruslt.join("\n");
};

export default getScript;

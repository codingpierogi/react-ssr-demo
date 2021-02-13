import fs from "fs";
import path from "path";

export const createTemplate = (pathToIndexHtml) => {
  const indexHtml = fs.readFileSync(pathToIndexHtml).toString("utf8");

  return {
    render(html, preloadedState) {
      const renderedIndexHtml = indexHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div><script>window.__PRELOADED_STATE__=${JSON.stringify(
          preloadedState
        )}</script>`
      );
      fs.writeFileSync(pathToIndexHtml, renderedIndexHtml);
    },
  };
};

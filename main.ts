const worker = new Worker(
  new URL("./worker.ts", import.meta.url).href,
  {
    type: "module",
  },
);

await new Promise((resolve) => setTimeout(resolve, 3000));

worker.postMessage({ filename: "./text.txt" });

while (true) {
  null;
}

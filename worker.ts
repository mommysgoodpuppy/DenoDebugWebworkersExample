const worker = self as unknown as Worker;

worker.onmessage = async (e) => {
  console.log("worker message", e);

  const { filename } = e.data;
  const text = await Deno.readTextFile(filename);
  console.log(text);
};
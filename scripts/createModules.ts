import { spawn } from "child_process";

function runCommand(command: string, args: string[] = []): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: "inherit" });

    child.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with code ${code}`));
      }
    });
  });
}

function numberToLetters(num: number): string {
  let result = "";
  while (num >= 0) {
    result = String.fromCharCode((num % 26) + 97) + result;
    num = Math.floor(num / 26) - 1;
  }
  return result;
}

(async () => {
  const cases = {
    one: 1,
    ten: 10,
    hundred: 100,
    thousand: 1_000,
    tenThousand: 10_000,
  };
  for (const [name, count] of Object.entries(cases)) {
    await runCommand("vovk", ["new", "segment", name, "--overwrite"]);
    for (let i = 0; i < count; i++) {
      await runCommand("vovk", [
        "new",
        "controller",
        `${name}/${numberToLetters(i)}`,
        "--overwrite",
      ]);
    }
  }
})();

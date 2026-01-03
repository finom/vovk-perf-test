import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elves")
export default class ElfController {
  @operation({
    summary: "Get Elves",
  })
  @get()
  static getElves = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elf",
  })
  @post("{id}")
  static createElf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}

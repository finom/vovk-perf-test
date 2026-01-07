import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elf")
export default class ElfController {
  @operation({
    summary: "Get Elf",
  })
  @get()
  static getElf = procedure({
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

import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elves")
export default class ElfController {
  @operation({
    summary: "Get Elves",
  })
  @get()
  static getElves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Elf",
  })
  @post("{id}")
  static createElf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}

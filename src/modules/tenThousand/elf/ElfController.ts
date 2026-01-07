import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elf")
export default class ElfController {
  @operation({
    summary: "Get Elf",
  })
  @get()
  static getElf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elf",
  })
  @post("{id}")
  static createElf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}

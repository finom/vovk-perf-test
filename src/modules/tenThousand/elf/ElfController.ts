import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

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
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

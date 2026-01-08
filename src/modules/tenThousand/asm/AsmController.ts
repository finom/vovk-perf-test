import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asm")
export default class AsmController {
  @operation({
    summary: "Get Asm",
  })
  @get()
  static getAsm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asm",
  })
  @post("{id}")
  static createAsm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

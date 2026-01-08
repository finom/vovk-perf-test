import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imm")
export default class ImmController {
  @operation({
    summary: "Get Imm",
  })
  @get()
  static getImm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imm",
  })
  @post("{id}")
  static createImm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

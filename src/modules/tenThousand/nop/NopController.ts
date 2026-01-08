import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nop")
export default class NopController {
  @operation({
    summary: "Get Nop",
  })
  @get()
  static getNop = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nop",
  })
  @post("{id}")
  static createNop = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

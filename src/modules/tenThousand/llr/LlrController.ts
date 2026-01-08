import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("llr")
export default class LlrController {
  @operation({
    summary: "Get Llr",
  })
  @get()
  static getLlr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llr",
  })
  @post("{id}")
  static createLlr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

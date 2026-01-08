import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("llw")
export default class LlwController {
  @operation({
    summary: "Get Llw",
  })
  @get()
  static getLlw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llw",
  })
  @post("{id}")
  static createLlw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}

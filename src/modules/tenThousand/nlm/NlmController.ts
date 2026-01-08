import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nlm")
export default class NlmController {
  @operation({
    summary: "Get Nlm",
  })
  @get()
  static getNlm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nlm",
  })
  @post("{id}")
  static createNlm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
